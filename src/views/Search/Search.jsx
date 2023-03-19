import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { AlbumContainer, SectionSearch, Title } from './Search.styled';
import useRequest from '../../hooks/useRequest';
import { TitleSong } from '../../components/CurrentSongInfo/CurrentSongInfo.styled';
import { SearchSongItem } from '../../components/SearchSongItem/SearchSongItem';
import ItemCard from '../../components/ItemCard';

function Search() {
    const { querySearch } = useParams();
    const { pathname } = useLocation();
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const cancelSource = axios.CancelToken.source();
    const accessToken = localStorage.getItem('access_token');
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const searchItems = getWithToken(
                `https://api.spotify.com/v1/search?q=${querySearch}%90&type=album,track,artist&limit=5`,
                accessToken,
                cancelSource
            );
            if (pathname.length > 8) {
                try {
                    const searchedItems = await searchItems();
                    const {
                        tracks: _tracks,
                        albums: _albums,
                        artists: _artists,
                    } = searchedItems.data;

                    if (typeof searchedItems !== 'undefined') {
                        setTracks(_tracks.items);
                        setAlbums(_albums.items);
                        setArtists(_artists.items);
                        console.log(albums);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };

        makeRequest();
    }, [querySearch]);
    return (
        <>
            <SectionSearch>
                {pathname.length <= 8 ? (
                    <Title>
                        <h2>Explorar todo</h2>
                    </Title>
                ) : (
                    <>
                        <Title>
                            <h2>Canciones</h2>
                        </Title>
                        <div>
                            {tracks.map((track) => (
                                <SearchSongItem track={track} />
                            ))}
                        </div>
                        <Title>
                            <h2>Albumes</h2>
                        </Title>
                        <AlbumContainer>
                            {albums?.map((album) => (
                                <ItemCard
                                    key={album.id}
                                    name={album.name}
                                    artists={album.artists}
                                    img={album.images[0]?.url}
                                    uri={album.uri}
                                />
                            ))}
                        </AlbumContainer>
                        <Title>
                            <h2>Artistas</h2>
                        </Title>
                    </>
                )}
            </SectionSearch>
        </>
    );
}

export default Search;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlayListItem } from '../../components/PlayListItem';
import { SearchSongItem } from '../../components/SearchSongItem/SearchSongItem';
import useRequest from '../../hooks/useRequest';
import {
    HeaderSongs,
    InfoPlaylist,
    PlaylistImage,
    PlayListName,
    SectionPlaylist,
} from './Playlist.styled';

export const Playlist = () => {
    const { id } = useParams();

    const [playlist, setPlaylist] = useState({});
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getPlaylist = getWithToken(
                `https://api.spotify.com/v1/playlists/${id}`,
                accessToken,
                cancelSource
            );

            try {
                const { data } = await getPlaylist();
                if (typeof data !== 'undefined') {
                    setPlaylist(data);
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        makeRequest();
    }, [id]);
    return (
        <SectionPlaylist>
            {playlist && Object.keys(playlist).length > 0 && (
                <>
                    <InfoPlaylist>
                        <PlaylistImage src={playlist.images[0].url} alt="" />
                        <PlayListName>
                            <p className="type">Playlist</p>
                            <h1 className="name">{playlist.name}</h1>
                            <div className="info">
                                <p>{playlist.owner.display_name}</p>
                                <p>{playlist.followers.total} me gusta</p>
                                <p>{playlist.tracks.total} canciones</p>
                            </div>
                        </PlayListName>
                    </InfoPlaylist>
                    <HeaderSongs>
                        <div>#</div>
                        <span>Titulo</span>
                        <span>Álbum</span>
                        <span>Fecha en que se agregó</span>
                        <span>
                            <svg
                                role="img"
                                height="16"
                                width="16"
                                ariaHidden="true"
                                viewBox="0 0 16 16"
                                className="Svg-sc-ytk21e-0 gQUQL"
                                fill="#eee"
                            >
                                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                            </svg>
                        </span>
                    </HeaderSongs>
                    <div>
                        {playlist.tracks.items.map(
                            ({ track, added_at }, index) => (
                                <PlayListItem
                                    key={track.id + index}
                                    track={track}
                                    index={index + 1}
                                    added_at={added_at}
                                />
                            )
                        )}
                    </div>
                </>
            )}
        </SectionPlaylist>
    );
};

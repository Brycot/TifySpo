import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlayListItem } from '../../components/PlayListItem';
import { SearchSongItem } from '../../components/SearchSongItem/SearchSongItem';
import useRequest from '../../hooks/useRequest';
import {
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
                    <div>
                        {playlist.tracks.items.map(({ track }, index) => (
                            <PlayListItem
                                key={track.id + index}
                                track={track}
                                index={index + 1}
                            />
                        ))}
                    </div>
                </>
            )}
        </SectionPlaylist>
    );
};

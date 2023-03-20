import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';
import { Footer, SectionQueue, Title } from './Queue.styled';
import { SearchSongItem } from '../../components/SearchSongItem/SearchSongItem';

export const Queue = () => {
    const [currentlyPlaying, setCurrentlyPlaying] = useState({});
    const [queue, setQueue] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getUserQueue = getWithToken(
                `https://api.spotify.com/v1/me/player/queue`,
                accessToken,
                cancelSource
            );

            try {
                const { data } = await getUserQueue();
                if (typeof data !== 'undefined') {
                    setCurrentlyPlaying(data.currently_playing);
                    setQueue(data.queue);
                }
            } catch (error) {
                console.log(error);
            }
        };

        makeRequest();
    }, []);
    return (
        <SectionQueue>
            <Title>
                <h2>Cola de Reproducción</h2>
            </Title>
            <section>
                <h5>Estás escuchando</h5>
                {Object.keys(currentlyPlaying).length > 0 && (
                    <SearchSongItem track={currentlyPlaying} />
                )}
            </section>
            {queue.length > 1 && (
                <section>
                    <h5>Próximas canciones:</h5>
                    {queue.map((track) => (
                        <SearchSongItem key={track.id} track={track} />
                    ))}
                </section>
            )}
            <Footer></Footer>
        </SectionQueue>
    );
};

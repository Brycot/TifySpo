import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';
import ItemCard from '../../components/ItemCard';
import { GridContainer, LibrarySection, Title } from './Library.styled';

export const Library = () => {
    const [playLists, setPlayLists] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getUserPlaylist = getWithToken(
                `https://api.spotify.com/v1/me/playlists`,
                accessToken,
                cancelSource
            );

            try {
                const userPlaylist = await getUserPlaylist();
                if (typeof userPlaylist !== 'undefined') {
                    setPlayLists(userPlaylist.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        };

        makeRequest();
    }, []);
    return (
        <>
            <LibrarySection>
                <Title>
                    <h1>Playlists</h1>
                </Title>
                <GridContainer>
                    {playLists?.map((playList) => (
                        <ItemCard
                            key={playList.id}
                            uri={playList.uri}
                            name={playList.name}
                            img={playList.images[0].url}
                        />
                    ))}
                </GridContainer>
            </LibrarySection>
        </>
    );
};

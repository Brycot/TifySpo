import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';
import ItemCard from '../../components/ItemCard';
import { GridContainer, LibrarySection, Title } from './Albums.styled';

export const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getUserAlbums = getWithToken(
                `https://api.spotify.com/v1/me/albums`,
                accessToken,
                cancelSource
            );

            try {
                const userAlbums = await getUserAlbums();
                if (typeof userAlbums !== 'undefined') {
                    setAlbums(userAlbums.data.items);
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
                    <h2>Albums</h2>
                </Title>
                <GridContainer>
                    {albums?.map(({ album }) => (
                        <ItemCard
                            key={album.id}
                            uri={album.uri}
                            name={album.name}
                            img={album.images[0].url}
                        />
                    ))}
                </GridContainer>
            </LibrarySection>
        </>
    );
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';
import { ArtistCard } from '../../components/AritstCard';
import { GridContainer, LibrarySection, Title } from './Artists.styled';

export const Artists = () => {
    const [artists, setArtists] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getUserArtists = getWithToken(
                `https://api.spotify.com/v1/me/following?type=artist`,
                accessToken,
                cancelSource
            );

            try {
                const userArtists = await getUserArtists();
                if (typeof userArtists !== 'undefined') {
                    setArtists(userArtists.data.artists.items);
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
                    <h1>Artistas</h1>
                </Title>
                <GridContainer>
                    {artists?.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            uri={artist.uri}
                            name={artist.name}
                            img={artist.images[0].url}
                        />
                    ))}
                </GridContainer>
            </LibrarySection>
        </>
    );
};

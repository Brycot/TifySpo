import { useEffect, useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';
import { LikedSection, Title } from './Liked.styles';

export const Liked = () => {
    const [likedSongs, setLikedSongs] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getUserLikedSongs = getWithToken(
                `https://api.spotify.com/v1/me/tracks`,
                accessToken,
                cancelSource
            );

            try {
                const userLikedSongs = await getUserLikedSongs();
                if (typeof userLikedSongs !== 'undefined') {
                    console.log(userLikedSongs.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        makeRequest();
    }, []);
    return (
        <LikedSection>
            <Title>
                <h1>Muy Pronto...</h1>
            </Title>
        </LikedSection>
    );
};

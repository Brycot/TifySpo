import { useEffect, useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';
import { EpisodesSection, Title } from './Episodes.styled';

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const cancelSource = axios.CancelToken.source();
    const { getWithToken } = useRequest();
    useEffect(() => {
        const makeRequest = async () => {
            const getUserEpisodes = getWithToken(
                `https://api.spotify.com/v1/me/episodes`,
                accessToken,
                cancelSource
            );

            try {
                const userEpisodes = await getUserEpisodes();
                if (typeof userEpisodes !== 'undefined') {
                    console.log(userEpisodes.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        makeRequest();
    }, []);
    return (
        <EpisodesSection>
            <Title>
                <h1>Muy Pronto...</h1>
            </Title>
        </EpisodesSection>
    );
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    Section,
    Title,
    Gridrecomendatios,
    SectionHome,
    GridItems,
} from './home.styled';

import { Recomendation } from '../../components/Recomendation';
import useRequest from '../../hooks/useRequest';
import ItemCard from '../../components/ItemCard';

function Home() {
    const [topItems, setTopItems] = useState([]);
    const [topPlaylist, setTopPlaylist] = useState([]);
    const [recentPlayed, setRecentPlayed] = useState([]);
    const [reccomendatios, setReccomendatios] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const { getWithToken, updateWithToken } = useRequest();

    useEffect(() => {
        const cancelSource = axios.CancelToken.source();
        async function makeRequest() {
            const reqUserTopItems = getWithToken(
                'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=6',
                accessToken,
                cancelSource
            );

            const reqUserFeaturedPlaylist = getWithToken(
                'https://api.spotify.com/v1/browse/featured-playlists?limit=6',
                accessToken,
                cancelSource
            );

            const reqRecentPlayed = getWithToken(
                'https://api.spotify.com/v1/me/player/recently-played?limit=6',
                accessToken,
                cancelSource
            );
            try {
                const [
                    _userTopItems,
                    _userFeaturedPlaylist,
                    _userRecentPlayed,
                ] = await Promise.all([
                    reqUserTopItems(),
                    reqUserFeaturedPlaylist(),
                    reqRecentPlayed(),
                ]);
                // handle axios token cancellation

                if (
                    typeof _userTopItems !== 'undefined' &&
                    typeof _userFeaturedPlaylist !== 'undefined' &&
                    typeof _userRecentPlayed !== 'undefined'
                ) {
                    setTopItems(_userTopItems.data.items);
                    setTopPlaylist(_userFeaturedPlaylist.data.playlists.items);
                    setRecentPlayed(_userRecentPlayed.data.items);
                    const topTracksIds = _userTopItems.data.items
                        .slice(0, 5)
                        .map((s) => s.id)
                        .join(',');
                    const reqRecommendations = getWithToken(
                        `https://api.spotify.com/v1/recommendations?limit=6&seed_tracks=${topTracksIds}`,
                        accessToken,
                        cancelSource
                    );
                    const userRecommendations = await reqRecommendations();
                    setReccomendatios(userRecommendations.data.tracks);
                }
            } catch (error) {
                console.log(error);
            }
        }

        makeRequest();
    }, []);

    return (
        <>
            <SectionHome>
                <Section>
                    <Title>
                        <h1>Buenas Tardes</h1>
                    </Title>
                    <Gridrecomendatios>
                        {topItems &&
                            topItems.map((item, index) => (
                                <Recomendation
                                    name={item?.name}
                                    key={item?.id}
                                    uri={item?.uri}
                                    img={item?.album?.images[0]?.url}
                                />
                            ))}
                    </Gridrecomendatios>
                </Section>
                <Section>
                    <Title>
                        <h2>Recomendado para ti</h2>
                    </Title>
                    <GridItems>
                        {reccomendatios &&
                            reccomendatios.map((item, index) => (
                                <ItemCard
                                    name={item?.name}
                                    key={item?.id + index}
                                    uri={item?.uri}
                                    img={item?.album?.images[0]?.url}
                                    artists={item?.artists}
                                    track
                                />
                            ))}
                    </GridItems>
                </Section>
                <Section>
                    <Title>
                        <h2>Escuchado Recientemente</h2>
                    </Title>
                    <GridItems>
                        {recentPlayed &&
                            recentPlayed.map((item, index) => (
                                <ItemCard
                                    name={item?.track.name}
                                    key={item?.track.id + index}
                                    uri={item?.track.uri}
                                    img={item?.track?.album?.images[0]?.url}
                                    artists={item?.track?.artists}
                                    track
                                />
                            ))}
                    </GridItems>
                </Section>
                <Section>
                    <Title>
                        <h2>Descubre Playlists</h2>
                    </Title>
                    <GridItems>
                        {topPlaylist &&
                            topPlaylist.map((item, index) => (
                                <ItemCard
                                    key={item?.id + index}
                                    name={item.name}
                                    img={item.images[0].url}
                                    uri={item.uri}
                                />
                            ))}
                    </GridItems>
                </Section>
            </SectionHome>
        </>
    );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Section, Title, Gridrecomendatios, SectionHome } from "./home.styled";

import { Recomendation } from "../../components/Recomendation";
import useRequest from "../../hooks/useRequest";

function Home() {
    const [topItems, setTopItems] = useState([]);
    const accessToken = localStorage.getItem("access_token");
    const { getWithToken, updateWithToken } = useRequest();

    useEffect(() => {
        const cancelSource = axios.CancelToken.source();
        async function makeRequest() {
            const reqUserTopItems = getWithToken(
                "https://api.spotify.com/v1/me/top/tracks?limit=6",
                accessToken,
                cancelSource
            );
            try {
                const [_userTopItems] = await Promise.all([reqUserTopItems()]);
                // handle axios token cancellation
                if (typeof _userTopItems !== "undefined") {
                    setTopItems(_userTopItems.data.items);
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
            </SectionHome>
        </>
    );
}

export default Home;

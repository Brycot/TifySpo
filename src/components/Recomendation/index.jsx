import React from "react";

import { RecomendationContainer } from "./Recomendation.styled";
import { PlayButtonSong } from "../../helpers/Icons";
import useRequest from "../../hooks/useRequest";

export function Recomendation({ name, img, uri }) {
    const accessToken = localStorage.getItem("access_token");

    const { updateWithToken } = useRequest();

    function handlePlaySong() {
        const body = {
            uris: [uri]
        };
        const requestFunc = updateWithToken(
            `https://api.spotify.com/v1/me/player/play`,
            accessToken,
            body
        );
        const requestMusic = async () => {
            const response = await requestFunc();
        };
        requestMusic();
    }

    return (
        <RecomendationContainer>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="name">
                <p>{name}</p>
                <button onClick={handlePlaySong}>
                    <PlayButtonSong />
                </button>
            </div>
        </RecomendationContainer>
    );
}

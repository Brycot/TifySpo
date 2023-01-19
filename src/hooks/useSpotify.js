import axios from "axios";
import { useState } from "react";

const updateWithToken = (enpoint, token, data) => {
    let source = axios.CancelToken.source();

    const request = async () => {
        let result;
        const options = {
            url: enpoint,
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            data,
            cancelToken: source.token,
        };
        try {
            result = await axios(options);
        } catch (error) {
            if (axios.isCancel(error)) return;
            return error;
        }
        return result;
    };

    return request;
};
const updateState = () => {
    if (!fireyPlayer.current) {
        getPlayerInfo();
    }
};

export const useSpotify = () => {
    const spotifyToken = localStorage.getItem("access_token");

    const [playbackState, setPlaybackState] = useState({
        loading: false,
        play: false,
        shuffle: false,
        repeat: false,
        progress: 0,
        duration: 0,
    });

    const toggleMusic = (_) => {
        const request = updateWithToken(
            `${
                playbackState.play
                    ? `https://api.spotify.com/v1/me/player/pause`
                    : `https://api.spotify.com/v1/me/player/play`
            }`,
            spotifyToken
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                if (response.status === 202) {
                    setPlaybackState((state) => ({
                        ...state,
                        play: !state.play,
                    }));
                    // updateState();
                    console.log("bien", response);
                } else {
                    // setFlash('Opps, something went wrong!');
                    console.log("mal", response);
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    return {
        toggleMusic,
    };
};

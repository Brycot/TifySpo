import axios from "axios";
import { useState } from "react";
import useRequest from "./useRequest";

export const useSpotify = () => {
    const spotifyToken = localStorage.getItem("access_token");
    const { updateWithToken, postWithToken, getWithToken } = useRequest();
    // reproducir musica
    const toggleMusic = (playbackState, setPlaybackState) => {
        const request = updateWithToken(
            `${
                playbackState.play
                    ? `https://api.spotify.com/v1/me/player/pause`
                    : `https://api.spotify.com/v1/me/player/play`
            }`,
            spotifyToken
        );
        const requestFunc = async () => {
            try {
                const response = await request();
                if (response.status === 202) {
                    setPlaybackState((state) => ({
                        ...state,
                        play: !state.play,
                    }));
                    console.log("bien", response);
                } else {
                    console.log("mal", response);
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    // activar/ desactivar aleatorio
    const toggleShuffle = (playbackState, setPlaybackState) => {
        const request = updateWithToken(
            `https://api.spotify.com/v1/me/player/shuffle?state=${!playbackState.shuffle}`,
            spotifyToken
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                if (response.status === 202) {
                    setPlaybackState((state) => ({
                        ...state,
                        shuffle: !state.shuffle,
                    }));
                    console.log(playbackState);
                } else {
                    console.log("Opps, something went wrong!");
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    // canción anterior
    const skipPrevious = () => {
        const request = postWithToken(
            "https://api.spotify.com/v1/me/player/previous",
            spotifyToken
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                if (response.status !== 204) {
                    console.log("Opps, something went wrong!");
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    // cancion siguiente
    const skipNext = () => {
        const request = postWithToken(
            "https://api.spotify.com/v1/me/player/next",
            spotifyToken
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                if (response.status !== 204) {
                    console.log("Opps, something went wrong!");
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    // modo de repetición
    const toggleRepeat = (playbackState, setPlaybackState) => {
        const request = updateWithToken(
            `https://api.spotify.com/v1/me/player/repeat?state=${
                playbackState.repeat ? `off` : `track`
            }`,
            spotifyToken
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                if (response.status === 202) {
                    setPlaybackState((state) => ({
                        ...state,
                        repeat: !state.repeat,
                    }));
                    console.log(
                        `Repeat mode ${
                            playbackState.repeat ? "disabled" : "enabled"
                        }`
                    );
                } else {
                    console.log("Opps, something went wrong!");
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    // transferir el playback a uno de los dispositivos disponibles
    const transferPlayBack = (id) => {
        const body = {
            device_ids: [id]
        };
        const request = updateWithToken(
            `https://api.spotify.com/v1/me/player`,
            spotifyToken,
            body
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                if (response.status === 202) {
                    console.log('ya');
                } else {
                    console.log("Opps");
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        };

        requestFunc();
    };

    const handleVolume = (ratio, setVolume) => {
        const integer = Math.round(ratio * 100);
        const seekVolume = async _ => {
            const requestFunc = updateWithToken(`https://api.spotify.com/v1/me/player/volume?volume_percent=${integer}`, spotifyToken);
            try {
                const response = await requestFunc();
                if (response.status === 204) {
                    setVolume(ratio);
                } else {
                    console.log('Opps, something went wrong!');
                }
            } catch (error) {
                console.log(error)
            }
        }
        seekVolume();
    };

    const handlePosition = (ratio, setPosition) => {
        const integer = Math.round(ratio * 60000);
        console.log(integer);
        const seekPosition = async _ => {
            const requestFunc = updateWithToken(`https://api.spotify.com/v1/me/player/seek?position_ms=${integer}`, spotifyToken);
            try {
                const response = await requestFunc();
                if (response.status === 204) {
                    setPosition(ratio);
                } else {
                    console.log('Opps, something went wrong!');
                }
            } catch (error) {
                console.log(error)
            }
        }
        seekPosition();
    };
    return {
        toggleMusic,
        toggleShuffle,
        skipPrevious,
        skipNext,
        toggleRepeat,
        transferPlayBack,
        handleVolume,
        handlePosition
    };
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSpotify } from "../hooks/useSpotify";
const track = {
    name: "",
    album: {
        images: [{ url: "" }],
    },
    artists: [{ name: "" }],
};

function SdkSpotify() {
    const { toggleMusic } = useSpotify();
    
    const token = localStorage.getItem("access_token");
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);
    
    const handlePause = async () => {
        // player.togglePlay().then(() => {
        //     console.log("Toggled playback!");
        // });
        await player.togglePlay();
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new Spotify.Player({
                name: "TifySpo",
                getOAuthToken: (cb) => {
                    cb(token);
                },
                volume: 0.5,
            });

            setPlayer(player);

            player.addListener("ready", ({ device_id }) => {
                console.log("Ready with Device ID", device_id);
            });

            player.addListener("not_ready", ({ device_id }) => {
                console.log("Device ID has gone offline", device_id);
            });

            player.addListener("player_state_changed", async (state) => {
                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                // player.getCurrentState().then((state) => {
                //     !state ? setActive(false) : setActive(true);
                // });
                const currentState = await player.getCurrentState();
                !state ? setActive(false) : setActive(true);

                console.log(currentState);
            });

            player.connect().then((success) => {
                if (success) {
                    console.log(
                        "The Web Playback SDK successfully connected to Spotify!"
                    );
                }
            });
        };
    }, []);

    if (!is_active) {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <b>
                            {" "}
                            Instance not active. Transfer your playback using
                            your Spotify app{" "}
                        </b>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <img
                            src={current_track.album.images[0].url}
                            className="now-playing__cover"
                            alt=""
                        />

                        <div className="now-playing__side">
                            <div className="now-playing__name">
                                {current_track.name}
                            </div>
                            <div className="now-playing__artist">
                                {current_track.artists[0].name}
                            </div>

                            <button
                                className="btn-spotify"
                                onClick={() => {
                                    player.previousTrack();
                                }}
                            >
                                &lt;&lt;
                            </button>

                            <button
                                className="btn-spotify"
                                onClick={() => {
                                    // player.togglePlay();
                                    toggleMusic();
                                }}
                            >
                                {is_paused ? "PLAY" : "PAUSE"}
                            </button>

                            <button
                                className="btn-spotify"
                                onClick={() => {
                                    player.nextTrack();
                                }}
                            >
                                &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SdkSpotify;

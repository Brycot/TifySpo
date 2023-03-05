import React, { useEffect, useContext, useState, useRef } from 'react';

import SongInfoPlayer from '../CurrentSongInfo/CurrentSongInfo';
import Player from '../Player';
import AddonsControl from '../AddonsControl';
import { Footer } from './PlayingBar.styled';
import { useSpotify } from '../../hooks/useSpotify';
import useRequest from '../../hooks/useRequest';
import { CurrentTrackContext } from '../../utils/context';

function PlayingBar() {
    const { toggleMusic } = useSpotify();
    const token = localStorage.getItem('access_token');
    const { currentTrack, setCurrentTrack } = useContext(CurrentTrackContext);
    const { reqWithToken } = useRequest();
    let tifySpoPlayer = useRef(null);

    const [playbackState, setPlaybackState] = useState({
        loading: false,
        play: false,
        shuffle: false,
        repeat: false,
        progress: 0,
        duration: 0,
    });

    const loadScript = () => {
        const script = document.createElement('script');
        script.id = 'spotify-player';
        script.type = 'text/javascript';
        script.async = 'async';
        script.defer = 'defer';
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        document.body.appendChild(script);
    };

    const InitializePlayer = () => {
        console.log('initializing TifySpo 👾');
        let { Player } = window.Spotify;
        tifySpoPlayer = new Player({
            name: 'TifySpo',
            getOAuthToken: (cb) => {
                cb(token);
            },
        });
        // Error handling
        tifySpoPlayer.addListener('initialization_error', ({ message }) => {
            console.log(message);
        });
        tifySpoPlayer.addListener('authentication_error', ({ message }) => {
            console.log(message);
        });
        tifySpoPlayer.addListener('account_error', ({ message }) => {
            console.log(message);
        });
        tifySpoPlayer.addListener('playback_error', ({ message }) => {
            console.log(message);
        });
        // Playback status updates
        tifySpoPlayer.addListener('player_state_changed', (state) => {
            try {
                if (state) {
                    const {
                        duration,
                        loading,
                        paused,
                        position,
                        repeat_mode,
                        shuffle,
                        track_window,
                    } = state;
                    const { current_track } = track_window;
                    setCurrentTrack({ ...current_track, play: !paused });
                    setPlaybackState((state) => ({
                        ...state,
                        loading: loading,
                        play: !paused,
                        shuffle: shuffle,
                        repeat: repeat_mode !== 0,
                        progress: position,
                        duration: duration,
                    }));
                }
            } catch (error) {
                console.log(error);
            }
        });
        // Ready
        tifySpoPlayer.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });
        // Not Ready
        tifySpoPlayer.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });
        // Connect the player!
        tifySpoPlayer.connect();
    };

    const getPlayerInfo = (_) => {
        const reqInformations = reqWithToken(
            'https://api.spotify.com/v1/me/player',
            token
        );
        const getFunc = async () => {
            try {
                const response = await reqInformations();
                if (response.status === 200) {
                    const { data } = response;
                    const {
                        is_playing,
                        item,
                        progress_ms,
                        repeat_state,
                        shuffle_state,
                    } = data;
                    setCurrentTrack({ ...item, play: is_playing });

                    setPlaybackState((state) => ({
                        ...state,
                        play: is_playing,
                        shuffle: shuffle_state,
                        repeat: repeat_state !== 'off',
                        duration: item.duration_ms,
                        progress: progress_ms,
                    }));
                } else if (response.status === 202) {
                    console.log('fewfwe');
                }
            } catch (error) {
                console.log(error);
            }
        };
        getFunc();
    };

    useEffect(() => {
        // initialize script
        loadScript();
        window.onSpotifyWebPlaybackSDKReady = () => InitializePlayer();
        getPlayerInfo();
        // get current state of the player
        // return () => {
        //     tifySpoPlayer.disconnect();
        // };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getPlayerInfo();
    }, [playbackState]);
    return (
        <Footer>
            <SongInfoPlayer currentTrack={currentTrack} />
            <Player
                playbackState={playbackState}
                setPlaybackState={setPlaybackState}
            />
            <AddonsControl />
        </Footer>
    );
}

export default PlayingBar;

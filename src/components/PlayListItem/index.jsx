import React from 'react';
import { PlayButtonSongItem } from '../../helpers/Icons';
import useRequest from '../../hooks/useRequest';
import { TitleSong } from '../CurrentSongInfo/CurrentSongInfo.styled';
import { Artist, SongContainer } from './PlayListItem.styled';

export const PlayListItem = ({ track, index }) => {
    const accessToken = localStorage.getItem('access_token');

    const { updateWithToken } = useRequest();

    const handlePlaySong = () => {
        const body = {
            uris: [track.uri],
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
    };

    return (
        
        <SongContainer key={track.id}>
            <div className="songImage_Container">
                <p>{index}</p>
                <button onClick={handlePlaySong}>
                    <PlayButtonSongItem />
                </button>
            </div>
            <img src={track.album.images[0].url} alt="" />
            <div className="SongText">
                <TitleSong>{track.name}</TitleSong>
                <div>
                    {track?.artists?.map((artist, i) => (
                        <Artist href={artist.url} key={i}>
                            {artist.name}
                        </Artist>
                    ))}
                </div>
            </div>
            <p className="songDuration">2:33</p>
        </SongContainer>
    );
};

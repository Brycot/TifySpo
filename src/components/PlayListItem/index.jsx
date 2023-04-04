import React from 'react';
import { getTimePlayer } from '../../helpers/getTimePlayer';
import { PlayButtonSongItem } from '../../helpers/Icons';
import useRequest from '../../hooks/useRequest';
import { Artist, SongContainer, TitleSong } from './PlayListItem.styled';

export const PlayListItem = ({ track, added_at, index }) => {
    const accessToken = localStorage.getItem('access_token');
    const { updateWithToken } = useRequest();
    const songDuration = getTimePlayer(track.duration_ms);
    const date = new Date(added_at);
    const dateSong = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
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
            <div className="songImage_Container" aria-colindex="1">
                <p>{index}</p>
                <button onClick={handlePlaySong}>
                    <PlayButtonSongItem />
                </button>
            </div>
            <div className="SongText" aria-colindex="2">
                <img src={track.album.images[0].url} alt="" />
                <div>
                    <TitleSong>{track.name}</TitleSong>
                    <span>
                        {track?.artists?.map((artist, i) => (
                            <Artist href={artist.url} key={i}>
                                {artist.name}
                            </Artist>
                        ))}
                    </span>
                </div>
            </div>
            <span aria-colindex="3" className="song_Album">
                <a>{track.album.name}</a>
            </span>
            <div aria-colindex="4" className='song_date'>
                <p>{dateSong}</p>
            </div>
            <p aria-colindex="5" className="songDuration">
                {songDuration}
            </p>
        </SongContainer>
    );
};

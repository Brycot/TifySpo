import React from 'react';
import { TitleSong } from '../CurrentSongInfo/CurrentSongInfo.styled';
import { Artist, SongContainer } from './SearchSongItem.styled';

export const SearchSongItem = ({ track }) => {
    return (
        <SongContainer key={track.id}>
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

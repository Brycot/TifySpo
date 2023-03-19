import React from 'react';

import { CardContainer } from './ItemCard.styled';
import { PlayButtonSong } from '../../helpers/Icons';
import useRequest from '../../hooks/useRequest';

function ItemCard({ name, img, uri, artists, track }) {
    const accessToken = localStorage.getItem('access_token');

    const { updateWithToken } = useRequest();

    function handlePlaySong() {
        let body = {
            context_uri: uri,
        };
        if (track) {
            body = {
                uris: [uri],
            };
        }
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
        <CardContainer>
            <div className="Card">
                <div className="Card__ImgContainer">
                    <img src={img} alt="" />
                    <button onClick={handlePlaySong}>
                        <PlayButtonSong />
                    </button>
                </div>

                <div className="Card__Title">
                    <a className="Card__Title__Song" href="">
                        {name}
                    </a>
                    {artists && (
                        <div className="Card__Title__ArtistContainer">
                            {artists.map((artist) => (
                                <a
                                    className="Card__Title__Artist"
                                    href=""
                                    key={artist.id}
                                >
                                    {artist.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </CardContainer>
    );
}

export default ItemCard;

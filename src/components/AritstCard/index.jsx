import { PlayButtonSong } from '../../helpers/Icons';
import { CardContainer } from './ArtistCard.styled';

export const ArtistCard = ({ img, name, id }) => {
    return (
        <CardContainer>
            <div className="Card">
                <div className="Card__ImgContainer">
                    <img src={img} alt="" />
                    <button>
                        <PlayButtonSong />
                    </button>
                </div>

                <div className="Card__Title">
                    <p className="Card__Title__Song" href="">
                        {name}
                    </p>
                    <p>Artista</p>
                </div>
            </div>
        </CardContainer>
    );
};

import styled from "styled-components";

export const Img = styled.img`
    width: 56px;
    height: 56px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
export const DivMusicInfo = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & .SongText {
        width: 287px;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0 14px;
    }
`;
export const ButtonFav = styled.button`
    width: 32px;
    height: 32px;
    background: transparent;
    border: 0;
    color: #bababa;
`;
export const Svg = styled.svg`
    color: #bababa;
    fill: currentcolor;
`;
export const TitleSong = styled.a`
    font-size: 0.875rem;
`;
export const Artist = styled.a`
    font-size: 0.75rem;
    color: #b3b3b3;
    text-decoration: none;
`;

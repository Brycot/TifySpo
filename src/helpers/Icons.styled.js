import styled from "styled-components";

export const Svg = styled.svg`
    fill: currentcolor;
    max-width: 131px;
    color: #b3b3b3;
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 2px;
    opacity: .7;
`;

export const DivFavs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg,#450af5,#c4efd9);
    border-radius: 2px;
    opacity: .7;
    & div svg {
        color: white;
    }
`;
export const DivCaps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    background: #006450;
    border-radius: 2px;
    opacity: .7;
    & div svg {
    color: #1ed760;

    }
`;

export const DivContainerSvg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: #000;
    border-radius: 2px;
    & svg {
        color: #000;
    }
`;

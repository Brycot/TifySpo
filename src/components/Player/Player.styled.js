import styled, { css } from "styled-components";

export const PlayerControlButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    & .playerControls-left {
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }
    & .playerControls-right {
        display: flex;
        justify-content: flex-start;
        flex: 1;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    width: 36px;
    height: 36px;
    ${(props) =>
        props.playPause &&
        css`
            background-color: #bababa;
            border-radius: 50%;
        `};
`;

export const Svg = styled.svg`
    color: #bababa;
    fill: currentcolor;

    ${(props) =>
        props.playPause &&
        css`
            color: #121212;
        `};
`;

export const PlayBackbar = styled.div`
    width: 100%;
    display: flex;
`;

export const PlaybackNumber = styled.p`
    color: #6a6a6a;
    font-size: 0.6875rem;
`;

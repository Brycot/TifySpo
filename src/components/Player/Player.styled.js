import styled, { css } from "styled-components";

export const PlayerSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 722px;
`;

export const PlayerControlButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
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
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
        props.playPause &&
        css`
            background-color: #eee;
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
    align-items: center;
    gap: 10px;
    & input {
        width: 100%;
        min-width: 198px;
        max-width: 626px;
        height: 4px;
    }
`;

export const PlaybackNumber = styled.p`
    color: #bababa;
    font-size: 0.6875rem;
`;

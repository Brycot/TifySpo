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
    margin-bottom: 8px;
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
            background-color: #bababa;
            border-radius: 50%;
            &:hover {
                background-color: white;
            }
        `};
`;

export const Svg = styled.svg`
    color: #bababa;
    fill: currentcolor;
    &:hover {
        color: white;
    }
    ${(props) =>
        props.playPause &&
        css`
            color: #121212;
            &:hover {
                color: #121212;
            }
        `};
    ${(props) => {
        switch (props.colorState) {
            case "verde":
                return css`
                    color: #1ed760;
                `;
                break;
            case "gris":
                return css`
                    color: #bababa;
                `;
                break;
            default:
                break;
        }
    }};
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

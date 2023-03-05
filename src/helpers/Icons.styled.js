import styled from 'styled-components';

export const Svg = styled.svg`
    fill: currentcolor;
    max-width: 131px;
    color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
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
    opacity: 0.7;
`;

export const DivFavs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #450af5, #c4efd9);
    border-radius: 2px;
    opacity: 0.7;
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
    opacity: 0.7;
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

export const DivPlayPauseSong = styled.div`
    --background-base: #1ed760;
    --text-base: #000;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    background-color: #1ed760;
    color: var(--text-base, #000000);
    display: flex;
    border-radius: 500px;
    font-size: inherit;
    min-block-size: 48px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    inline-size: 48px;
    block-size: 48px;
    box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
    &:hover {
        transform: scale(1.07);
    }
`;

export const ActualContainer = styled.div`
    fill: #1ed760;
    margin-right: 10px;
`;

export const DeviceContainer = styled.div`
    fill: white;
    margin-right: 10px;
`;

export const ActualSoundContainer = styled.div`
    fill: #1ed760;
    margin-left: 6px;
`;
export const LinkContainer = styled.div`
    fill: white;
    margin-right: 10px;
`;

export const NavigateButton = styled.button`
    width: 32px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 50%;
    color: #fff;
    fill: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

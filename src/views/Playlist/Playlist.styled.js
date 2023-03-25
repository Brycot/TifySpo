import styled from 'styled-components';

export const SectionPlaylist = styled.section`
    width: 100%;
    padding: 24px 32px 0 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & h5 {
        text-align: start;
        color: #a7a7a7;
    }
`;

export const InfoPlaylist = styled.div`
    height: 30vh;
    max-height: 500px;
    min-height: 340px;
    color: #fff;
    display: flex;
    max-width: none;
    overflow: hidden;
    padding-bottom: 24px;
    position: relative;
`;
export const PlaylistImage = styled.img`
    height: 232px;
    min-width: 232px;
    width: 232px;
    @media (max-width: 1200px) {
        height: 192px;
        min-width: 192px;
        width: 192px;
    }
`;
export const Title = styled.div`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    display: flex;
    height: 37px;
    color: #ffff;
    & h1 {
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const Footer = styled.section`
    width: 100%;
    height: 100px;
`;

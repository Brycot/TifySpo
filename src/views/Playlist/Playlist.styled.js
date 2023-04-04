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
export const PlayListName = styled.div`
    width: 100%;
    height: 70%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 16px;
    & .type {
        font-size: 0.875rem;
    }
    & .name {
        margin: 0.08em 0px 0.12em;
        font-size: 4rem;
        line-height: 90px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & .info {
        display: flex;
    }
    & .info p:nth-child(2)::before,
    & .info p:nth-child(3)::before {
        content: '•';
        margin: 0px 4px;
    }
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
export const HeaderSongs = styled.div`
    height: 36px;
    display: grid;
    grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(
            120px,
            1fr
        );
    justify-items: start;
    justify-items: start;
    grid-gap: 16px;
    padding: 0 16px;
    color: #b3b3b3;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    & span {
        font-size: 0.875rem;
    }
    & span:last-child {
        justify-self: end;
        margin-right: 36px;
    }
`;
export const Footer = styled.section`
    width: 100%;
    height: 100px;
`;

import styled from 'styled-components';

export const SectionSearch = styled.section`
    width: 100%;
    padding: 24px 32px 0 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
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

export const AlbumContainer = styled.div`
    --column-width: 213px;
    --column-count: 5;
    --grid-gap: 16px;
    grid-auto-rows: 0;
    grid-template-rows: 1fr;
    overflow: hidden;
    grid-gap: var(--grid-gap);
    display: grid;
    grid-template-columns: repeat(var(--column-count), minmax(0, 209px));
    @media (max-width: 1310px) {
        --column-count: 4;
    }
    @media (min-width: 1500px) {
        --column-count: 6;
    }
    @media (min-width: 1700px) {
        --column-count: 7;
    }
`;

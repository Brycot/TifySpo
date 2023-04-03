import styled from 'styled-components';

export const LibrarySection = styled.section`
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

export const GridContainer = styled.section`
    --column-width: 208px;
    --column-count: 5;
    --grid-gap: 24px;
    --min-container-width: 440px;
    grid-auto-rows: 1fr;
    grid-gap: var(--grid-gap);
    display: grid;
    grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
    min-width: var(--min-container-width);
    @media (min-width: 1500px) {
        --column-count: 6;
    }
    @media (min-width: 1700px) {
        --column-count: 7;
    }
`;

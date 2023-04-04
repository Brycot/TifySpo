import styled from 'styled-components';

export const Section = styled.section`
    /* -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
    min-height: 200px;
    position: relative; */
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    min-height: 200px;
    position: relative;
`;

export const Title = styled.div`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    display: flex;
    margin-bottom: 16px;
    height: 37px;
    color: #ffff;
    & h1 {
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const Gridrecomendatios = styled.div`
    --min-column-width: 270px;
    --item-height: 80px;
    --column-gap: 24px;
    --row-gap: 16px;
    grid-gap: var(--row-gap) var(--column-gap);
    display: grid;
    grid-template: auto/repeat(
        auto-fill,
        minmax(max(var(--min-column-width), 25%), 1fr)
    );
`;

export const SectionHome = styled.section`
    width: 100%;
    padding: 24px 32px 0 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const GridItems = styled.div`
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
        --column-width: 250px;
    }
    @media (min-width: 1800px) {
        --column-count: 8;
        --column-width: 250px;
    }
`;

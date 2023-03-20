import styled from 'styled-components';

export const SectionQueue = styled.section`
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

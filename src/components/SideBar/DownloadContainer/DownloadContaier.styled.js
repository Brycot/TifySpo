import styled from "styled-components";

export const Container = styled.div`
    padding-left: 24px;
    width: 100%;
    height: 40px;
    transition: all 0.5s ease;
    &:hover a svg,
    &:hover a span {
        transition: all 0.3s ease;
        color: white;
    }
    & a {
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 16px;

        color: #b3b3b3;
    }
    & a span {
        font-size: 0.875rem;
        font-weight: 700;
    }
`;

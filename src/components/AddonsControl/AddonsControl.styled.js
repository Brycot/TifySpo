import styled from "styled-components";

export const AddonsControlSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 180px;
    width: 30%;
    & div {
        display: flex;
        align-items: center;
    }
    & input {
        width: 96px;
        height: 4px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Svg = styled.svg`
    color: #bababa;
    fill: currentcolor;
    &:hover {
        color: white;
    }
`;

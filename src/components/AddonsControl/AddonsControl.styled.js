import styled from 'styled-components';

export const AddonsControlSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 180px;
    width: 30%;
    & .volumeSection {
        display: flex;
        align-items: center;
        width: 125px;
    }
    & input {
        width: 96px;
        height: 4px;
    }
    & .activo {
        border: 0;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    & .activo::after {
        background-color: #1db954;
        border-radius: 50%;
        bottom: 0;
        content: '';
        display: block;
        height: 4px;
        inline-size: 4px !important;
        left: 50%;
        position: absolute;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 4px;
    }
    & .activo svg {
        color: #1db954;
    }
    & .inactivo {
        background: transparent;
        border: 0;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
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

import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
    type: 'range',
}))`
    appearance: none;
    background-color: #606060;
    outline: none;
    border-radius: 15px;
    overflow: hidden;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: white;
        box-shadow: -407px 0 0 400px #ffffff;
    }
    &:hover::-webkit-slider-thumb {
        display: block;
        box-shadow: -407px 0 0 400px #1dbb55;
    }
`;

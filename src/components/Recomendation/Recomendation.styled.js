import styled from "styled-components";

export const RecomendationContainer = styled.div`
    display: flex;
    height: 80px;
    background-color: hsla(0, 0%, 100%, 0.1);
    box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.16),
        0 1px 4px -1px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transition: all 0.3s ease;
    & img {
        width: 80px;
        height: 80px;
        box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
    }
    border-radius: 4px;
    overflow: hidden;
    & button {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font-size: 1rem;
        font-weight: 700;
        background-color: transparent;
        border: 0px;
        border-radius: 500px;
        display: inline-block;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        touch-action: manipulation;
        user-select: none;
        vertical-align: middle;
        transform: translate3d(0px, 0px, 0px);
        padding: 0px;
        min-inline-size: 0px;
        cursor: default;
        opacity: 0;
        transition: all 0.3s ease;
    }
    &:hover button {
        opacity: 1;
        pointer-events: auto;
        position: relative;
    }
    & .name {
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-flex: 1;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        align-items: center;
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        justify-content: space-between;
        padding: 0 16px;
    }
    &:hover {
        background: hsla(0, 0%, 100%, 0.2);
    }
`;

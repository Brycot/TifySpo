import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    z-index: 999;
    grid-area: top-bar;
    width: 100%;
    height: 64px;
    min-width: 0;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 0 32px;
    & .Historybuttons__Container {
        display: flex;
        gap: 16px;
    }
    & .Input_Container {
        flex-grow: 1;
    }
    & .Input_Container_Links {
        flex-grow: 1;
        display: flex;
        justify-content: flex-start;
    }
    & .active {
        font-weight: 600;
        font-size: 0.9rem;
        border-radius: 4px;
        margin: 0 8px 0 0;
        padding: 8px 16px;
        color: #fff;
        background-color: #333;
        text-decoration: none;
        display: inline-block;
        position: relative;
        transition: all 0.5s ease;
    }
    & .inactive {
        font-weight: 600;
        font-size: 0.9rem;
        border-radius: 4px;
        margin: 0 8px 0 0;
        padding: 8px 16px;
        color: #fff;
        text-decoration: none;
        display: inline-block;
        position: relative;
        transition: all 0.2s ease;
    }
    /* & .inactive:hover {
        background-color: #333;
    } */
    & .Input_Container form {
        position: relative;
        display: flex;
        align-items: center;
        width: 364px;
    }
    & .Input_Container svg {
        position: absolute;
        left: 10px;
    }
    & input {
        font-size: 0.875rem;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        margin-block: 0px;
        font-weight: 400;
        color: inherit;
        border: 0;
        border-radius: 500px;
        color: #000;
        height: 40px;
        padding: 6px 48px;
        text-overflow: ellipsis;
        width: 100%;
    }
    & img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }
    & .btnUser {
        touch-action: manipulation;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        border: 0;
        border-radius: 23px;
        color: #fff;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 8px;
        height: 32px;
        justify-content: center;
        padding: 2px;
        position: relative;
    }
    & span {
        display: block;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 28px;
        max-width: 110px;
        overflow: hidden;
        pointer-events: none;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    & .btnUser svg {
        fill: #fff;
        margin-right: 6px;
        cursor: pointer;
    }

    & .btnUser:hover {
        background-color: #282828;
    }
`;

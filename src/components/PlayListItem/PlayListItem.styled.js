import styled from 'styled-components';

export const SongContainer = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 9px;
    & img {
        width: 40px;
        height: 40px;
    }
    & .songImage_Container {
        position: relative;
        display: flex;
    }
    & .songImage_Container p {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        width: 20px;
        height: 40px;
        cursor: pointer;
        margin-left: 8px;
    }
    & .songImage_Container button {
        border: 0;
        background-color: #2a2a2a;
        width: 20px;
        height: 40px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        margin-left: 8px;
    }
    &:hover .songImage_Container p {
        opacity: 0;
    }
    &:hover .songImage_Container button {
        opacity: 1;
    }
    &:hover {
        background-color: #2a2a2a;
        border-radius: 4px;
    }
    & .songImage_Container svg {
        fill: white;
        width: 16px;
        height: 16px;
    }
    & .SongText {
        width: 100%;
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    & .songDuration {
        font-size: 0.875rem;
    }
`;

export const Artist = styled.a`
    font-size: 0.875rem;
    color: #b3b3b3;
    text-decoration: none;
    margin-right: 4px;
    &:hover {
        color: #eeee;
        text-decoration: underline;
    }
`;

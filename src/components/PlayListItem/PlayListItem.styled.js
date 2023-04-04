import styled from 'styled-components';

export const SongContainer = styled.div`
    width: 100%;
    height: 56px;
    display: grid;
    grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(
            120px,
            1fr
        );
    justify-items: start;
    align-items: center;
    grid-gap: 16px;
    padding: 0 16px;
    & img {
        width: 40px;
        height: 40px;
    }
    & .songImage_Container {
        position: relative;
        display: flex;
        width: 16px;
    }
    & .songImage_Container p {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        width: 16px;
        height: 40px;
        cursor: pointer;
    }
    & .songImage_Container button {
        border: 0;
        background-color: #2a2a2a;
        width: 16px;
        height: 40px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
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
        align-items: center;
        flex: 1;
    }
    & .SongText img {
        margin-right: 16px;
    }
    & .SongText div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    & .SongText div span {
        max-height: 25px;
        overflow: hidden;
        text-align: left;
    }
    & .song_Album,
    & .song_date {
        font-size: 0.875rem;
        color: #b3b3b3;
    }
    & .song_Album a {
        display: block;
        height: 20px;
        white-space: unset;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & .songDuration {
        color: #b3b3b3;

        font-size: 0.875rem;
        justify-self: end;
        margin-right: 36px;
    }
`;

export const TitleSong = styled.p`
    cursor: pointer;
    font-size: 0.875rem;
    text-align: start;
    line-height: 14px;
    display: block;
    height: 16px;
    white-space: unset;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    &:hover {
        color: #eeee;
        text-decoration: underline;
    }
`;

export const Artist = styled.a`
    font-size: 0.875rem;
    color: #b3b3b3;
    text-decoration: none;
    margin-right: 4px;
    text-align: left;
    &:hover {
        color: #eeee;
        text-decoration: underline;
    }
`;

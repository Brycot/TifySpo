import styled from "styled-components";

export const CardContainer = styled.div`
    --column-width: 219px;
    --column-count: 5;
    --grid-gap: 24px;
    --card-container-border-radius: clamp(
        4px,
        (var(--column-width, 0px) - 32px) * 0.025,
        8px
    );
    -webkit-box-flex: 1;
    background-color: #181818;
    border-radius: calc(var(--card-container-border-radius) + 2px);
    -ms-flex: 1;
    flex: 1;
    isolation: isolate;
    padding: 16px;
    position: relative;
    transition: all 0.3s ease;
    width: 100%;
    min-width: 29px;
    &:hover {
        background-color: #282828;
    }

    & .Card {
        height: 100%;
    }

    & .Card__ImgContainer {
        margin-bottom: 16px;
        --card-image-border-radius: clamp(
            4px,
            (var(--column-width, 0px) - 32px) * 0.025,
            8px
        );
        border-radius: var(--card-image-border-radius);
        -webkit-box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
        box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
        padding-bottom: 100%;
        position: relative;
        width: 100%;
    }

    & .Card__ImgContainer img {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        --card-image-border-radius: clamp(
            4px,
            (var(--column-width, 0px) - 32px) * 0.025,
            8px
        );
        border-radius: var(--card-image-border-radius);
        display: block;
    }
    & button {
        font-size: 1rem;
        font-weight: 700;
        background-color: transparent;
        border: 0px;
        border-radius: 500px;
        position: absolute;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        touch-action: manipulation;
        user-select: none;
        vertical-align: middle;
        bottom: 10px;
        right: 10px;
        padding: 0px;
        min-inline-size: 0px;
        cursor: default;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 222;
    }
    &:hover button {
        opacity: 1;
        pointer-events: auto;
        position: absolute;
    }
    & .Card__Title {
        min-height: 62px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    & .Card__Title__Song {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        margin-block: 0px;
        font-size: 1rem;
        font-weight: 700;
        padding-block-end: 4px;
        color: inherit;
        position: relative;
        z-index: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: none;
    }
    & .Card__Title__ArtistContainer {
        display: flex;
        gap: 5px;
    }
    & .Card__Title__Artist {
        font-size: 0.875rem;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        margin-block: 0px;
        font-weight: 400;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        margin-top: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        white-space: normal;
        color: #b3b3b3;
        position: relative;
        z-index: 1;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

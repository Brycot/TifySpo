import styled from "styled-components";

export const Aside = styled.aside`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    background-color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    grid-area: nav-bar;
    min-height: calc(100vh - 90px);
    position: relative;
    min-width: calc(241px + 9px);
    z-index: 4;
`;

export const WrapperLogo = styled.div`
    margin-top: 24px;
    & a {
        display: flex;
        flex-direction: column;
        padding: 0 24px;
        margin-bottom: 26px;
        text-decoration: none;
        color: white;
    }
`;

export const OptionsUsers = styled.div`
    margin-top: 24px;
`;

export const PlaylistContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    max-height: 443px;
    padding-left: 24px;
    overflow-y: auto;
    & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        list-style: none;
    }
`;
export const Separator = styled.div`
    position: relative;
    & hr {
        --left-sidebar-padding-left: 24px;
        --left-sidebar-padding-right: 24px;
        background-color: #282828;
        border: none;
        height: 1px;
        margin: 8px var(--left-sidebar-padding-right) 0
            var(--left-sidebar-padding-left);
        min-height: 1px;
    }
    & div {
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0.7)),
            to(transparent)
        );
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), transparent);
        bottom: -16px;
        height: 16px;
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        z-index: 1;
    }
`;

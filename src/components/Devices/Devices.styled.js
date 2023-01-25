import styled from "styled-components";

export const DevicesContainer = styled.section`
    position: absolute;
    bottom: 74px;
    right: 33px;
    width: 320px;
    min-height: 267px;
    background-color: #282828;
    z-index: 9999;
    /* transform: translate(-144px, -44.0156px); */
    padding: 32px 16px 1px 16px;
    border-radius: 8px;
    & .Devices {
        display: flex;
        flex-direction: column;
        padding: 0 16px;
    }
    & button {
        border: none;
        background-color: transparent;
        padding: 16px;
        fill: #f9f9f9;
    }
`;

export const DeviceContainer = styled.h3`
    display: flex;
    flex-direction: column;
    &:hover {
        background-color: #3d3d3d;
    }
`;
export const DeviceTitle = styled.h3`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    font-size: 1.125rem;
    font-weight: 700;
    color: white;
    height: 28.8px;
`;

export const DeviceName = styled.p`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    font-size: 1rem;
    font-weight: 400;
    color: #1ed760;
    display: flex;
    gap: 6px;
    height: 25.59px;
`;

export const ActualDeviceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
    margin-right: 7px;
    & .textContainer {
        width: 174px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

import { useState, useEffect } from "react";
import axios from "axios";
import useRequest from "../../hooks/useRequest";
import { useSpotify } from "../../hooks/useSpotify";

import {
    DevicesContainer,
    DeviceTitle,
    DeviceContainer,
    DeviceName,
    ActualDeviceContainer,
} from "./Devices.styled";

import { ActualDeviceIcon, ActualDeviceSoundIcon, OptionDevice } from "../../helpers/Icons";

function Devices({ children }) {
    const [devicesAllow, setDevicesAllow] = useState([]);
    const spotifyToken = localStorage.getItem("access_token");
    const { getWithToken, updateWithToken } = useRequest();
    const { transferPlayBack } = useSpotify();

    const actualDevice = devicesAllow.find(
        (device) => device.is_active === true
    );
    const devicesAvailable = devicesAllow.filter(
        (device) => device.is_active === false
    );

    function getDevices() {
        const cancelSource = axios.CancelToken.source();

        const request = getWithToken(
            "https://api.spotify.com/v1/me/player/devices",
            spotifyToken,
            cancelSource
        );
        const requestFunc = async (_) => {
            try {
                const response = await request();
                setDevicesAllow(response.data.devices);
                // if (response.status !== 204) {
                //     console.log("Opps, something went wrong!");
                //     return;
                // }
            } catch (error) {
                console.error(error);
            }
        };
        requestFunc();
    }

    useEffect(() => {
        getDevices();
    }, []);
    return (
        <DevicesContainer
            onClick={() => {
                console.log(devicesAllow);
            }}
        >
            <div className="Devices">
                {actualDevice && (
                    <ActualDeviceContainer>
                        <ActualDeviceIcon />
                        <div className="textContainer">
                            <DeviceTitle>Dispositivo actual</DeviceTitle>
                            <DeviceName><ActualDeviceSoundIcon />{actualDevice.name}</DeviceName>
                        </div>
                        <button><OptionDevice /></button>
                    </ActualDeviceContainer>
                )}
                {devicesAvailable &&
                    devicesAvailable.map((device) => (
                        <div key={device.id}>
                            <DeviceTitle>
                                Seleccionar otro dispositivo
                            </DeviceTitle>
                            <DeviceContainer>
                                <button
                                    onClick={() => {
                                        transferPlayBack(device.id);
                                        getDevices();
                                    }}
                                >
                                    <DeviceName>{device.name}</DeviceName>
                                </button>
                            </DeviceContainer>
                        </div>
                    ))}
            </div>
        </DevicesContainer>
    );
}

export default Devices;

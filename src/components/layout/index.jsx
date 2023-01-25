import { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import PlayingBar from "../PlayingBar";
import Topbar from "../TopBar";

import { MainContainer, Div } from "./Layout.styled";
import useRequest from "../../hooks/useRequest";
import {
    PlaylistContext,
    CurrentTrackContext,
} from "../../utils/context";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

function Layout() {
    const [playlists, setPlaylists] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const accessToken = localStorage.getItem("access_token");
    const { getWithToken } = useRequest();
    const { handleAuthentication } = useAuth();

    useEffect(() => {
        handleAuthentication();
        window.location.hash = "";
        const cancelSource = axios.CancelToken.source();
        async function makeRequest() {
            const reqUserInfo = getWithToken(
                "https://api.spotify.com/v1/me",
                accessToken,
                cancelSource
            );
            const reqUserPlaylists = getWithToken(
                "https://api.spotify.com/v1/me/playlists",
                accessToken,
                cancelSource
            );
            try {
                const [_userInfo, _userPlaylists] = await Promise.all([
                    reqUserInfo(),
                    reqUserPlaylists(),
                ]);
                // handle axios token cancellation
                if (
                    typeof _userInfo !== "undefined" &&
                    typeof _userPlaylists !== "undefined"
                ) {
                    setUserInfo(_userInfo.data);
                    setPlaylists(_userPlaylists.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        makeRequest();
    }, []);

    return (
        <CurrentTrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
            <PlaylistContext.Provider value={playlists}>
                <Div>
                    <Topbar />
                    <SideBar />
                    <MainContainer>
                        <Outlet />
                    </MainContainer>
                    <PlayingBar />
                </Div>
            </PlaylistContext.Provider>
        </CurrentTrackContext.Provider>
    );
}

export default Layout;

import React from "react";

import {
    Logo,
    HomeIconActive,
    SearchIcon,
    LibraryIcon,
    CreatePlaylistIcon,
    YourFavsIcon,
    YourEpisodesIcon,
} from "../../helpers/Icons";

import PrimaryLink from "../PrimayLink/PrimaryLink";
import DownloadContainer from "./DownloadContainer";
import Playlist from "./Playlist";

import {
    Aside,
    WrapperLogo,
    OptionsUsers,
    Separator,
    PlaylistContainer,
} from "./SideBar.styled";

function SideBar() {
    return (
        <Aside>
            <WrapperLogo>
                <a href="">
                    <Logo />
                </a>
            </WrapperLogo>
            <ul>
                <PrimaryLink icon={<HomeIconActive />} text="Inicio" />
                <PrimaryLink icon={<SearchIcon />} text="Buscar" />
                <PrimaryLink icon={<LibraryIcon />} text="Tu Biblioteca" />
            </ul>
            <OptionsUsers>
                <ul>
                    <PrimaryLink
                        icon={<CreatePlaylistIcon />}
                        text="Crear playlist"
                    />
                    <PrimaryLink icon={<YourFavsIcon />} text="Tus me gusta" />
                    <PrimaryLink
                        icon={<YourEpisodesIcon />}
                        text="Tus episodios"
                    />
                </ul>
            </OptionsUsers>
            <Separator>
                <hr />
                <div></div>
            </Separator>
            <PlaylistContainer>
                <ul>
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                </ul>
            </PlaylistContainer>
            <DownloadContainer />
        </Aside>
    );
}

export default SideBar;

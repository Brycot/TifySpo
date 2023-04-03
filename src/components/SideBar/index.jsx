import React, { useContext } from 'react';

import {
    Logo,
    HomeIconActive,
    SearchIcon,
    LibraryIcon,
    CreatePlaylistIcon,
    YourFavsIcon,
    YourEpisodesIcon,
} from '../../helpers/Icons';

import PrimaryLink from '../PrimayLink/PrimaryLink';
import DownloadContainer from './DownloadContainer';
import Playlist from './Playlist';
import { PlaylistContext } from '../../utils/context';

import {
    Aside,
    WrapperLogo,
    OptionsUsers,
    Separator,
    PlaylistContainer,
} from './SideBar.styled';

function SideBar() {
    const { items } = useContext(PlaylistContext);
    return (
        <Aside>
            <WrapperLogo>
                <a href="">
                    <Logo />
                </a>
            </WrapperLogo>
            <ul>
                <PrimaryLink
                    icon={<HomeIconActive />}
                    link={'/home'}
                    text="Inicio"
                />
                <PrimaryLink
                    icon={<SearchIcon />}
                    link={'/search'}
                    text="Buscar"
                />
                <PrimaryLink
                    icon={<LibraryIcon />}
                    link={'/collection/playlists'}
                    text="Tu Biblioteca"
                />
            </ul>
            <OptionsUsers>
                <ul>
                    <PrimaryLink
                        link={'/collection/epis'}
                        icon={<CreatePlaylistIcon />}
                        text="Crear playlist"
                    />

                    <PrimaryLink
                        icon={<YourFavsIcon />}
                        link={'/collection/tracks'}
                        text="Tus me gusta"
                    />
                    <PrimaryLink
                        link={'/collection/episodes'}
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
                    {items &&
                        items.map(({ name, id }, index) => (
                            <Playlist
                                draggable="false"
                                name={name}
                                id={id}
                                key={id}
                            />
                        ))}
                </ul>
            </PlaylistContainer>
            <DownloadContainer />
        </Aside>
    );
}

export default SideBar;

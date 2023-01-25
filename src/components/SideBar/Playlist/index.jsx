import React from "react";

import { Li } from "./Playlist.styled";
function Playlist({ name, id }) {
    return (
        <Li>
            <a href="">
                <span>{name}</span>
            </a>
        </Li>
    );
}

export default Playlist;

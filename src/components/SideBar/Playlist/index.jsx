import React from 'react';
import { Link } from 'react-router-dom';

import { Li } from './Playlist.styled';
function Playlist({ name, id }) {
    return (
        <Li>
            <Link to={`playlist/${id}`}>
                <span>{name}</span>
            </Link>
        </Li>
    );
}

export default Playlist;

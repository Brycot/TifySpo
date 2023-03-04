import React from 'react';
import { NavLink } from 'react-router-dom';
import { Primary } from './PrimaryLink.styled';

function PrimaryLink({ icon, text,link }) {
    return (
        <Primary>
            <NavLink to={link} className={({ isActive }) => isActive ? 'active' : ''}>
                {icon}
                <span>{text}</span>
            </NavLink>
        </Primary>
    );
}

export default PrimaryLink;

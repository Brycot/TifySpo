import React from "react";
import { Primary } from "./PrimaryLink.styled";

function PrimaryLink({ icon, text }) {
    return (
        <Primary>
            <a href="">
                {icon}
                <span>{text}</span>
            </a>
        </Primary>
    );
}

export default PrimaryLink;

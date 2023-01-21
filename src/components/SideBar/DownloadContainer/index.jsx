import React from "react";

import { DownloadAppIcon } from "../../../helpers/Icons";

import { Container } from "./DownloadContaier.styled";


function DownloadContainer() {
    return (
        <Container>
            <a href="">
                <DownloadAppIcon />
                <span>Instalar Aplicación</span>
            </a>
        </Container>
    );
}

export default DownloadContainer;

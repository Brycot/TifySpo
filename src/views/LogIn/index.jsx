import React from "react";

import useAuth from "../../hooks/useAuth";

import { Logo } from "../../helpers/Icons";

import { Background, LoginContainer, ButtonLogin } from "./Login.styled";
function Login() {

    const { login, handleAuthentication } = useAuth();
    const handleAuth = () => {
        login();
        handleAuthentication();
    }
    return (
        <>
            
            <LoginContainer>
                <div>
                    <Logo />
                    <ButtonLogin onClick={handleAuth}>INICIAR SESIÓN</ButtonLogin>
                </div>
            </LoginContainer>
            <Background></Background>
        </>
    );
}

export default Login;

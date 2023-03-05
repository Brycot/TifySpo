import React, { useContext } from 'react';

import useAuth from '../../hooks/useAuth';

import { Logo } from '../../helpers/Icons';

import { Background, LoginContainer, ButtonLogin } from './Login.styled';

function Login() {
    const { login } = useAuth();

    const handleLogin = () => {
        login();

    };

    return (
        <>
            <LoginContainer>
                <div className="Container">
                    <Logo />
                    <ButtonLogin onClick={handleLogin}>
                        INICIAR SESIÓN
                    </ButtonLogin>
                    <div>
                        <p>Para poder usar la aplicación necesitaras</p>
                        <p>
                            una subscripcion de <span>Spotify Premium</span>
                        </p>
                    </div>
                </div>
            </LoginContainer>
            <Background></Background>
        </>
    );
}

export default Login;

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import useRequest from '../hooks/useRequest';

export const PlaylistContext = createContext([]);

export const CurrentTrackContext = createContext({
    currentTrack: {},
    setCurrentTrack: () => {},
});

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const accessToken = localStorage.getItem('access_token');

    const { getWithToken } = useRequest();
    const cancelSource = axios.CancelToken.source();

    const getAuth = async () => {
        const reqPrueba = getWithToken(
            'https://api.spotify.com/v1/me',
            accessToken,
            cancelSource
        );
        const { data } = await reqPrueba();
        if (data) {
            setAuth(true);
        }
    };

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        getAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

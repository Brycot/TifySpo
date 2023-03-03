import { scopesArray } from '../utils/scopesArray';
import { generateRandomString } from '../utils/generateRandomString';
import { useHashParams } from './useHashParams';

const useAuth = () => {
    const login = () => {
        const state = generateRandomString(16);
        localStorage.setItem('auth_state', state);
        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=code';
        url +=
            '&client_id=' +
            encodeURIComponent(import.meta.env.VITE_SPOTIFY_CLIENT_ID);
        url += '&scope=' + encodeURIComponent(scopesArray.join(' '));
        url +=
            '&redirect_uri=' +
            encodeURIComponent(import.meta.env.VITE_SPOTIFY_REDIRECT_URI);
        url += '&state=' + encodeURIComponent(state);
        window.location.href = url;
    };

    const getAuthToken = async (token) => {
        const data = `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
            import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
        }`;
        const base64 = window.btoa(data);

        const authOptions = {
            method: 'POST',
            headers: {
                Authorization: `Basic ${base64}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `code=${token}&redirect_uri=http://localhost:5173/callback&grant_type=authorization_code`,
        };
        console.log('llegue hasta ca');
        try {
            const response = await fetch(
                'https://accounts.spotify.com/api/token',
                authOptions
            );
            const body = await response.json();
            if (response.status === 200) {
                const access_token = body.access_token;
                localStorage.setItem('access_token', access_token);
                window.location.href = '/home';
            }
        } catch (error) {
            console.log(error);
        }
    };

    const setSession = (authResult) => {
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('expires_at', expiresAt);
    };

    const handleUserInfo = async (accessToken) => {
        const ID = '4ByaTrfoYbXrmlbsTG8MTD';
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };

        const response = await fetch(
            `https://api.spotify.com/v1/recommendations`,
            {
                headers,
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    };

    const handleAuthentication = () => {
        return new Promise((resolve, reject) => {
            const { code, state } = useHashParams();
            console.log('local', localStorage.getItem('auth_state'));
            console.log('spotify', state);
            const auth_state = localStorage.getItem('auth_state');

            if (state === null || state != auth_state) {
                reject(new Error("The state doesn't match allaalal"));
            }

            localStorage.removeItem('auth_state');

            if (code) {
                // setSession({ accessToken: code });
                return resolve(code);
            } else {
                return reject(new Error('The token is invalid'));
            }
        });
    };
    return { login, handleAuthentication, handleUserInfo, getAuthToken };
};

export default useAuth;

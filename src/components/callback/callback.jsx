import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

export const Callback = () => {
    const { getAuthToken, handleAuthentication } = useAuth();

    const onLogin = async () => {
        const code = await handleAuthentication();
        await getAuthToken(code);
    };
    useEffect(() => {
        onLogin();
    }, []);

    return (
        <>
            <div>cargando...</div>
        </>
    );
};

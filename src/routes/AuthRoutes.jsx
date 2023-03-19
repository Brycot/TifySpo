import { Navigate, Route, Routes } from 'react-router-dom';
import { Callback } from '../components/callback/callback';
import Login from '../views/LogIn';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from '../utils/context';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

const RoutesTifyspo = () => {
    const { auth } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                {auth ? (
                    <Route path="/*" element={<AppRoutes />} />
                ) : (
                    <Route path="/*" element={<AuthRoutes />} />
                )}

                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesTifyspo;

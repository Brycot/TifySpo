import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/layout/';
import { AuthContext } from '../utils/context';

import Login from '../views/LogIn';
import Home from '../views/Home';
import Search from '../views/Search/Search';
function RoutesTifyspo() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route
                        exact
                        path="/callback"
                        element={<h1>Registrado</h1>}
                    />
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route exact path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesTifyspo;

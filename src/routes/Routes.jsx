import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/layout/';

import Login from '../views/LogIn';
import Home from '../views/Home';
import Search from '../views/Search/Search';
import { Callback } from '../components/callback/callback';
import { AuthContext } from '../utils/context';
function RoutesTifyspo() {
    const { auth } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                {auth ? (
                    <Route path="/" element={<Layout />}>
                        <Route exact path="/home" element={<Home />} />
                        <Route
                            path="/search?/:querySearch"
                            element={<Search />}
                        />
                        <Route exact path="/library" element={<Search />} />
                        <Route exact path="/callback" element={<Callback />} />
                        <Route
                            exact
                            path="*"
                            element={<Navigate to="/home" />}
                        />
                    </Route>
                ) : (
                    <>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/callback" element={<Callback />} />
                        <Route
                            exact
                            path="*"
                            element={<Navigate to="/login" />}
                        />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesTifyspo;

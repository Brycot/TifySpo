import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/layout/';
import { AuthContext } from '../utils/context';

import Login from '../views/LogIn';
import Home from '../views/Home';
import Search from '../views/Search/Search';
import { Callback } from '../components/callback/callback';
function RoutesTifyspo() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/callback" element={<Callback />} />
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route exact path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

// http://localhost:5173/callback?code=AQAJug67m8i--WkMPCnGlaGwx7f4bwg5iDFVrLGHEWV4LdT7E38fuPC3YI3QylY1PId4CeZgpO4RWkLr309pGF3wnazDbgKfskSfEkulHNPVf949yUPoJ-yAgPXv0dbf2bkDdJftPTypt6pSPdPG9SCnLRZDqchyRWV2MztuNeMvIsOtW9bUtBu8vC1HXmYN8f-kzKgfeYnvN2ydH8UZgurHF7OoDcrkzhToL7lGJ3KXEIJSoszkqxnKt6Zc7miihs4aUpDaUFgKsnu01Q7AEBzBTablvhiKXpA5HcRdtknmeYDsGOBgw_nmZFHK667lKJ9M36N10LxRfIJ4Tn_EyjHxg5QSkzRr7-G8NIDq8rVAo35pAidYiCuv5lxsWjE6aczleHqWJcIXGij6l0JbryT4ej5lbNtvJC4GS4S5SCi6_5NqMmzeSgSYZM0QH6e2EP1c0uZpwJ5kTjFTkNS0zNZdS_ERRe3DF93tiwgnF8kob_-js9cr_JSChdcA_dSr-_VwpgmgcB2xFtCIAQkuWYTnxfynLnTHpIvM-5f_KyX7R6Endq1pbQi-XWduN3SsAfBz1LRmGykEGjgm3EIX3BxW0Up8EJFcLxQSSL-AT5e2OkWGW_cORjN_Mx1z5GgeSu9l4uV0EzaZj-lKxxgSaAayRUoaBg7tjf_uGDNvOmPLLhBbSLOU2s_Sbkka14S90H9r3BRbQx5shR0fBC-xCpAfMmY&state=OARKlNFBBmheFdPw
export default RoutesTifyspo;

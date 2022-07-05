import React, { useState, Suspense} from 'react'
import { Routes, Route, Navigate} from "react-router-dom";

import Login from './Login/Login';

import RiderctLanding from "./RedirectLanding/RedirectLanding";

import Home from './Home/Home';

import Spinner from '../../common/components/Spinner/Spinner';

import {cryptFunction} from "../../common/Helpers/crypt_decryptFunction"

const Routing = () => {
    const [authToken, setAuthToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const checkAuth = (auth_token,refresh_token) => {
        setAuthToken(auth_token);
        setRefreshToken(refresh_token);
        let token = {
            auth_token: auth_token,
            refresh_token:refresh_token
        }
        localStorage.setItem("tokens", JSON.stringify(token));
        let cryptToken = cryptFunction(token);
        localStorage.setItem("token",JSON.stringify(cryptToken));
    }
    let routes = (authToken === null && refreshToken === null) ?
        (<Routes>
            <Route path="/redirect/:accessToken/:refreshToken" element={<RiderctLanding checkAuth={(auth,refresh)=>checkAuth(auth,refresh)}/>}/>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>)
        :
        (<Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <Suspense fallback={<Spinner/>}>
                    <Home />
                </Suspense>
            } />
            <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>)
    return (
        <>
            {routes}
        </>
    )
}
export default Routing;
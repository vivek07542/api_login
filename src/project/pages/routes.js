import React, { useState,lazy, Suspense} from 'react'
import { Routes, Route, Navigate} from "react-router-dom";

import Login from './Login/Login';
// import ProgramList from './ProgramList/ProgramList';
import RiderctLanding from "./RedirectLanding/RedirectLanding";
// import Population from './Population/Population';
// import Matrics from './Matrics/Matrics';
import Home from './Home/Home';
// import Protocol from './Protocol/Protocol';
import Spinner from '../../common/components/Spinner/Spinner';
// import Ignite from './Ignite/Ignite';
import {cryptFunction} from "../../common/Helpers/crypt_decryptFunction"

// const ProgramList = lazy(() => import("./ProgramList/ProgramList"))

// const Protocol = lazy(()=>import("./Protocol/Protocol"))

// const Metrics = lazy(()=>import("./Metrics/Metrics"))

// const Population = lazy(() => import("./Population/Population"))

// const Ignite = lazy(() => import("./Ignite/Ignite"))

// const CreateProgram = lazy(() => import("./CreateProgram/CreateProgram"));

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
            {/* <Route path="/program" element={
                <Suspense fallback={<Spinner/>}>
                <ProgramList />
                </Suspense>
            } />
            <Route path="/metrics" element={
                 <Suspense fallback={<Spinner/>}>
                 <Metrics />
                </Suspense>
            } />
            <Route path="/population" element={
                <Suspense fallback={<Spinner/>}>
                    <Population />
                </Suspense>
            } />
            <Route path="/protocol" element={
                <Suspense fallback={<Spinner/>}>
                    <Protocol />
                </Suspense>
            } />
            <Route path="/ignite" element={
                <Suspense fallback={<Spinner/>}>
                    <Ignite />
                </Suspense>
            } />
            <Route path="/create_program" element={
                <Suspense fallback={<Spinner/>}>
                    <CreateProgram/>
                </Suspense>
            } /> */}
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
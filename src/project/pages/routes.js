/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Suspense,useEffect} from 'react'
import { Routes, Route, Navigate} from "react-router-dom";

import Login from './Login/Login';
import Orders from './Orders/Orders';
import Products from './Products/Products';
import Reports from './Reports/Reports';

import RiderctLanding from "./RedirectLanding/RedirectLanding";

import Home from './Home/Home';

import Spinner from '../../common/components/Spinner/Spinner';

import {cryptFunction} from "../../common/Helpers/crypt_decryptFunction"
import { decryptFunction } from "../../common/Helpers/crypt_decryptFunction";

import { useSelector,useDispatch} from "react-redux";
import * as action from "../reduers/IgniteRedux/IgniteRedux";
const Routing = () => {
    const [authToken, setAuthToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null); 
    const errors = useSelector((state) => state.Ignite.errors);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(errors){
            dispatch(action.errorHandlerInit(errors));
            setAuthToken(null);
            setRefreshToken(null);
            localStorage.clear();
        }
    },[errors])

    useEffect(() => {
        let decryptToken = JSON.parse(localStorage.getItem("token"));
        if(decryptToken !== null){
            let token = decryptFunction(decryptToken);
            setAuthToken(token.auth_token);
            setRefreshToken(token.refresh_token);
        }
        else{
            setAuthToken(null);
            setRefreshToken(null)
        }
    }, [])
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

    // let decryptToken = JSON.parse(localStorage.getItem("token"));
    // let token = decryptFunction(decryptToken);

    let routes = (authToken === null && refreshToken === null ) ?
        (<Routes>
            <Route path="/redirect/:accessToken/:refreshToken" element={<RiderctLanding checkAuth={(auth,refresh)=>checkAuth(auth,refresh)}/>}/>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>)
        :
        (<Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Suspense fallback={<Spinner/>}><Products/></Suspense>} />
            <Route path="/orders" element={<Suspense fallback={<Spinner/>}><Orders/></Suspense>} />
            <Route path="/reports" element={
                <Suspense fallback={<Spinner/>}><Reports/></Suspense>
            } />
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
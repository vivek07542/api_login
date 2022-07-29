/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const RedirectLanding = (props) => {
    const { accessToken, refreshToken } = useParams();
    useEffect(() => {
       props.checkAuth(accessToken,refreshToken);
    }, [])    
    return (
        <div>Redirect Page</div>
    )
}
RedirectLanding.propTypes = {
    checkAuth: PropTypes.func
}
export default RedirectLanding;
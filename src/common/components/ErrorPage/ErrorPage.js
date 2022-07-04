import React from 'react'
import {NavLink} from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
    return (
        <div className = "row text-center py-5">
            <h1 className = "display-4">404 Error Page</h1>
            <p className="lead">Sorry page Not Found..!!</p>
            <NavLink className ="ErrorLink" to = "/"> Go Back </NavLink>
        </div>
    )
}

export default ErrorPage
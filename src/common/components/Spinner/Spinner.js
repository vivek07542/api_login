/* eslint-disable react/prop-types */
import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Spinner.css";
const Spinner = (props) => {
    return (
        <div className = "Spinner">
             <ClimbingBoxLoader color={'#2caabe'} loading={props.loading} size={20} />
        </div>
    )
}
export default Spinner;
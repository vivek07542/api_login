import React from 'react'
import "./Backdrop.css";
import PropTypes from "prop-types";

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null

)
Backdrop.propTypes = {
    /**
     * ClassName will recieve classes from component which shall need to hav extra special effects can be added with it.
     */
 
    show: PropTypes.bool,
  
    clicked:PropTypes.func
  
  }  


export default Backdrop
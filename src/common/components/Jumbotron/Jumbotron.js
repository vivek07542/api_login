import React from 'react'
import "./Jumbotron.css";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    const { title,children } = {...props};
    return (
        <div className='container Jumbotron-container'>
            <h6 className="jumbotron-heading">{title}</h6>
            <div className='jumbotron-form-container'>
                {children}
            </div>
        </div>
    )
}
Jumbotron.propTypes = {
    /**
     * Title is a Prop Type for Passing the Heading Name to the Jumbotron
     */
    title: PropTypes.string,
    
  
  }
export default Jumbotron

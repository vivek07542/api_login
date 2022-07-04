import React from 'react'
import PropTypes from "prop-types";
import "./FormElement.css";
import { checkCondition } from '../../Helpers/checkCondition';
  /**
 * A Input Form Create Function
 * @param {*Props - Label and Refs} props 
 * @returns 
  */ 
const Input = (props) => {
  const input = <input {...props} />
  const label = props.label && <label className='labelText'>{props.label}</label>
  const inputForm = checkCondition(props.condition,input,label,props)
  return (
    <>
      {inputForm}
    </>
    )
}
Input.propTypes = {
  /**
  * Label For the Input Form 
  */
  label: PropTypes.string,
  /**
  * Switch Conditions for Arranging Input Form
  */
  condition: PropTypes.string,
 
   
}
export default Input


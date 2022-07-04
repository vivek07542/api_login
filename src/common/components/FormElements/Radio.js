import React from 'react'
import PropTypes from "prop-types";
import "./FormElement.css";
import { checkCondition } from '../../Helpers/checkCondition';
/**
 * A Check Box Input Form
 * @param {*Props - Label and Refs} props 
 * @returns 
 */
const Radio = (props) => {
    const input = <input type="radio" {...props}/>
    const label = <label className='labelText custom-control-label'>{props.label}</label>
    const inputForm = checkCondition(props.condition,input,label)
    return (
        <>
            {inputForm}
        </>
    )
}
Radio.propTypes = {
    /**
    * Label For the Input Form 
    */
    label: PropTypes.string,
   /**
   * Switch Conditions for Arranging Input Form
   */
         condition:PropTypes.string
   }
export default Radio

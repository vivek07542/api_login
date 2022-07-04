import React from 'react'
import PropTypes from "prop-types";
import "./FormElement.css";
import { checkCondition } from '../../Helpers/checkCondition';
/**
 * A Check Box Input Form
 * @param {*Props - Label and Refs} props 
 * @returns 
 */
const CheckBox = (props) => {
    const input = <input type="checkbox" {...props} />
    const label = <label className='labelText'>{props.label}</label>
    const inputForm = checkCondition(props.condition,input,label)
    return (
        <>
        {inputForm}
        </>
    )
}
CheckBox.propTypes = {
    /**
     * Label For the Input Form 
     */
    label: PropTypes.string,
        /**
   * Switch Conditions for Arranging Input Form
   */
         condition:PropTypes.string
   }
export default CheckBox

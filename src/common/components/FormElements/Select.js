import React from 'react'
import PropTypes from "prop-types";
import "./FormElement.css";
import { checkCondition } from '../../Helpers/checkCondition';
/**
 * Common Drop Down Create Function
 * @param {*Label,Options and Refs} props 
 * @returns 
 */
const Select = (props) => {
  
    const input = <select {...props} >
        {props.options.map((e, index) => <option key={e.value} value={e.value} disabled={index===0 ? true : false} selected={index===0 ? true : false}>{ e.label}</option>)}
    </select>
    const label = <label className='labelText'>{props.label}</label>
    const inputForm = checkCondition(props.condition,input,label)
    return (
        <>
        {inputForm}
        </>
    )
}
Select.propTypes = {
    value:PropTypes.string,
    /**
    * Label For the Input Form 
    */
    label: PropTypes.string,
    /**
     * Options is an array of object of the which is to be created in DropDown.
     */
    options: PropTypes.arrayOf(PropTypes.object),
     /**
   * Switch Conditions for Arranging Input Form
   */
    condition:PropTypes.string
   }
export default Select

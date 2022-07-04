import React from 'react'
import PropTypes from "prop-types";
import "./FormElement.css";
import { checkCondition } from '../../Helpers/checkCondition';
/**
 * Common Text Area Funciton
 * @param {*Label, Refs} props 
 * @returns 
 */
const TextArea = (props) => {
    const input = <textarea {...props} />
    const label = <label className='labelText'>{props.label}</label>
    const inputForm = checkCondition(props.condition,input,label)
    return ( 
         <>
         {inputForm}
         </>
      
    )
}
TextArea.propTypes = {
    /**
    * Label For the Input Form 
    */
    label: PropTypes.string,
          /**
   * Switch Conditions for Arranging Input Form
   */
           condition:PropTypes.string
   }
export default TextArea

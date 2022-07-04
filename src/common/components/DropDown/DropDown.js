/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import PropTypes from "prop-types";
/**
 * Dropdown Component for making select>>option work in project 
 */
const DropDown = ({inputHandler,options,...props}) => {
    const [input, setInput] = useState("")
    
    const inputHandlers = (e) => {
        inputHandler(e)
        setInput(e);
    }
    
    let eachOption = options.map(opt =>(
        <option key = {opt} value = {opt}>{opt}</option>
    ));
    return (
        <>
            <select className="custom-select mr-sm-2" value={input} onChange={ (e)=>inputHandlers(e.target.value)} {...props} >
              {eachOption}
          </select>  
        </>
    )
}
DropDown.propTypes = {
  /**
   * Input Handler is a click event handler fuction for the main component where we need to register the hadler function in main component
   */
  inputHandler: PropTypes.func,
  /**
   * Option is the Array for which we need to generate the Option component in dropdown Here this will help in dynamic creating of option
   */
    options: PropTypes.array
  }
export default DropDown

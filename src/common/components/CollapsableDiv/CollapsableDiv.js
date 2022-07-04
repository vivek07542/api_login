import React,{useState} from 'react';
import "./CollapsableDiv.css";
import PropTypes from "prop-types";
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"
const CollapsableDiv = (props) => {
    const[open,setOpen] = useState(false)
    const { key,detail,eachIcon } = {...props }
    const onClick = (e) => {
        setOpen(!open)
    }
    return (
        <div className='my-1'>
            <div className='row collapse-container' onClick={(e) => onClick(e)}>
                <div className='col-3'>
                <span className='collapsable-text'>{detail}</span> 
                </div>
                <div className='col-7'>
                    <hr className='hr-class'/>
                </div>
                <div className='col-1'>
                    { open ?<IoIosArrowUp/>:<IoIosArrowDown/>}
                </div>
            </div>
            
            {open &&
                <div className='content-collapsable-container'>
                    {eachIcon}
                </div>}
        </div>

    )
}
CollapsableDiv.propTypes = {
    /**
     * ClassName will recieve classes from component which shall need to hav extra special effects can be added with it.
     */
    detail: PropTypes.string,
    eachIcon:PropTypes.array
  }
export default CollapsableDiv

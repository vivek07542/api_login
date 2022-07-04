import React,{useState} from 'react'
import "./MiddleHomeContainer.css";
import PropTypes from "prop-types";

const MiddleHomeContainer = (props) => {
    return (
        <div className='col-4 task-chain-container'
                onDragOver={props.onDragOver}
                onDrop={props.onDrop}
        >
                {props.tasks.complete}
                {/* {taskArray} */}
            </div>

    )
}
MiddleHomeContainer.propTypes = {
    /**
     * ClassName will recieve classes from component which shall need to hav extra special effects can be added with it.
     */
     onDragOver: PropTypes.func, 
    /**
     * Click event Handler for the button 
     */
    onDrop: PropTypes.func,
    /**
     * Object of Dragged Icons to be displayed on Center 
     */
    tasks: PropTypes.object,
     
  }
export default MiddleHomeContainer

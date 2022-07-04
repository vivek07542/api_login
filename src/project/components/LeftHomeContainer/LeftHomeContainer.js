import React from 'react'
import "./LeftHomeContainer.css";
import PropTypes from "prop-types";
import CollapsableDiv from '../../../common/components/CollapsableDiv/CollapsableDiv';

const LeftHomeContainer = (props) => {
    let detail = props.tasks.wip.map((e, index) => <CollapsableDiv key={index} detail={e.collapseName} eachIcon={e.igniteArray} /> )
    return (
        <div className='col-4 collapse-left-container'
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
        >
        {detail}
        </div>
    )
}
LeftHomeContainer.propTypes = {
    /**
     * onDragOver : Function to register a event onDragOver
     */
     onDragOver: PropTypes.func, 
    /**
     * onDrop : Function to register a event onDrag on the item
     */
    onDrop: PropTypes.func,
    /**
     * Tasks is an array which store the type of item details
     */
    tasks:PropTypes.object
     
  }
export default LeftHomeContainer

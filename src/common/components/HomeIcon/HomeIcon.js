import React from 'react';
import "./HomeIcon.css";
import PropTypes from "prop-types";
import { checkIconCondition } from '../../Helpers/checkCondition';

const HomeIcon = (props) => {
    const { name,bgColor,selected,boxImage,onDragStart,closeHandler,onClick,shape,iconCondition,link,nextIconCondition} = { ...props };
    const links = (link && shape !== "diamond") ? <div className='top-line'></div> : (shape === "diamond" && iconCondition && nextIconCondition && link ) ? <div className='top-line'></div> : (shape === "diamond" && !iconCondition && !nextIconCondition && link ) && <div className='top-line'></div>  
    const rightLinks = (shape === "diamond" && iconCondition && !nextIconCondition && link )?<><div className='right-line'></div><div className='right-bottom-line'></div></> :  (shape === "diamond" && !iconCondition && nextIconCondition && link ) && <><div className='left-line'></div><div className='left-bottom-line'></div></>
    const iconClass = shape === "square" ? "draggable-square" : shape === "circle" ? "draggable-circle" : shape === "diamond" ? "draggable-diamond" : shape === "file" ? "draggable-file" : "draggable-square"
    const selectedClass = selected === true ? "draggable-selected-container" : "draggable-unselected-container";
    const eachHomeIcon = checkIconCondition(selected,name,iconClass,onClick,onDragStart,bgColor,boxImage,iconCondition,selectedClass,links,rightLinks,closeHandler)
    return (
        <>
            {eachHomeIcon}
        </>
    )
}
HomeIcon.propTypes = {
    /**
     * task is an object which have details of icon
     */
    task: PropTypes.object, 
    /**
     * Click event Handler for the Drag Start 
     */
    onDragStart: PropTypes.func,
     /**
      * Click Event To Close the Home Icon From Middle Row
      */
    closeHandler: PropTypes.func,
    /**
      * Click Event To open the side Input Nav
      */
    onClick: PropTypes.func,
     /**
      * Shape Of Box
      */
    shape: PropTypes.string,
      /**
       * To Set Condition of the icon Placement
       */
  iconCondition: PropTypes.bool,
    /**
     * link to describe weather its a last item condition
     */
  link: PropTypes.bool,
  /**
   * nextIconCondition on loop choose
   */
  nextIconCondition:PropTypes.bool
  }
export default HomeIcon

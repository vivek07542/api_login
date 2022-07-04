import React from 'react'
import "./Tags.css";
import PropTypes from "prop-types";
// import { GrFormClose } from "react-icons/gr";
import { checkTagCondition } from "../../Helpers/checkCondition";

// Componet defined for Table>> Td Design JSx need to display on the page
const Tags = (props) => {
    const { className,children,data,closeHandler,condition,checkClickHandler,infoHandler,typeOf,clickInfo, ...allProps } = {...props};
    const tagHandler = (e) => {
        e.stopPropagation();
    }
    let classNameProp = ["tag-container"];
    if (className) {
      classNameProp.push(className);
    }
    let assignedClass = classNameProp.join(" ");
    const eachTag = data.map((e, index) =>
        <div key={index} className={assignedClass} {...allProps} onClick={(e)=>tagHandler(e)}>
          {checkTagCondition(condition,e,closeHandler,checkClickHandler,infoHandler,typeOf,clickInfo)}
        </div>
    )
    return (
        <div className={condition === "regular" || condition === "regular-click-info" ? "tags-wrapper":condition === "close-tag" && "tags-wrap"} >
            {eachTag}
        </div>
    )
}
Tags.propTypes = {
     /**
   * Any Further style can be added to the component apart from regualar class this will give extra styling to the page.
   */
  className : PropTypes.string,
  /**
   * Click handler which function shall be registered on the Main page,if have any
   */
  onClick: PropTypes.func,
  /**
   * Text Written in between component shall be treated a children will show or display this on screen 
   */
    children: PropTypes.string,
   /**
    * Array of Data which need to be created Td>>Tags
    */
    data: PropTypes.array,
    /**
     * Close tag Condition
     */
    closeTag: PropTypes.bool,
    /**
     * Close Handler For Remove Tag
     */
    closeHandler: PropTypes.func,
    /**
     * Click Event For Info Select
     */
    clickInfo:PropTypes.func
}
export default Tags

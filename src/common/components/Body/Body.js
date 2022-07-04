/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from "prop-types";

import "./Body.css";
/** A Wrapper to Cover all Center Element Of Each Major Screen Used in Pages>>Component */ 
const Body = ({ className,children }) => {
  let classNameProp = ["body-side--container"];
  if (className) {
    classNameProp.push(className);
  }
  let assignedClass = classNameProp.join(" ");
    return (
        <div className={assignedClass}>
          {children}           
        </div>
    )
}
Body.propTypes = {
  /**
   * ClassName will recieve classes from component which shall need to hav extra special effects can be added with it.
   */
  className: PropTypes.string, 

}
export default Body;
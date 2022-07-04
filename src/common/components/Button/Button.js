import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
/**
 * Common Button Component which has a commone stylig feature in entire application with same effects
 */
const Button = (props) => {
  const { className,children, ...allProps } = {...props};
  
  let classNameProp = ["btn buttonFeature"];
  if (className) {
    classNameProp.push(className);
  }
  let assignedClass = classNameProp.join(" ");
  return (  
      <button className={assignedClass} {...allProps}>
        {children}
      </button>   
  );
};
Button.propTypes = {
  /**
   * ClassName will recieve classes from component which shall need to hav extra special effects can be added with it.
   */
  className: PropTypes.string, 
  /**
   * Click event Handler for the button 
   */
    onClick: PropTypes.func
}
export default Button;
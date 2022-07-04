import React from 'react'
import PropTypes from "prop-types";
import "./Heading.css"
/**
 * Heading Will give a Heading Style which shall be used in every page body>>Heading for all major page
 */
const Heading = (props) => {
    const { className, ...allProps } = {...props};
  
    let classNameProp = ["general-heading--style"];
    if (className) {
      classNameProp.push(className);
    }
    let assignedClass = classNameProp.join(" ");
    return (
        <h2 className={assignedClass} {...allProps}>
        {props.children}
        </h2>
    )
}
Heading.propTypes = {
    /**
     * Any Special Styling need to pass from general heading can be handle using classname 
     */
    className: PropTypes.string,
    /**
     * The value of heading will be named as children in Heading
     */
    children: PropTypes.string
}
export default Heading;
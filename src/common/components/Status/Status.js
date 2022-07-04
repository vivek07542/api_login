import React from 'react'
import "./Status.css";
import PropTypes from "prop-types";
/**
 * Status component shall be generally used with in the table of the application, With feature of color and styling
*/
const Status = (props) => {
    const { className,children, ...allProps } = {...props};
  
  let classNameProp = ["status-container"];
  if (className) {
    classNameProp.push(className);
  }
  let colorSequence = checkStatus(children);
  let textSequence = checkChildren(children)
  classNameProp.push(colorSequence);
  let assignedClass = classNameProp.join(" ");
    return (
      <div className={assignedClass} {...allProps}>
        {textSequence}
      </div>   
    )
}
Status.propTypes = {
    /**
    * Any Further style can be added to the component apart from regualar class this will give extra styling to the page.
    */
  className: PropTypes.string,
  /**
   * Text Written in between component shall be treated a children will show or display this on screen 
   */
    children: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ])
}

export default Status

const checkStatus = (text) => {
  switch (text) {
    case "DRAFT":
      return "status-draft" 
    case "ACTIVE":
      return "status-active"
    case "INACTIVE":
      return "status-inactive"
    case true:
      return "status-draft"
      case false:
        return "status-inactive" 
    default:
      return "status-draft" 
   
  }
}
// (children)
/** 
 * It Will Check Text of the Value and used to print the Value in JSX
 */
const checkChildren = (text) => {
  switch (text) {
    case "DRAFT":
      return <p>{text}</p>
    case "ACTIVE":
      return <p>{text}</p>
    case "INACTIVE":
      return <p>{text}</p>
    case true:
      return <p>True</p>
      case false:
        return <p>False</p> 
    default:
      return <p>text</p>
  }
}
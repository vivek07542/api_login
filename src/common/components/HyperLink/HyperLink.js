/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import "./HyperLink.css";
/**
 * The Anchor Component with common styling for all project where all relative Hyperlink shall have same cklass effect
 */
const HyperLink = (props) => {
  const { className, ...allProps } = {...props};
  
  let classNameProp = ["anchorTag-style--hover"];
  if (className) {
    classNameProp.push(className);
  }
  let assignedClass = classNameProp.join(" ");
  return (  
      <a className={assignedClass} {...allProps}>
        {props.children}
      </a>   
  );
};
HyperLink.propTypes = {
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
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])
}
export default HyperLink;
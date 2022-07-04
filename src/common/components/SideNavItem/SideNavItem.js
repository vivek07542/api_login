import React from 'react'
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import "./SideNavItem.css";

const SideNavItem = (props) => {
    const { className,path,children, ...allProps } = {...props};
  
    let classNameProp = ["col-12 sideNav-icon--container"];
    if (className) {
      classNameProp.push(className);
    }
    let assignedClass = classNameProp.join(" ");
    return (
        <div className="row w-100 mx-auto">
            <NavLink className={(navData)=>navData.isActive ? `active ${assignedClass}` : assignedClass} {...allProps} to={path}>
                {children}
            </NavLink>
        </div>

    )
}
SideNavItem.propTypes = {
    /**
     * It will define the route of page which need to be assign to the page
     */
    path: PropTypes.string,
    /**
    * Any Further style can be added to the component apart from regualar class this will give extra styling to the page.
    */
    className: PropTypes.string,
    /**
    * Click handler which function shall be registered on the Main page,if have any
    */
    onClick: PropTypes.func,
   
}

export default SideNavItem

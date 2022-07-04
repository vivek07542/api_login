import React from 'react'
import "./SideNav.css";

import SideNavItem from '../SideNavItem/SideNavItem';
import { sideNavData } from "./SideNavData";
/**
* Side Nav for the Application  
*/
const SideNav = () => {
    const displaySideNav = sideNavData.map((e, index) => {
        return (
            <SideNavItem key={index} path={e.path}>{e.icon} </SideNavItem>
        )
    })

    return (
        <div className=" sideNav-container-size">
                {displaySideNav}
        </div>
    )
}

export default SideNav

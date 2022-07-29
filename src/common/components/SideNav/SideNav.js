import React from 'react'
import "./SideNav.css";
import { useSelector } from 'react-redux';
import SideNavItem from '../SideNavItem/SideNavItem';
import { sideNavData } from "./SideNavData";
/**
* Side Nav for the Application  
*/
const SideNav = () => {
    const toggler = useSelector((state) => state.HamBurger.hamToggler);
    const displaySideNav = sideNavData.map((e, index) => {
        return (
            <SideNavItem key={index} path={e.path} title={e.iconName}>{!toggler ? e.icon : e.iconName} </SideNavItem>
        )
    })

    return (
        <div className={!toggler?"sideNav-container-size":"sideNav-open-container" }>
                {displaySideNav}
        </div>
    )
}

export default SideNav

import React from 'react'
import "./Header.css";
import logo from "../../../assets/Images/logoe.png";
// import { BsSearch } from 'react-icons/bs';
// import { IoIosArrowDown } from "react-icons/io";
// import Button from "../Button/Button";
// import UserIcon from '../UserIcon/UserIcon';
import PropTypes from "prop-types";
/**
 * Header Component which shall determine the header of every page .
 */
const Header = ({onClick}) => {
    return (
        <nav className="container-fluid mx-auto navbar navbar-expand-lg navbar-light bg-light header-container--size p-0 text-left">
            <div className="row w-100 justify-content-between">
           
                <div className="col-1">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} width="50" height="40" alt=""/>
                    </a>
                </div>
                
                <div className="col-7 col-md-8 d-flex p-0 justify-content-start ">
                    
                    
                   
                </div>
                <div className="col-3 d-flex justify-content-end">
                    {/* <UserIcon className="md-2 md-md-0" color="rgb(33,150,243)">Wellina</UserIcon>
                    <div className="caret-container">                        
                    <IoIosArrowDown/>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}
Header.propTypes = {

    /**
     * Click event Handler for the button 
     */
     onClick: PropTypes.func
  }
export default Header;
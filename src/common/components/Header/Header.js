import React from 'react'
import "./Header.css";
import logo from "../../../assets/Images/logo.png";
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Button/Button";
import UserIcon from '../UserIcon/UserIcon';
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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <form className="form-inline my-2 my-lg-0  ">
                            <div className="header-search--container row ">
                                <div className="col-12 col-xs-offset-2 p-0">
                                <div className="input-group header-search--shape  ">
                                <div className="input-group-btn search-panel">
                                <button type="button" className="btn btn-default dropdown-toggle header-search--selector" data-toggle="dropdown">
                                    <span id="search_concept">All</span> <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu scrollable-dropdown" role="menu">
                                    <li><a href="/#">Automotive Accesories</a></li>
                                    <li><a href="/#">Cell Phone Accesories</a></li>
                                    <li><a href="/#">Computer Accesories</a></li>
                                    <li><a href="/#">Health and Personal Care</a></li>
                                    <li><a href="/#">Automotive Accesories</a></li>
                                    <li><a href="/#">Cell Phone Accesories</a></li>
                                    <li><a href="/#">Computer Accesories</a></li>
                                    <li><a href="/#">Health and Personal Care</a></li>
                                    <li><a href="/#">Automotive Accesories</a></li>
                                    <li><a href="/#">Cell Phone Accesories</a></li>
                                    <li><a href="/#">Computer Accesories</a></li>
                                    <li><a href="/#">Health and Personal Care</a></li>
                                    <li><a href="/#">Automotive Accesories</a></li>
                                    <li><a href="/#">Cell Phone Accesories</a></li>
                                    <li><a href="/#">Computer Accesories</a></li>
                                    <li><a href="/#">Health and Personal Care</a></li>
                                </ul>
                                </div>
                                <input type="hidden" name="search_param" value="all" id="search_param"/>
                                <input type="text" className="form-control header-search--input" name="x" id="search" placeholder="Search"/>
                                <span className="input-group-btn">
                                    <Button type="button" className="search-button--color" >
                                        <BsSearch />
                                    </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="px-5 header-create-container ">
                            <Button type="button" className="header-create-shape d-flex justify-content-around" onClick={onClick} >
                                <div className="pt-1 mx-auto">Create</div>
                                <div className="btn btn-default dropdown-toggle header-toggler-shape pt-1 mx-auto" data-toggle="dropdown">
                                    <span className="caret"></span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <UserIcon className="md-2 md-md-0" color="rgb(33,150,243)">Wellina</UserIcon>
                    <div className="caret-container">                        
                    <IoIosArrowDown/>
                    </div>
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
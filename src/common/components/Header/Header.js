import React,{useState} from 'react'
import { Dispatch } from 'react';
import "./Header.css";
import logo from "../../../assets/Images/logoe.png";
import { BsSearch } from 'react-icons/bs';
import {HiMenuAlt1} from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import {AiOutlineClose} from "react-icons/ai";
import Button from "../Button/Button";
import UserIcon from '../UserIcon/UserIcon';
import PropTypes from "prop-types";
import * as action from "../../reducers/HamburgerRedux/HamburgerRedux";
import { useSelector, useDispatch } from "react-redux";
/**
 * Header Component which shall determine the header of every page .
 */
const Header = ({loginHeader}) => {
    const[caretToggle,setCaretToggle] = useState(false)
    const dispatch = useDispatch();
    const toggler = useSelector((state) => state.HamBurger.hamToggler);
    const togglerHandler=()=>{
        dispatch(action.initilizeHamburgerInit(!toggler));
    }
    const logoutHangler=()=>{
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
        <nav className="container-fluid mx-auto navbar navbar-expand-lg navbar-light bg-light header-container--size p-0 text-left">
            <div className="row w-100 justify-content-between">
                <div className='col-1'>
                {!loginHeader && <div className="hamBurger-size" onClick={()=>togglerHandler()}>
                {!toggler?<HiMenuAlt1/> : <AiOutlineClose/>}
                </div>}
                </div>
                <div className="col-1">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} width="80" height="40" alt=""/>
                    </a>
                </div>
                <div className="col-6 col-md-7 d-flex p-0 justify-content-start "></div>
                <div className="col-3 d-flex justify-content-end">
                   {!loginHeader &&  <>
                    <UserIcon className="md-2 md-md-0">Stacy</UserIcon>
                    <div className="caret-container" onClick={()=>setCaretToggle(!caretToggle)}>                        
                        <IoIosArrowDown/>
                        {caretToggle && <div className='header-caret--dropDown' onMouseLeave={()=>setCaretToggle(false)}>
                        <div className='profile-caret-name'>Stacy Warner</div>
                        <ul className="list-group">
                            <li className="list-group-item">Profile</li>
                            <li className="list-group-item" onClick={()=>logoutHangler()}>Logout</li>
                        </ul>
                        </div>}
                    </div>
                   </>} 
                </div>
            </div>
        </nav>
        </>

    )
}
Header.propTypes = {

    /**
     * Click event Handler for the button 
     */
     onClick: PropTypes.func
  }
export default Header;
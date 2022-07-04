import React, { Component } from 'react'
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import errorImage from "../../../assets/Images/error-image.jpg";
import "./ErrorBoundary.css";

// import ErrorPage from '../ErrorPage/ErrorPage';
 class ErrorBoundary extends Component {
    
    constructor(props) { 
        super(props)
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError : true
        }
    }
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)

    }
   
    render() {
        if(this.state.hasError){
            return (
                <div>
                    <div className="image-div">
                        <img className="image" src={errorImage} alt="errorScreen"/>
                        <Button onClick = {this.clickHandler} className = "btn btn-outline-info m-3"><NavLink className ="ErrorLink" to = "/"> Try Again </NavLink></Button>
                    </div>
                </div>

            )
        }
        return this.props.children;      
    }
}
export default ErrorBoundary

ErrorBoundary.propTypes = {
    /**
     * The value of heading will be named as children in Heading
     */
     children: PropTypes.element
  }
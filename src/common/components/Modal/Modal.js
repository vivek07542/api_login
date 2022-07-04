import React, { Component } from 'react';
import "./Modal.css";
// import Aux from "../../../hoc/Auxilary";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";
class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
       return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }  
    
    render(){
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div className="Modal"
                style={{
                    transform:this.props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.show ? "1" : "0"
                }}>
                    {this.props.children}
                </div>
            </>
        )
    }
}
Modal.propTypes = {
    /**
     * ClassName will recieve classes from component which shall need to hav extra special effects can be added with it.
     */
    className: PropTypes.string, 
    show: PropTypes.bool,
    children: PropTypes.element,
    modelClosed:PropTypes.func
  
  }
export default Modal
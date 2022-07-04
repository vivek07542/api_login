import React from 'react'
import "./InforCard.css";
import { GrFormClose } from "react-icons/gr";
import PropTypes from "prop-types";

const InfoCard = (props) => {

    return (
        <div className="row card-container">
            <div className="col-12 d-flex justify-content-end ">
                <div onClick={()=>props.closeInfoHandler()} className='closeTag'>
                <GrFormClose />
            </div>
            </div>
            <div className="col-12">
            <strong>Patient Count : 28</strong>
            </div>
            <div className='col-12'>
                <strong>Infants Born 32 weeks gestation and Potential age more than 7 weeks</strong>
            </div>
            <div className='col-12'>
                <p>Pretern less than 32 week of gestational age with no anaomalies in cardic conduct, congestional malformation & serve intraventiural haemopage (grade 3 or 4) or with periventicural lenkomalacia </p>
            </div>
        </div>
    )
}
InfoCard.propTypes = {
    closeInfoHandler:PropTypes.func
} 
export default InfoCard

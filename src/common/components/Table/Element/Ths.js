import React,{useState} from 'react'
import PropTypes from "prop-types";
import { Th } from 'react-super-responsive-table';
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const Ths = ({ eachColoumnConfig, onSortHandler,ascActive,descActive }) => {

    return (
        <Th className="col">
            <div className="table-thead-container row justify-content-center text-center">
                {eachColoumnConfig.coloumnName} 
                {eachColoumnConfig.sortExpression !== "" &&
                    <div className="thead-button--container">
                        <button className="table-sort-button" onClick={() => { onSortHandler(eachColoumnConfig.dataColoumn, "asc") }}><BiCaretUp fontSize={"14px"} color={(eachColoumnConfig.dataColoumn === ascActive.dataColoumn && ascActive) ? "green" : "rgb(169,169,169)"} /></button>
                        <button className="table-sort-button" onClick={() => { onSortHandler(eachColoumnConfig.dataColoumn, "desc") }}><BiCaretDown fontSize={"14px"} color={(eachColoumnConfig.dataColoumn === descActive.dataColoumn && descActive) ? "green" : "rgb(169,169,169)"} /></button>
                    </div>
                }
            </div>
        </Th>
    )
}
Ths.propTypes = {
    descActive:PropTypes.object,
    ascActive:PropTypes.object,
    /**
     * Sort Handler on Table Function which shall be written on every handler funciton and return coloum Head Value and asc/desc
     */
    onSortHandler: PropTypes.func,
    /**
    *  Object written from the config file of each component which is being breakdown and used in table As A thead Values
    */
    eachColoumnConfig:PropTypes.object
}
export default Ths

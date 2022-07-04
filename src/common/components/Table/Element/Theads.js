import React from 'react'
import PropTypes from "prop-types";
import { Thead} from 'react-super-responsive-table';

import Trs from "./Trs";
/**
 * Thead is the Column row which will print Thead
 */
const Theads = ({ coloumnConfig, onSortHandler }) => {
 
    return (
        <>
            <Thead>
                <Trs coloumnConfig = {coloumnConfig} onSortHandler ={(col, action)=>onSortHandler(col, action)} isTableHead={true} />
            </Thead>
       </>
    )
}
Theads.propTypes = {
    /**
   * Array Of Object written from the config file of each component which is being breakdown and used in table As A thead Values
   */
    coloumnConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Sort Handler on Table Function which shall be written on every handler funciton and return coloum Head Value and asc/desc
     */
    onSortHandler:PropTypes.func
}
export default Theads;

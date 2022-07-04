import React from 'react'
import PropTypes from "prop-types";
import { Tbody } from 'react-super-responsive-table';

import Trs from "./Trs";


const Tbodys = ({ tableData, coloumnConfig,onEditHandler,onDeleteHandler }) => {
    return (
            <Tbody>
                {tableData.map((person, index) => (
                       <Trs key={person._id} isTableHead={false} eachTableData={person} coloumnConfig={coloumnConfig} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/> 
                ))}
            </Tbody> 
    )
}
Tbodys.propTypes = {
   /**
   * Array Of Object written from backend which is being breakdown and used in table As A tbody Values
   */
    tableData: PropTypes.arrayOf(PropTypes.object),
    /**
   * Array Of Object written from the config file of each component which is being breakdown and used in table As A thead Values
   */
    coloumnConfig: PropTypes.arrayOf(PropTypes.object),
           /**
     * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
     */
            onEditHandler: PropTypes.func,
            /**
    * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
    */
      onDeleteHandler: PropTypes.func,
}
export default Tbodys

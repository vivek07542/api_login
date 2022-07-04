import React from 'react'
import PropTypes from "prop-types";
import {Td } from 'react-super-responsive-table';
import { TdGeneratorCondition } from "../../../Helpers/TdGeneratorCondition";

/**Generate Td for the Table>>Tbody>>Tr>>Td */
const Tds = ({eachTableData,eachColoumnConfig,onEditHandler,onDeleteHandler}) => {
    let value = eachColoumnConfig.dataColoumn;
    let data = eachTableData[value];
    const eachTd = TdGeneratorCondition(eachColoumnConfig, data, eachTableData,onEditHandler,onDeleteHandler);
    return (
    <Td  className={eachColoumnConfig.className} data-heading={eachColoumnConfig.coloumnName}>{eachTd}</Td>
    )
}
Tds.propTypes = {
   /**
   *  Object written from the array of object tableData from backend which is being breakdown into each element and used in table As A tbody Values
   */
    eachTableData: PropTypes.object,
    /**
   *  Object written from the config file of each component which is being breakdown and used in table As A thead Values
   */
    eachColoumnConfig: PropTypes.object,
    /**
     * Id written from the tableData
     */
    id: PropTypes.oneOf([
        PropTypes.string,PropTypes.number
    ]),
       /**
     * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
     */
        onEditHandler: PropTypes.func,
             /**
     * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
     */
       onDeleteHandler: PropTypes.func,
}
export default Tds;


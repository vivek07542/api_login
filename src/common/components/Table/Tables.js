import React from 'react';
// import { Table, Thead, Tbody, Th, Td, Tr } from 'react-super-responsive-table';
import { Table } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PropTypes from 'prop-types';
import './Table.css';

// import UserIcon from '../UserIcon/UserIcon';
// import Tags from '../Tags/Tags';
// import Status from '../Status/Status';
// import { BiCaretUp, BiCaretDown } from 'react-icons/bi';

import Theads from './Element/Theads';
import Tbodys from './Element/Tbodys';

/** Common Table Feature for the Major Pages */

const Tables = ({ tableData, coloumnConfig, breakOn, onSortHandler ,onEditHandler,onDeleteHandler,onIdSelectHandler}) => {
      let tableClass = '';
      if (breakOn === 'small') {
            tableClass += 'table-responsive-sm';
      } else if (breakOn === 'medium') {
            tableClass += 'table-responsive-md';
      } else if (breakOn === 'large') {
            tableClass += 'table-responsive-lg';
      }
    return (
      <Table className={tableClass}>
           <Theads coloumnConfig={coloumnConfig} onSortHandler={(col, action)=>onSortHandler(col, action)}/>
           <Tbodys tableData={tableData} coloumnConfig={coloumnConfig} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} onIdSelectHandler={onIdSelectHandler}/>
      </Table>
      );
};
Tables.propTypes = {
     /**
     * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
     */
      onEditHandler: PropTypes.func,
              /**
      * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
      */
      onDeleteHandler: PropTypes.func,
      /**
      * Array Of Object written from backend which is being breakdown and used in table As A tbody Values
      */
      tableData: PropTypes.arrayOf(PropTypes.object),
      /**
      * Array Of Object written from the config file of each component which is being breakdown and used in table As A thead Values
      */
      coloumnConfig: PropTypes.arrayOf(PropTypes.object),
      /**
       * Break On will reponsive table break down the table
       */
      breakOn: PropTypes.oneOf(['small', 'medium', 'large']),
      /**
      *  Object written from the config file of each component which is being breakdown and used in table As A thead Values
      */
      onSortHandler: PropTypes.func,
};
export default Tables;

import React from 'react'
import "./FormSearchContainer.css";
import TableOption from '../../../IXH/components/TableOption/TableOption';
import TableFormSearch from '../../../IXH/components/TableFormSearch/TableFormSearch';
import PropTypes from "prop-types";
/**
 * 
Form Search Container will wrap the Table Search and Table option Button in every major page component.
 */
const FormSearchContainer = ({searchHandler}) => {
    return (
        <div className="body-tablesearch--container">
                <div className="row justify-content-between ">
                <TableFormSearch searchHandler={ (searchQuery)=>searchHandler(searchQuery)}/>
                <TableOption/>
                </div>
        </div>
    )
}
FormSearchContainer.propTypes = {
    /** Drop Down Handler function which shall register the value of dropdown */
    searchHandler:PropTypes.func
  }
export default FormSearchContainer

import React from "react";
import "./Pagination.css";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import { BiFirstPage,BiLastPage } from "react-icons/bi";

import { GrFormNext } from "react-icons/gr";
import {  MdNavigateBefore } from "react-icons/md";
import PropTypes from "prop-types";
/**
 * Used In Table Component which shall take the total data number , and data to be displayed on screen and accordingly create a button with click handler 
 */
const Pagination = ({totalPage,currentPage,limit,tableData,paginateHandler,pageSize}) => {


  const paginate = (pageNumbers) => {
    paginateHandler(pageNumbers);
  }

  const pageSelect = (pagePerPost) => {
  pageSize(pagePerPost);
  }
  
  const indexOfLastPost = currentPage * limit;
  const indexOfFirstPost = indexOfLastPost - limit;
  const totalPosts = tableData.length;
  const currentItem = tableData.slice(indexOfFirstPost, indexOfLastPost);
  
  const pageNumbers = [];
  const lastPage = totalPage;
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className = "Pagination">
     <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-end ">
      <li className="page-item mx-1"><DropDown  className = "form-control" inputHandler={(e) => pageSelect(e)} options = {[5,10,20] }></DropDown></li>
      <li className="page-item"><Button className = "btn-sm" onClick={() => paginate(1)} disabled={currentPage === 1 ? true : false} ><BiFirstPage  /></Button></li>
      <li className="page-item"><Button className = "btn-sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === lastPage ? true : false}><GrFormNext /></Button></li>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item mx-1" ><Button className={ currentPage === number ? "btn-sm buttonActive": "btn-sm"} onClick={() => paginate(number)}>{number}</Button></li>
        ))}
        <li className="page-item"><Button className = "btn-sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1 ? true : false}><MdNavigateBefore /></Button></li>
        <li className="page-item"> <Button className = "btn-sm" onClick={() => paginate(Math.ceil(totalPosts / limit))} disabled={currentPage === lastPage ? true : false}><BiLastPage/></Button></li>
      </ul>
     </nav>
    </div>
  );
};
Pagination.propTypes = {
  /**
   * Total page which will be recieved from Backend releated to total data which need to be wrapped with in that limit
   */
  totalPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * This will tell the pagination on which page the user is
   */
  currentPage: PropTypes.number,
  /**
   * Limit is defined the numner data to be displayed on the page 
   */
  limit: PropTypes.number,
  /**
   * Array Of Object written from backend which is being breakdown and used 
   */
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Paginate Handler is the Page Button Click which shall be register on the every table component
   */
  paginateHandler: PropTypes.func,
  /**
   * Page Size is the Handler which will return the limit value, the number of data which need to be displayed on screen
   */
  pageSize:PropTypes.func
}
export default Pagination;
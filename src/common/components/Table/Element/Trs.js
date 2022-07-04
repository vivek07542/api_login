import React,{useState} from 'react'
import PropTypes from "prop-types";
import { Tr } from 'react-super-responsive-table';

import Modal from "../../../../common/components/Modal/Modal";

import Ths from "./Ths";
import Tds from "./Tds";

const Trs = ({ coloumnConfig, onSortHandler, isTableHead, eachTableData,onEditHandler,onDeleteHandler }) => {
    const [ascActive, isAscActive] = useState({
        dataColoumn: "",
        active : false
    });
    const [descActive, isDescActive] = useState({
        dataColoumn: "",
        active:false
    });
    const [active, setActive] = useState(false);

    const activeSortHandler = (col, action) => {
        if (action === "asc") {
            isAscActive({
                dataColoumn: col,
                active:true
            })
            isDescActive({
                dataColoumn: "",
                active:false
            })
        }
        else {
            isDescActive({
                dataColoumn: col,
                active:true
            })
            isAscActive({
                dataColoumn: "",
                active:false
            })
        }
       
    }
    const clickHandler = () => {
        setActive(!active);
     } 
    let generateTd = coloumnConfig.map((col, index) => (
            isTableHead ?
            <Ths key={index} eachColoumnConfig={col} ascActive={ascActive} descActive={descActive} onSortHandler={(col, action) => { onSortHandler(col, action);activeSortHandler(col,action)}}/>
        :
             <Tds key={index} eachColoumnConfig={ col}  eachTableData={eachTableData} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/>
        ))
      
    return (
        // onDoubleClick={clickHandler}
        <Tr className="col" >
            {generateTd}
            {/* {!isTableHead && <Modal show={active} modelClosed={clickHandler}>
            </Modal>} */}
        </Tr>
            
    )
}
Trs.propTypes = {
    /**
     * Will Define the Weather Thead is there or not
     */
    isTableHead: PropTypes.bool,
   /**
   *  Object written from the array of object tableData from backend which is being breakdown into each element and used in table As A tbody Values
   */
    eachTableData: PropTypes.object,
   /**
   * Array Of Object written from the config file of each component which is being breakdown and used in table As A thead Values
   */
    coloumnConfig: PropTypes.arrayOf(PropTypes.object),
    /**
     * Sort Handler on Table Function which shall be written on every handler funciton and return coloum Head Value and asc/desc
     */
    onSortHandler: PropTypes.func,
    /*
    * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
    */
       onEditHandler: PropTypes.func,
            /**
    * Edit Handler on Table Function which shall be written on every handler funciton and return Body Value and return id.
    */
      onDeleteHandler: PropTypes.func,
}
export default Trs

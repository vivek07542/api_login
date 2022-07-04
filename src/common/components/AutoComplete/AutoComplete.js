/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from "react";
import "./AutoComplete.css";
import * as autoCompleteAction from "../../reducers/AutoCompleteRedux/AutoCompleteRedux";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const AutoComplete = (props) => {
    const{autoText,reference,selectAutoText,searchProperty} = {...props}
    const [autoSuggestion, setAutoSuggestion] = useState(false);

    const dispatch = useDispatch();

    const autoCompleteArray = useSelector(state => state.AutoComplete.autoCompleteArray);
    const refer = useSelector(state => state.AutoComplete.reference);
    useEffect(() => {
        if (autoText.length > 2) {
            dispatch(autoCompleteAction.initilizeAutoCompleteInit(autoText, reference));
            setAutoSuggestion(true)
        }
        else {
            setAutoSuggestion(false)
        }
       
    }, [autoText])

    const clickHandler = ( e) => {
        selectAutoText(e, refer);
        setAutoSuggestion(false);
    }
    
    let display = (reference === refer && autoCompleteArray.length !== 0 && autoSuggestion) &&
        
            <ul className=' dropMenu ' >
            {autoCompleteArray.map((e, index) =>
                
                searchProperty === "" ?
                    <li className="dropList" key={index} onClick={() => clickHandler(e)} >{e}</li>
                    :

                    <li className=" dropListSearch" key={index} onClick={() => clickHandler(e[searchProperty])} >
                        <div className="row">
                            <div className="col-8 p-0 eachDetailSection">
                                <div className="col-11">
                                    <strong>{e[searchProperty]}</strong>
                                </div>
                                <hr className="m-0" />
                                <div className="col-11 pl-1">
                                    {e.description}
                                </div>
                            </div>
                            <div className="col-3 p-0 m-0 search-by-filter-container">
                                <>
                                    <div className="col-12">
                                        <strong>FilterByPopulationType</strong>
                                    </div>
                                    <div className="col-12">
                                        {e.checklist.FilterByPopulationType.map((el, ind) => (
                                            <>
                                                <div className="form-inline">
                                                    <input type="checkbox" /> {el}
                                                </div>
                                            </>
                                                
                                        ))}
                                    </div>
                                    <hr className="m-0" />
                                    <div className="col-12">
                                        <strong>FilterByDataSource</strong>
                                    </div>
                                    <div className="col-12">
                                        {e.checklist.FilterByDataSource.map((el, ind) => (
                                            <>
                                                <div className="form-inline">
                                                    <input type="checkbox" /> {el}
                                                </div>
                                            </>
                                                
                                        ))}
                                    </div>
                                </>
                            
                            </div>
                        </div>

                    </li>
            )}
            </ul>
    return(
        <>
        {display}
        </>
    )  
  

}
AutoComplete.propTypes = {
    autoText:PropTypes.string,
    reference: PropTypes.string,
    selectAutoText: PropTypes.func,
    searchProperty:PropTypes.string
}  
export default AutoComplete;
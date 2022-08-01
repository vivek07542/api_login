export const IGNITE_INIT = "IGNITE_INIT";
export const IGINTE_SUCCESS = "IGINTE_SUCCESS";

export const IGNITE_POST_INIT = "IGNITE_POST_INIT";
export const IGNITE_POST_SUCCESS = "IGNITE_POST_SUCCESS";

export const IGNITE_PUT_INIT = "IGNITE_PUT_INIT";
export const IGNITE_PUT_SUCCESS = "IGNITE_PUT_SUCCESS";

export const IGNITE_DELETE_INIT = "IGNITE_DELETE_INIT";
export const IGNITE_DELETE_SUCCESS = "IGNITE_DELETE_SUCCESS";

export const IGNITE_GETBYID_INIT = "IGNITE_GETBYID_INIT";
export const IGNITE_GETBYID_SUCCESS = "IGNITE_GETBYID_SUCCESS"


export const ERROR_INIT = "ERROR_INIT";
export const ERROR_SUCCESS = "ERROR_SUCCESS";

export const initilizeIgniteInit = (pageDetail) => {
    return{
        type: IGNITE_INIT,
        pageDetail: pageDetail,
        loading:true
    }
}
export const initilizeIgniteSuccess = (tableObject, currentPage, limit) => {
    
    return{
        type : IGINTE_SUCCESS,
        tableData: tableObject,
        currentPage: currentPage,
        limit: limit,
        loading: false,
        requestProcessed:false,
        editMode: false
    }
}
export const errorHandlerInit = () =>{
    return{
        type:ERROR_INIT,
        errors:false
    }
}
export const errorHandlerSuccess = (errors) =>{
    return{
        type:ERROR_SUCCESS,
        errors:errors
    }
}
export const postIgniteInit = (pageDetail,state) => {
    return{
        type: IGNITE_POST_INIT,
        pageDetail: pageDetail,
        editMode: false,
        state: state,
        loading:true
    }
}
export const postIgniteSuccess = (requestProcessed,requestError,editMode) => {
    return{
        type: IGNITE_POST_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError,
        editMode: editMode
    }
}
export const putIgniteInit = (pageDetail,Id,editMode,state) => {
    return{
        type: IGNITE_PUT_INIT,
        pageDetail: pageDetail,
        editMode: editMode,
        Id: Id,
        state: state,
        loading:true
    }
}
export const putIgniteSuccess = (requestProcessed,requestError,editMode) => {
    return{
        type : IGNITE_PUT_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError,
        editMode: editMode
    }
}
export const getByIdIgniteInit = (id,editMode) => {
    return{
        type: IGNITE_GETBYID_INIT,
        id: id,
        editMode: editMode,
        loading:true
    }
}
export const getByIdIgniteSuccess = (editObject,action) => {
    return{
        type : IGNITE_GETBYID_SUCCESS,
        editObject: editObject,
        editMode: action.editMode,
        loading:false
    }
}
export const deleteIgniteInit = (id,state) => {
    return{
        type: IGNITE_DELETE_INIT,
        id:id,
        state: state,
        loading:true
    }
}
export const deleteIgniteSuccess = (requestProcessed,requestError) => {
    return{
        type : IGNITE_DELETE_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError
    }
}
const initialState = {
    tableData: [],
    totalPage: "",
    currentPage: 1,
    limit: 5,
    editMode: false,
    editObject: [],
    loading: false,
    requestProcessed: false,
    requestError : false,
    errors:false
}
const Ignite = (state = initialState,action) =>{
    switch (action.type) {
        case IGNITE_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case IGINTE_SUCCESS : 
        return{
            ...state,
            tableData: action.tableData,
            totalPage: action.totalPage,
            currentPage: action.currentPage,
            limit: action.limit,
            loading: action.loading,
            requestProcessed:action.requestProcessed,
            editMode: action.editMode
            }
        case IGNITE_POST_SUCCESS:
            return {
            ...state,
            editMode: action.editMode,
            requestProcessed:action.requestProcessed,
            requestError:action.requestError
            }
            case IGNITE_POST_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case IGNITE_PUT_SUCCESS:
            return {
                ...state,
                editMode: action.editMode,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
            case IGNITE_PUT_INIT:
                return {
                ...state,
                loading:action.loading
            }
        case IGNITE_DELETE_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case IGNITE_DELETE_SUCCESS:
            return {
                ...state,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case IGNITE_GETBYID_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case IGNITE_GETBYID_SUCCESS:
            return {
                ...state,
                editObject: action.editObject,
                editMode: action.editMode,
                loading:action.loading
            }
        case ERROR_SUCCESS:
            return{
                ...state,
                errors:action.errors,
            }
        case ERROR_INIT:
            return{
                ...state,
                errors:action.errors
            }    
       default : return state
    }
}
export default Ignite;
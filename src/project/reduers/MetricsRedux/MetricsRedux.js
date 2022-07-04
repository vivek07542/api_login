export const METRICS_INIT = "METRICS_INIT";
export const METRICS_SUCCESS = "METRICS_SUCCESS";

export const METRICS_POST_INIT = "METRICS_POST_INIT";
export const METRICS_POST_SUCCESS = "METRICS_POST_SUCCESS";

export const METRICS_PUT_INIT = "METRICS_PUT_INIT";
export const METRICS_PUT_SUCCESS = "METRICS_PUT_SUCCESS";

export const METRICS_DELETE_INIT = "METRICS_DELETE_INIT";
export const METRICS_DELETE_SUCCESS = "METRICS_DELETE_SUCCESS";

export const METRICS_GETBYID_INIT = "METRICS_GETBYID_INIT";
export const METRICS_GETBYID_SUCCESS = "METRICS_GETBYID_SUCCESS"


export const initilizeMetricsInit = (pageDetail) => {
    return{
        type: METRICS_INIT,
        pageDetail:pageDetail
    }
}

export const initilizeMetricsSuccess = (tableObject, currentPage, limit) => {
    return{
        type : METRICS_SUCCESS,
        tableData: tableObject.data.data,
        totalPage: Math.ceil(tableObject.data.totalDocs / limit),
        currentPage: currentPage,
        limit:limit,
        loading: false,
        requestProcessed:false
    }
}


export const postMetricsInit = (pageDetail,state) => {
    return{
        type: METRICS_POST_INIT,
        pageDetail: pageDetail,
        editMode: false,
        state: state,
        loading:true
    }
}
export const postMetricsSuccess = (requestProcessed,requestError,editMode) => {
    return{
        type: METRICS_POST_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError,
        editMode: editMode
    }
}

export const putMetricsInit = (pageDetail,Id,editMode,state) => {
    return{
        type: METRICS_PUT_INIT,
        pageDetail: pageDetail,
        editMode: editMode,
        Id: Id,
        state: state,
        loading:true
    }
}
export const putMetricsSuccess = (requestProcessed,requestError,editMode) => {
    return{
        type : METRICS_PUT_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError,
        editMode: editMode
    }
}


export const getByIdMetricsInit = (id,editMode) => {
    return{
        type: METRICS_GETBYID_INIT,
        id: id,
        editMode: editMode,
        loading:true
    }
}
export const getByIdMetricsSuccess = (editObject,action) => {
    return{
        type : METRICS_GETBYID_SUCCESS,
        editObject: editObject.data,
        editMode: action.editMode,
        loading:false
    }
}
export const deleteMetricsInit = (id,state) => {
    return{
        type: METRICS_DELETE_INIT,
        id:id,
        state: state,
        loading:true
    }
}
export const deleteMetricsSuccess = (requestProcessed,requestError) => {
    return{
        type : METRICS_DELETE_SUCCESS,
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
    editObject: {},
    loading: false,
    requestProcessed: false,
    requestError : false
}



const Metrics = (state = initialState,action) =>{
    switch (action.type) {
        case METRICS_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case METRICS_SUCCESS : 
        return{
                ...state,
                tableData: action.tableData,
                totalPage: action.totalPage,
                currentPage: action.currentPage,
                limit: action.limit,
                loading: action.loading,
                requestProcessed:action.requestProcessed
            }
           
        case METRICS_POST_SUCCESS:
            return {
                ...state,
                editMode: action.editMode,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case METRICS_POST_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case METRICS_PUT_SUCCESS:
            return {
                ...state,
                editMode: action.editMode,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case METRICS_PUT_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case METRICS_DELETE_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case METRICS_DELETE_SUCCESS:
            return {
                ...state,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case METRICS_GETBYID_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case METRICS_GETBYID_SUCCESS:
            return {
                ...state,
                editObject: action.editObject,
                editMode: action.editMode,
                loading:action.loading
            }
       default : return state
    }
}
export default Metrics;
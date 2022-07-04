export const POPULATION_INIT = "POPULATION_INIT";
export const POPULATION_SUCCESS = "POPULATION_SUCCESS";

export const POPULATION_POST_INIT = "POPULATION_POST_INIT";
export const POPULATION_POST_SUCCESS = "POPULATION_POST_SUCCESS";

export const POPULATION_PUT_INIT = "POPULATION_PUT_INIT";
export const POPULATION_PUT_SUCCESS = "POPULATION_PUT_SUCCESS";

export const POPULATION_DELETE_INIT = "POPULATION_DELETE_INIT";
export const POPULATION_DELETE_SUCCESS = "POPULATION_DELETE_SUCCESS";

export const POPULATION_GETBYID_INIT = "POPULATION_GETBYID_INIT";
export const POPULATION_GETBYID_SUCCESS = "POPULATION_GETBYID_SUCCESS"

export const initilizePopulationInit = (pageDetail) =>{
    return{
        type: POPULATION_INIT,
        pageDetail:pageDetail,
        loading:true
    }
}

export const initilizePopulationSuccess = (tableData,currentPage,limit) => {
    return{
        type : POPULATION_SUCCESS,
        tableData: tableData.data.data,
        totalPage: Math.ceil(tableData.data.totalPage / limit),
        currentPage: currentPage,
        limit:limit,
        loading: false,
        requestProcessed:false
    }
}

export const postPopulationInit = (pageDetail,state) => {
    return{
        type: POPULATION_POST_INIT,
        pageDetail: pageDetail,
        editMode: false,
        state: state,
        loading:true
    }
}

export const postPopulationSuccess = (requestProcessed,requestError,editMode) => {
    return{
        type : POPULATION_POST_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError,
        editMode: editMode
    }
}

export const putPopulationInit = (pageDetail,Id,editMode,state) => {
    return{
        type: POPULATION_PUT_INIT,
        pageDetail: pageDetail,
        editMode: editMode,
        Id: Id,
        state: state,
        loading:true
    }
}
export const putPopulationSuccess = (requestProcessed,requestError,editMode) => {
    return{
        type : POPULATION_PUT_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError,
        editMode: editMode
    }
}


export const getByIdPopulationInit = (id,editMode) => {
    return{
        type: POPULATION_GETBYID_INIT,
        id: id,
        editMode: editMode,
        loading:true
    }
}
export const getByIdPopulationSuccess = (editObject,action) => {
    return{
        type : POPULATION_GETBYID_SUCCESS,
        editObject: editObject.data,
        editMode: action.editMode,
        loading:false
    }
}
export const deletePopulationInit = (id,state) => {
    return{
        type: POPULATION_DELETE_INIT,
        id:id,
        state: state,
        loading:true
    }
}
export const deletePopulationSuccess = (requestProcessed,requestError) => {
    return{
        type : POPULATION_DELETE_SUCCESS,
        requestProcessed: requestProcessed,
        requestError:requestError
       
    }
}
const initialState = {
    tableData: [],
    totalPage: "",
    currentPage: 1,
    limit:5,
    editMode: false,
    editObject: {},
    loading:false,
    requestProcessed: false,
    requestError : false
}
const Population= (state = initialState,action) =>{
    switch(action.type){
        case POPULATION_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case POPULATION_SUCCESS : 
        return{
            ...state,
            tableData: action.tableData,
            totalPage: action.totalPage,
            currentPage: action.currentPage,
            limit:action.limit,
            loading: action.loading,
            requestProcessed:action.requestProcessed
        }
        case POPULATION_POST_SUCCESS:
            return {
                ...state,
                editMode: action.editMode,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case POPULATION_POST_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case POPULATION_PUT_SUCCESS:
            return {
                ...state,
                editMode: action.editMode,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case POPULATION_PUT_INIT:
            return {
                ...state,
                loading:action.loading
        }
        case POPULATION_DELETE_INIT:
            return {
                ...state,
                loading:action.loading
            }
        case POPULATION_DELETE_SUCCESS:
            return {
                ...state,
                requestProcessed:action.requestProcessed,
                requestError:action.requestError
            }
        case POPULATION_GETBYID_SUCCESS:
            return {
                ...state,
                editObject: action.editObject,
                editMode: action.editMode,
                loading:action.loading
            }
            case POPULATION_GETBYID_INIT:
                return {
                    ...state,
                    loading:action.loading
                }
       default : return state
    }
}
export default Population;
export const PROGRAMLIST_INIT = "PROGRAMLIST_INIT";
export const PROGRAMLIST_SUCCESS = "PROGRAMLIST_SUCCESS";

export const PROGRAMLIST_POST_INIT = "PROGRAMLIST_POST_INIT";
export const PROGRAMLIST_POST_SUCCESS = "PROGRAMLIST_POST_SUCCESS";

export const PROGRAMLIST_PUT_INIT = "PROGRAMLIST_PUT_INIT";
export const PROGRAMLIST_PUT_SUCCESS = "PROGRAMLIST_PUT_SUCCESS";

export const PROGRAMLIST_GETBYID_INIT = "PROGRAMLIST_GETBYID_INIT";
export const PROGRAMLIST_GETBYID_SUCCESS = "PROGRAMLIST_GETBYID_SUCCESS";

export const initilizeProgramListInit = (pageDetail) =>{
    return{
        type: PROGRAMLIST_INIT,
        pageDetail:pageDetail
    }
}

export const initilizeProgramListSuccess = (tableData,currentPage,limit) =>{
    return{
        type : PROGRAMLIST_SUCCESS,
               // tableData: tableObject.data.data,
               tableData: tableData,
               totalPage: Math.ceil(tableData.length / limit),
               // totalPage: Math.ceil(tableObject.data.totalDocs / limit),
               currentPage: currentPage,
               limit:limit
    }
}
export const postProgramListInit = (pageDetail) => {
    return{
        type: PROGRAMLIST_POST_INIT,
        pageDetail: pageDetail,
        pageNumber : 1,
        limit: 5,
        editMode:false
    }
}
export const postProgramListSuccess = (tableObject,currentPage, limit,editMode) => {
    return{
        type : PROGRAMLIST_POST_SUCCESS,
        // tableData: tableObject.data.data,
        tableData:tableObject,
        totalPage: Math.ceil(tableObject.data.totalDocs / limit),
        currentPage: currentPage,
        limit: limit,
        editMode:editMode
    }
}
export const putProgramListInit = (pageDetail,Id,editMode) => {
    return{
        type: PROGRAMLIST_PUT_INIT,
        pageDetail: pageDetail,
        Id: Id,
        pageNumber : 1,
        limit: 5,
        editMode:editMode
    }
}
export const putProgramListSuccess = (tableObject,editMode,currentPage, limit) => {
    return{
        type : PROGRAMLIST_PUT_SUCCESS,
        tableData: tableObject,
        editMode:editMode,
        totalPage: Math.ceil(tableObject.length / limit),
        currentPage: currentPage,
        limit: limit,
    }
}

export const getByIdProgramListInit = (id,editMode) => {
    return{
        type: PROGRAMLIST_GETBYID_INIT,
        id: id,
        editMode:editMode
    }
}
export const getByIdProgramListSuccess = (editObject,action) => {
    return{
        type : PROGRAMLIST_GETBYID_SUCCESS,
        editObject: editObject,
        editMode:action.editMode
    }
}
const initialState = {
    tableData: [],
    totalPage: "",
    currentPage: 1,
    limit: 5,
    editObject: {},
    editMode:false,
}
const ProgramList = (state = initialState,action) =>{
    switch(action.type){
        case PROGRAMLIST_SUCCESS : 
        return{
            ...state,
            tableData: action.tableData,
            totalPage: action.totalPage,
            currentPage: action.currentPage,
            limit:action.limit
            }
        case PROGRAMLIST_POST_SUCCESS: 
            return {
            ...state,
            tableData: action.tableData,
            totalPage: action.totalPage,
            currentPage: action.currentPage,
            limit: action.limit,
            editMode:action.editMode
            }
        case PROGRAMLIST_GETBYID_SUCCESS:
            return {
                ...state,
                editObject: action.editObject,
                editMode:action.editMode,
            }
        case PROGRAMLIST_PUT_SUCCESS:
            return {
                ...state,
                tableData: action.tableData,
                editMode:action.editMode,
                totalPage: action.totalPage,
                currentPage: action.currentPage,
                limit:action.limit

            }
       default : return state
    }
}
export default ProgramList;
export const PROTOCOL_INIT = "PROTOCOL_INIT";
export const PROTOCOL_SUCCESS = "PROTOCOL_SUCCESS";

export const initilizeProtocolInit = (pageDetail) =>{
    return{
        type: PROTOCOL_INIT,
        pageDetail:pageDetail
    }
}

export const initilizeProtocolSuccess = (tableData,currentPage,limit) =>{
    return{
        type : PROTOCOL_SUCCESS,
        // tableData: tableObject.data.data,
        tableData: tableData,
        totalPage: Math.ceil(tableData.length / limit),
        // totalPage: Math.ceil(tableObject.data.totalDocs / limit),
        currentPage: currentPage,
        limit:limit
    }
}
const initialState = {
    tableData: [],
    totalPage: "",
    currentPage: 1,
    limit:5
}
const Protocol= (state = initialState,action) =>{
    switch(action.type){
        case PROTOCOL_SUCCESS : 
        return{
            ...state,
            tableData: action.tableData,
            totalPage: action.totalPage,
            currentPage: action.currentPage,
            limit:action.limit
        }
       default : return state
    }
}
export default Protocol;
export const AUTO_COMPLETE_INIT = "AUTO_COMPLETE_INIT";
export const AUTO_COMPLETE_SUCCESS = "AUTO_COMPLETE_SUCCESS";

export const initilizeAutoCompleteInit = (text, reference) => {
    return{
        type: AUTO_COMPLETE_INIT,
        text: text,
        reference:reference
    }
}
export const initilizeAutoCompleteSuccess = (autoCompleteArray,reference) => {
    return {
        type: AUTO_COMPLETE_SUCCESS,
        autoCompleteArray:autoCompleteArray,
        reference:reference
    }
}
const initialState = {
    autoCompleteArray : [],
    reference:""
}

const AutoComplete = (state = initialState,action) =>{
    switch (action.type) {
        case AUTO_COMPLETE_SUCCESS:
            return {
                ...state,
                autoCompleteArray:action.autoCompleteArray,
                reference:action.reference
            }

       default : return state
    }
}
export default AutoComplete;
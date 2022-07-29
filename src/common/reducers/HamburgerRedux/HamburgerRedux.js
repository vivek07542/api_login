export const HAMBURGER_INIT = "HAMBURGER_INIT"; 
export const HAMBURGER_SUCCESS = "HAMBURGER_SUCCESS"; 

export const initilizeHamburgerInit = (value) => {
    return{
        type: HAMBURGER_INIT,
        hamToggler:value
    }
}
export const initilizeHamburgerSuccess = (value) => {
    return {
        type: HAMBURGER_SUCCESS,
        hamToggler:value
    }
}
const initialState = {
    hamToggler:false
}

const HamBurger = (state = initialState,action) =>{
    switch (action.type) {
        case HAMBURGER_SUCCESS:
            return {
                ...state,
                hamToggler:action.hamToggler
            }

       default : return state
    }
}
export default HamBurger;
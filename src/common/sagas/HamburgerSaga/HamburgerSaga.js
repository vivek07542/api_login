import {put,call} from "redux-saga/effects";
import * as hamBurgerAction from "../../reducers/HamburgerRedux/HamburgerRedux";


export function* initHamburgerHandlerSaga(action) { 
        yield put(hamBurgerAction.initilizeHamburgerSuccess(action.hamToggler));
}
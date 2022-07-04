import {put,call} from "redux-saga/effects";
import * as autoCompleteAction from "../../reducers/AutoCompleteRedux/AutoCompleteRedux";
import { protocol } from "../Mock/Mock";
import {autoFilterFunction} from "../../Helpers/autoFilterFunction";

export function* initAutoCompleteProtocolHandlerSaga(action) { 
    if (action.reference === "protocol") {
        const autoArray = autoFilterFunction(action.text, protocol,"heading");
        yield put(autoCompleteAction.initilizeAutoCompleteSuccess(autoArray, action.reference));
    }
}
import {put,call} from "redux-saga/effects";
import * as autoCompleteAction from "../../reducers/AutoCompleteRedux/AutoCompleteRedux";
import { tags } from "../Mock/Mock";
import {autoFilterFunction} from "../../Helpers/autoFilterFunction";

export function* initAutoCompleteTagHandlerSaga(action) { 
    if (action.reference === "tags") {
        const autoArray =  autoFilterFunction(action.text,tags,"");
        yield put(autoCompleteAction.initilizeAutoCompleteSuccess(autoArray,action.reference));
    }
}
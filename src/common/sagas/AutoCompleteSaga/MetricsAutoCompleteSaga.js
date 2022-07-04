import {put,call} from "redux-saga/effects";
import * as autoCompleteAction from "../../reducers/AutoCompleteRedux/AutoCompleteRedux";
import { metrics } from "../Mock/Mock";
import {autoFilterFunction} from "../../Helpers/autoFilterFunction";

export function* initAutoCompleteMetricsHandlerSaga(action) { 
    if (action.reference === "metrics") {
        const autoArray = autoFilterFunction(action.text, metrics,"heading");
        yield put(autoCompleteAction.initilizeAutoCompleteSuccess(autoArray, action.reference));
    }
}
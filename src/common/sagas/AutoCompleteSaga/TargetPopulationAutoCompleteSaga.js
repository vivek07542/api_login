import {put,call} from "redux-saga/effects";
import * as autoCompleteAction from "../../reducers/AutoCompleteRedux/AutoCompleteRedux";
import { targetPopulation } from "../Mock/Mock";
import {autoFilterFunction} from "../../Helpers/autoFilterFunction";

export function* initAutoCompleteTargetPopulationHandlerSaga(action) { 
    if (action.reference === "targetPopulation") {
        const autoArray = autoFilterFunction(action.text, targetPopulation,"heading");
        yield put(autoCompleteAction.initilizeAutoCompleteSuccess(autoArray, action.reference));
    }
}
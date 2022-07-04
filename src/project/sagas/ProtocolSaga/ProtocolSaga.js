import { put } from "@redux-saga/core/effects";
import * as protocolAction from "../../reduers/ProtocolRedux/ProtocolRedux";
import { persons } from "../Mock/Mock";

export function* initProtocolHandlerSaga(action) {
    const { pageNumber, searchQuery, sortDirection, sortExpression, limit } = action.pageDetail;
    yield put(protocolAction.initilizeProtocolSuccess(persons,pageNumber,limit));
}
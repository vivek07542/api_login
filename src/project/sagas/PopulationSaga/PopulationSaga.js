import {put,call} from "redux-saga/effects";
import * as populationAction from "../../reduers/PopulationRedux/PopulationRedux";

import { getRequest } from "../../services/getRequest";
import { postRequest } from "../../services/postRequest";
import { putRequest } from "../../services/putRequest";
import { deleteRequest } from "../../services/deleteRequest";
import { getByIdRequest } from "../../services/getByIdRequest";
import { responseFunction } from "../../../common/Helpers/responseFunction";
import { populationAPI, subscriptionKey } from "../../../common/constants/Constants";
import { decryptFunction } from "../../../common/Helpers/crypt_decryptFunction";
export function* initPopulationHandlerSaga(action) {
    const { pageNumber, searchQuery, sortDirection, sortExpression, limit } = action.pageDetail
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    if(token === null){
       token = {}
    }
    else {
        let url =  `${populationAPI}?type=get-all&page=${pageNumber}&limit=${limit}&sort=${sortExpression}&sortType=${sortDirection}&searchText=${searchQuery}`
        try {
            const { data } = yield call(getRequest,url,token.auth_token, subscriptionKey)
            yield put(populationAction.initilizePopulationSuccess(data,pageNumber,limit));
        }
        catch (error) {
            console.error(error);
        }
    }
}

export function* postPopulationHandlerSaga(action) {
    const { name, type, scope, status, entityType, description, updatedAt, owner, tags } = { ...action.pageDetail }
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${populationAPI}`
    let body = {name:name, type:type, scope: scope, entityType: entityType, description:description, status: status, updatedAt:updatedAt, owner:owner, tags: tags}
    try {
        const  response = yield call(postRequest, url, token.auth_token, subscriptionKey, body);
        const request = responseFunction(response);
        yield put(populationAction.postPopulationSuccess(request.requestProcessed,request.requestError,action.editMode));
    }
    catch (error) {
            console.error(error);
    }
}

export function* putPopulationHandlerSaga(action) {
    const { name, type, scope, entityType, status, description, updatedAt, owner, tags,updatedBy} = { ...action.pageDetail }
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let editObjectMode = !action.editMode;
    let url = `${populationAPI}?id=${action.Id}&updatedBy=${updatedBy}`
    let body = { name:name, type:type, scope: scope, entityType: entityType, description:description, status: status, updatedAt: updatedAt, owner: owner, tags: tags }
    try {
    const  response  = yield call(putRequest, url, token.auth_token, subscriptionKey, body)
    const request = responseFunction(response);
    yield put(populationAction.putPopulationSuccess(request.requestProcessed,request.requestError,editObjectMode));
} 
        catch (error) {
            console.error(error);
        }
}

export function* deletePopulationHandlerSaga(action) {
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${populationAPI}?id=${action.id}`
    try {
        const { data } = yield call(deleteRequest, url, token.auth_token, subscriptionKey)
        let response = {};
        response.data = data;
        const request = responseFunction(response);
        yield put(populationAction.deletePopulationSuccess(request.requestProcessed,request.requestError));
    } 
    catch (error) {
        console.error(error);
    }
}

export function* getByIdPopulationHandlerSaga(action) { 
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${populationAPI}?type=get-by-id&id=${action.id}`
    try {
        const { data } = yield call(getByIdRequest,url,token.auth_token,subscriptionKey)
        yield put(populationAction.getByIdPopulationSuccess(data, action));
    }
    catch (error) {
        console.error(error);
    }
}

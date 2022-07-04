import {put,call} from "redux-saga/effects";
import * as metricsAction from "../../reduers/MetricsRedux/MetricsRedux";
//import { persons} from "../Mock/Mock";
import { getRequest } from "../../services/getRequest";
import { postRequest } from "../../services/postRequest";
import { putRequest } from "../../services/putRequest";
import { deleteRequest } from "../../services/deleteRequest";
import { getByIdRequest } from "../../services/getByIdRequest";

import { responseFunction } from "../../../common/Helpers/responseFunction";
import { metricsAPI, subscriptionKey } from "../../../common/constants/Constants";
import { decryptFunction } from "../../../common/Helpers/crypt_decryptFunction";
export function* initMetricsHandlerSaga(action) {
    const { pageNumber, searchQuery, sortDirection, sortExpression, limit } = action.pageDetail
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    if(token === null){
       token = {}
    }
    else {
        let url =  `${metricsAPI}?type=get-all&page=${pageNumber}&limit=${limit}&sort=${sortExpression}&sortType=${sortDirection}&searchText=${searchQuery}`
        try {
            const { data } = yield call(getRequest,url,token.auth_token,subscriptionKey)
            yield put(metricsAction.initilizeMetricsSuccess(data,pageNumber,limit));
        }
        catch (error) {
            console.error(error);
        }
    }
}

export function* postMetricsHandlerSaga(action) {
    const { name, type, status, description, subType, updatedAt, owner, tags,value } = { ...action.pageDetail }
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${metricsAPI}`
    let body = {name:name,type:type,subType: subType,description:description,status: status,updatedAt:updatedAt,owner:owner,tags: tags,value:value}
    try {
        const  response = yield call(postRequest, url, token.auth_token, subscriptionKey, body);
        const request = responseFunction(response);
        yield put(metricsAction.postMetricsSuccess(request.requestProcessed,request.requestError,action.editMode));
    }
    catch (error) {
        console.error(error);
    }
    
}

export function* putMetricsHandlerSaga(action) {
    const { name, type, status, description, subType, updatedAt, owner, tags,updatedBy} = { ...action.pageDetail }
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let editObjectMode = !action.editMode;
    let url = `${metricsAPI}?id=${action.Id}&updatedBy=${updatedBy}`
    let body = {name:name,type:type,subType: subType,description:description,status: status,updatedAt:updatedAt,owner:owner,tags: tags}
    try {
        const  response  = yield call(putRequest,url,token.auth_token,subscriptionKey,body)
        const request = responseFunction(response);
        yield put(metricsAction.putMetricsSuccess(request.requestProcessed,request.requestError,editObjectMode));
    }  
    catch (error) {
        console.error(error);
    }
}

 
export function* deleteMetricsHandlerSaga(action) {
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${metricsAPI}?id=${action.id}`
    try {
        const { data } = yield call(deleteRequest, url, token.auth_token, subscriptionKey)
        let response = {};
        response.data = data;
        const request = responseFunction(response);
        yield put(metricsAction.deleteMetricsSuccess(request.requestProcessed,request.requestError));

    } 
    catch (error) {
        console.error(error);
    }
}


export function* getByIdMetricsHandlerSaga(action) { 
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${metricsAPI}?type=get-by-id&id=${action.id}`
    try {
        const { data } = yield call(getByIdRequest,url,token.auth_token,subscriptionKey)
        yield put(metricsAction.getByIdMetricsSuccess(data, action));
    }
    catch (error) {
        console.error(error);
    }
}


 
import {put,call} from "redux-saga/effects";
import * as igniteAction from "../../reduers/IgniteRedux/IgniteRedux";
// import { customers} from "../Mock/Mock";
import { getRequest } from "../../services/getRequest";
import { postRequest } from "../../services/postRequest";
import { putRequest } from "../../services/putRequest";
import { deleteRequest } from "../../services/deleteRequest";
import { getByIdRequest } from "../../services/getByIdRequest";
import { responseFunction } from "../../../common/Helpers/responseFunction";
import { igniteAPI,subscriptionKey } from "../../../common/constants/Constants";
import { decryptFunction } from "../../../common/Helpers/crypt_decryptFunction";

export function* initIgniteHandlerSaga(action) {
    const { pageNumber,  limit } = action.pageDetail
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    if(token === null){
       token = {}
    }
    else {
        let url =  `${igniteAPI}?type=get-all`
        try {
            const { data } = yield call(getRequest,url,token.auth_token,subscriptionKey)
            yield put(igniteAction.initilizeIgniteSuccess(data,pageNumber,limit));
            // yield put(igniteAction.initilizeIgniteSuccess(customers,pageNumber,limit));
        }
        catch (error) {
            console.log(error.response.status)
            if(error.response.status === 401){
               let errors = true;
                yield put(igniteAction.errorHandlerSuccess(errors));
            }
        }
    }
}

export function* postIgniteHandlerSaga(action) {
    const { name, type, status, description, subType, updatedAt, owner, tags,value } = { ...action.pageDetail }
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${igniteAPI}?type=get-all`
    let body = {name:name,type:type,subType: subType,description:description,status: status,updatedAt:updatedAt,owner:owner,tags: tags,value:value}
    try {
        const  response = yield call(postRequest, url,token.auth_token, subscriptionKey, body);
        const request = responseFunction(response);
        yield put(igniteAction.postIgniteSuccess(request.requestProcessed,request.requestError,action.editMode));
    }
    catch (error) {
        console.error(error);
    }
}

export function* putIgniteHandlerSaga(action) {
    const { name, type, status, description, subType, updatedAt, owner, tags,updatedBy} = { ...action.pageDetail }
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let editObjectMode = !action.editMode;
    let url = `${igniteAPI}?id=${action.Id}&updatedBy=${updatedBy}`
    let body = {name:name,type:type,subType: subType,description:description,status: status,updatedAt:updatedAt,owner:owner,tags: tags}
    try {
        const  response  = yield call(putRequest,url,token.auth_token,subscriptionKey,body)
        const request = responseFunction(response);
        yield put(igniteAction.putIgniteSuccess(request.requestProcessed,request.requestError,editObjectMode));
    }  
    catch (error) {
        console.error(error);
    }
}
 
export function* deleteIgniteHandlerSaga(action) {
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url =  `${igniteAPI}?id=${action.id}`
    try {
        const { data } = yield call(deleteRequest, url,token.auth_token, subscriptionKey)
        let response = {};
        response.data = data;
        const request = responseFunction(response);
        yield put(igniteAction.deleteIgniteSuccess(request.requestProcessed,request.requestError));
    } 
    catch (error) {
        console.error(error);
    }
}
export function* getByIdIgniteHandlerSaga(action) { 
    let decryptToken = JSON.parse(localStorage.getItem("token"));
    let token = decryptFunction(decryptToken);
    let url = `${igniteAPI}?type=get-by-id&id=${action.id}`
    try {
        const { data } = yield call(getByIdRequest,url,token.auth_token,subscriptionKey)
        yield put(igniteAction.getByIdIgniteSuccess(data, action));
        // yield put(igniteAction.getByIdIgniteSuccess([customers[2]], action));
    }
    catch (error) {
        console.error(error);
        if(error.response.status === 401){
            let errors = true;
             yield put(igniteAction.errorHandlerSuccess(errors));
         }
    }
}

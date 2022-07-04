import {put} from "redux-saga/effects";
import * as programAction from "../../reduers/ProgramListRedux/ProgramListRedux";
import { persons} from "../Mock/Mock";

export function* initProgramListHandlerSaga(action) {
    const { pageNumber, searchQuery, sortDirection, sortExpression, limit } = action.pageDetail
    yield put(programAction.initilizeProgramListSuccess(persons,pageNumber,limit));
}
export function* postProgramListHandlerSaga(action) { 
    // yield console.log(action.pageDetail);
    // const { name, type, status, description, subType, value, owner, tags } = { ...action.pageDetail }
}
export function* putProgramListHandlerSaga(action) { 
    let updateValue = [...persons];
    if (action.editMode === true){
        const editObjIndex = updateValue.findIndex(item => item._id === action.Id);
        const { name, type, status, enrolmentType, lastUpdatedBy, lastUpdated, owners, tags } = { ...action.pageDetail }
        let updatedObject = {};
        updatedObject._id = action.Id;
        updatedObject.name = name;
        updatedObject.type = type;
        updatedObject.status = status;
        updatedObject.enrolmentType = enrolmentType;
        updatedObject.lastUpdatedBy = lastUpdatedBy;
        updatedObject.lastUpdated = lastUpdated;
        updatedObject.owners = owners;
        updatedObject.tags = tags
        updateValue[editObjIndex] = updatedObject;
        let editMode = false;
        yield put(programAction.putProgramListSuccess(updateValue,editMode,action.currentPage,action.limit));
    }
    
}
export function* getByIdProgramListHandlerSaga(action) { 
    // const { name, type, status, description, subType, value, owner, tags } = { ...action.pageDetail }
        let editObject = persons.find((e, index) => action.id === e._id);
        yield put(programAction.getByIdProgramListSuccess(editObject, action));

}
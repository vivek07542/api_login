import { takeLatest } from "@redux-saga/core/effects";

// Ignite
import * as igniteAction from "./project/reduers/IgniteRedux/IgniteRedux";
import { initIgniteHandlerSaga, postIgniteHandlerSaga,putIgniteHandlerSaga,deleteIgniteHandlerSaga,getByIdIgniteHandlerSaga } from "./project/sagas/IgniteSaga/IgniteSaga";

import * as hamburgerAction from "./common/reducers/HamburgerRedux/HamburgerRedux";
import { initHamburgerHandlerSaga} from "./common/sagas/HamburgerSaga/HamburgerSaga";
export function* watch() {
    // Ignite
    yield takeLatest(igniteAction.IGNITE_INIT, initIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_POST_INIT, postIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_PUT_INIT, putIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_DELETE_INIT, deleteIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_GETBYID_INIT, getByIdIgniteHandlerSaga);
    // Hamburger
    yield takeLatest(hamburgerAction.HAMBURGER_INIT, initHamburgerHandlerSaga);
}
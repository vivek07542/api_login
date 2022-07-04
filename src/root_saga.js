import { takeLatest } from "@redux-saga/core/effects";

// Ignite
import * as igniteAction from "./project/reduers/IgniteRedux/IgniteRedux";
import { initIgniteHandlerSaga, postIgniteHandlerSaga,putIgniteHandlerSaga,deleteIgniteHandlerSaga,getByIdIgniteHandlerSaga } from "./project/sagas/IgniteSaga/IgniteSaga";

// Metrics
import * as metricsAction from "./project/reduers/MetricsRedux/MetricsRedux";
import { initMetricsHandlerSaga, postMetricsHandlerSaga,putMetricsHandlerSaga,deleteMetricsHandlerSaga,getByIdMetricsHandlerSaga } from "./project/sagas/MetricsSaga/MetricsSaga";

// Program List
import * as programListAction from "./project/reduers/ProgramListRedux/ProgramListRedux";
import { initProgramListHandlerSaga,postProgramListHandlerSaga,putProgramListHandlerSaga,getByIdProgramListHandlerSaga } from "./project/sagas/ProgramListSaga/ProgramListSaga";

// Population
import * as populationAction from "./project/reduers/PopulationRedux/PopulationRedux";
import { initPopulationHandlerSaga, postPopulationHandlerSaga, putPopulationHandlerSaga, deletePopulationHandlerSaga, getByIdPopulationHandlerSaga } from "./project/sagas/PopulationSaga/PopulationSaga";

// Protocol
import * as protocolAction from "./project/reduers/ProtocolRedux/ProtocolRedux";
import { initProtocolHandlerSaga } from "./project/sagas/ProtocolSaga/ProtocolSaga";

// Auto Complete
import * as autoCompleteAction from "./common/reducers/AutoCompleteRedux/AutoCompleteRedux";
import { initAutoCompleteTagHandlerSaga } from "./common/sagas/AutoCompleteSaga/TagsAutoCompleteSaga";
import { initAutoCompleteTargetPopulationHandlerSaga } from "./common/sagas/AutoCompleteSaga/TargetPopulationAutoCompleteSaga";
import { initAutoCompleteProtocolHandlerSaga } from "./common/sagas/AutoCompleteSaga/ProtocolAutoCompleteSaga";
import { initAutoCompleteMetricsHandlerSaga } from "./common/sagas/AutoCompleteSaga/MetricsAutoCompleteSaga";

export function* watch() {
    // Ignite
    yield takeLatest(igniteAction.IGNITE_INIT, initIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_POST_INIT, postIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_PUT_INIT, putIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_DELETE_INIT, deleteIgniteHandlerSaga);
    yield takeLatest(igniteAction.IGNITE_GETBYID_INIT, getByIdIgniteHandlerSaga);
    // Metrics
    yield takeLatest(metricsAction.METRICS_INIT,initMetricsHandlerSaga);
    yield takeLatest(metricsAction.METRICS_POST_INIT, postMetricsHandlerSaga);
    yield takeLatest(metricsAction.METRICS_PUT_INIT, putMetricsHandlerSaga);
    yield takeLatest(metricsAction.METRICS_DELETE_INIT, deleteMetricsHandlerSaga);
    yield takeLatest(metricsAction.METRICS_GETBYID_INIT, getByIdMetricsHandlerSaga);
    // Program List
    yield takeLatest(programListAction.PROGRAMLIST_INIT, initProgramListHandlerSaga);
    yield takeLatest(programListAction.PROGRAMLIST_POST_INIT, postProgramListHandlerSaga);
    yield takeLatest(programListAction.PROGRAMLIST_PUT_INIT, putProgramListHandlerSaga);
    yield takeLatest(programListAction.PROGRAMLIST_GETBYID_INIT, getByIdProgramListHandlerSaga);
    // Population 
    yield takeLatest(populationAction.POPULATION_INIT,initPopulationHandlerSaga);
    yield takeLatest(populationAction.POPULATION_POST_INIT, postPopulationHandlerSaga);
    yield takeLatest(populationAction.POPULATION_PUT_INIT, putPopulationHandlerSaga);
    yield takeLatest(populationAction.POPULATION_DELETE_INIT, deletePopulationHandlerSaga);
    yield takeLatest(populationAction.POPULATION_GETBYID_INIT, getByIdPopulationHandlerSaga);
    // Protocol
    yield takeLatest(protocolAction.PROTOCOL_INIT,initProtocolHandlerSaga);
    // AutoComplete
    yield takeLatest(autoCompleteAction.AUTO_COMPLETE_INIT, initAutoCompleteTagHandlerSaga);
    yield takeLatest(autoCompleteAction.AUTO_COMPLETE_INIT,initAutoCompleteTargetPopulationHandlerSaga);
    yield takeLatest(autoCompleteAction.AUTO_COMPLETE_INIT,initAutoCompleteProtocolHandlerSaga);
    yield takeLatest(autoCompleteAction.AUTO_COMPLETE_INIT,initAutoCompleteMetricsHandlerSaga);

}
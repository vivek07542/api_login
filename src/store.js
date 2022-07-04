import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "./root_reducer";
import { watch } from "./root_saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watch);
import {combineReducers} from "redux";
import Ignite from "./project/reduers/IgniteRedux/IgniteRedux";
import ProgramList from "./project/reduers/ProgramListRedux/ProgramListRedux";
import Population from "./project/reduers/PopulationRedux/PopulationRedux";
import Protocol from "./project/reduers/ProtocolRedux/ProtocolRedux";
import Metrics from "./project/reduers/MetricsRedux/MetricsRedux";
import AutoComplete from "./common/reducers/AutoCompleteRedux/AutoCompleteRedux";

export default combineReducers({
    Ignite,ProgramList,Population,Protocol,Metrics,AutoComplete
})
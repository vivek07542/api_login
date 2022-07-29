import {combineReducers} from "redux";
import Ignite from "./project/reduers/IgniteRedux/IgniteRedux";
import HamBurger from "./common/reducers/HamburgerRedux/HamburgerRedux";

export default combineReducers({
    Ignite,HamBurger
})
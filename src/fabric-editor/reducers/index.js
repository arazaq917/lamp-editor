import {combineReducers} from 'redux';
import activePanel from "./panelState";

const allReducer = combineReducers({
    activePanel:activePanel
})

export default allReducer;
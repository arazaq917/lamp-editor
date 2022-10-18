import {combineReducers} from 'redux';
import activePanel from "./panelState";
import canvas from "./canvasReducer";
const allReducer = combineReducers({
    activePanel:activePanel,
    canvas:canvas,
})

export default allReducer;
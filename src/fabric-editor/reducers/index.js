import {combineReducers} from 'redux';
import activePanel from "./panelState";
import canvas from "./canvasReducer";
import background from "./background";
import canvasObjectStates from "./objectStates";
const allReducer = combineReducers({
    activePanel:activePanel,
    canvas:canvas,
    background:background,
    canvasObjectStates:canvasObjectStates,
})

export default allReducer;
import {combineReducers} from 'redux';
import activePanel from "./panelState";
import canvas from "./canvasReducer";
import background from "./background";
const allReducer = combineReducers({
    activePanel:activePanel,
    canvas:canvas,
    background:background
})

export default allReducer;
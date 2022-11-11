import {combineReducers} from 'redux';
import activePanel from "./panelState";
import canvas from "./canvasReducer";
import background from "./background";
import canvasObjectStates from "./objectStates";
import images from "./images"
import trimColor from "./trimColor";
import previewSwitch from "./previewSwitchState";
const allReducer = combineReducers({
    activePanel:activePanel,
    canvas:canvas,
    background:background,
    canvasObjectStates:canvasObjectStates,
    images:images,
    trimColor:trimColor,
    previewSwitch:previewSwitch
})

export default allReducer;
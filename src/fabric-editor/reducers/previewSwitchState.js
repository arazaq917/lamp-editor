const previewSwitch = (state = "Tripod", action)=>{
    if (action.type === "SET_PREVIEW_STATE") {
        state = action.state
    }
    return state;
}

export default previewSwitch;
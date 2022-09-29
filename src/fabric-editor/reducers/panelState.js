const activePanel = (state = "1", action)=>{
    if (action.type === "SET_ACTIVE_PANEL") {
        state = action.key
    }
    return state;
}

export default activePanel;
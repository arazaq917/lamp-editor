const background = (state = null, action)=>{
    if (action.type === "SET_BACKGROUND") {
        state = action.background
    }
    return state;
}

export default background;
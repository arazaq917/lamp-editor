const trimColor = (state = '#ffffff80', action)=>{
    if (action.type === "SET_TRIM_COLOR") {
        state = action.color
    }
    return state;
}

export default trimColor;
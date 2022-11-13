const trimColor = (state = '#000000', action)=>{
    if (action.type === "SET_TRIM_COLOR") {
        state = action.color
    }
    return state;
}

export default trimColor;
const trimColor = (state = '#f0f0f080', action)=>{
    if (action.type === "SET_TRIM_COLOR") {
        state = action.color
    }
    return state;
}

export default trimColor;
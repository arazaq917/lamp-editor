const images = (state = [], action)=>{
    if (action.type === "SET_IMAGE") {
        state = action.image
    }
    return state;
}

export default images;
const images = (state = [{name:'',url:''},{name:'',url:''},{name:'',url:''},{name:'',url:''}], action)=>{
    if (action.type === "SET_IMAGE") {
        state = action.image
    }
    return state;
}

export default images;
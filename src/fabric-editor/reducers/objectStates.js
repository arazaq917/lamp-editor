const canvasObjectStates = (state = {objectActive: false,shape:false, activeSelection:false, image: false, text: false}, action)=>{
    if(action.type === "SET_OBJECTS_STATE"){
        state = {shape:action.action.shape, objectActive: action.action.objectActive, image: action.action.image, activeSelection:action.action.activeSelection, text: action.action.text}
    }
    return state;
}
export default canvasObjectStates;
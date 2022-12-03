const canvasObjectStates = (state = {objectActive: false, activeSelection:false, image: false, text: false}, action)=>{
    if(action.type === "SET_OBJECTS_STATE"){
        state = {objectActive: action.action.objectActive, image: action.action.image,shadow:action.action.shadow, activeSelection:action.action.activeSelection, text: action.action.text}
    }
    return state;
}
export default canvasObjectStates;
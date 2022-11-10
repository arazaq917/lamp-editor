export const setActivePanel = (key) => {
    return {
        type: "SET_ACTIVE_PANEL",
        key
    };
};
export const setCanvas = (nr) => {
    return {
        type: "SET_CANVAS",
        canvas: nr
    };
};
export const setImages = (nr)=>{
    return {
        type: "SET_IMAGE",
        image:nr
    }
}
export const setObjectsState = (nr) => {
    return {
        type: "SET_OBJECTS_STATE",
        action: nr
    };
};
export const setTrimColor = (color) => {
    return {
        type: "SET_TRIM_COLOR",
        color: color
    };
};
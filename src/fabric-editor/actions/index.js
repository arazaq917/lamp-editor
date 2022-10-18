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
import {fabric} from "fabric";

export const getCanvas=(containerDimensions)=>{
    let height = Math.ceil(containerDimensions.height);
    let width = Math.ceil(containerDimensions.width);
    if(height % 2 != 0)
        height += 1;
    if(width % 2 != 0)
        width += 1;
    const canvas = new fabric.Canvas("canvas", {
        targetFindTolerance: 10,
        selection: true,
        preserveObjectStacking: true,
        width:width,
        height:height,
        backgroundColor:'white'
    });
    return canvas;
}
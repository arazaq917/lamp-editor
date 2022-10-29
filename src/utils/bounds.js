import {fabric} from "fabric";

export  const createBounds = (canvas)=>{
    let wrapperRectTop = new fabric.Rect({
        left: 0,
        top: 0,
        name:'wrapperRect',
        width: canvas.width,
        height: canvas.height-(canvas.height/3),
        fill:'rgba(0, 0, 0, 0.78)',
        selectable:false,
        stroke:'transparent',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    let wrapperRectBottom = new fabric.Rect({
        left: 0,
        top: canvas.height,
        name:'wrapperRect',
        width: canvas.width,
        height: canvas.height-(canvas.height/3),
        fill:'rgba(0, 0, 0, 0.78)',
        selectable:false,
        stroke:'transparent',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    let rect1 = new fabric.Rect({
        left: 0,
        top: canvas.height/2,
        name:'rect1',
        width: canvas.width/4,
        height: canvas.height/3,
        visible:false,
        fill:'transparent',
        selectable:false,
        stroke:'black',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    let rect2 = new fabric.Rect({
        left: rect1.width,
        top: canvas.height/2,
        width: canvas.width/4,
        height: canvas.height/3,
        name:'rect2',
        visible:false,
        fill:'transparent',
        selectable:false,
        stroke:'black',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    let rect3 = new fabric.Rect({
        left: rect2.width+rect2.left,
        top: canvas.height/2,
        width: canvas.width/4,
        height: canvas.height/3,
        name:'rect3',
        fill:'transparent',
        visible:false,
        selectable:false,
        stroke:'black',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    let rect4 = new fabric.Rect({
        left: rect3.width+rect3.left,
        top: canvas.height/2,
        width: canvas.width/4,
        name:'rect4',
        height: canvas.height/3,
        fill:'transparent',
        visible:false,
        selectable:false,
        stroke:'black',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    canvas.add(rect1);
    canvas.add(rect2);
    canvas.add(rect3);
    canvas.add(rect4);
    canvas.add(wrapperRectTop);
    canvas.add(wrapperRectBottom)
    canvas.bringToFront(wrapperRectTop)
    canvas.bringToFront(wrapperRectBottom)

    canvas.renderAll()
}
export const captureShots = (canvas,updateImages) =>{
    let imagesArr = []
    canvas._objects.forEach(e=>{
        if(e.name === 'rect1' || e.name === 'rect2' || e.name === 'rect3' || e.name === 'rect4'){
            e.visible = false;
            let cropped = new Image();
            cropped.src = canvas.toDataURL({
                left: e.left,
                top: e.top-(e.height/2),
                width: e.width,
                height: e.height
            });
            cropped.onload = function() {
                imagesArr.push({
                    name:e.name,
                    url:cropped.src
                })
                console.log(cropped.src)
                canvas.renderAll();
            };
        }
    })
    // updateImages(imagesArr)
};
import {fabric} from "fabric";

 const rects = ()=>{
    let rect1 = new fabric.Rect({
        left: 0,
        top: canvas.height/2,
        width: canvas.width/4,
        height: canvas.height/2,
        name:'rect1'
    });
    let rect2 = new fabric.Rect({
        left: rect1.width,
        top: canvas.height/2,
        width: canvas.width/4,
        height: canvas.height/2,
        name:'rect2',
    });
    let rect3 = new fabric.Rect({
        left: rect2.width+rect2.left,
        top: canvas.height/2,
        width: canvas.width/4,
        height: canvas.height/2,
        name:'rect3',
    });
    let rect4 = new fabric.Rect({
        left: rect3.width+rect3.left,
        top: canvas.height/2,
        width: canvas.width/4,
        height: canvas.height/2,
        name:'rect4',
    });
    return [rect1,rect2,rect3,rect4]
}

export  const createBounds = (canvas)=>{
    let wrapperRectTop = new fabric.Rect({
        left: 0,
        top: 0,
        name:'wrapperRect',
        width: canvas.width,
        height: canvas.height-(canvas.height/2),
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
        height: canvas.height-(canvas.height/2),
        fill:'rgba(0, 0, 0, 0.78)',
        selectable:false,
        stroke:'transparent',
        originX:'left',
        originY:'center',
        evented:false,
        hasControls:false
    });
    canvas.add(wrapperRectTop);
    canvas.add(wrapperRectBottom)
    canvas.bringToFront(wrapperRectTop)
    canvas.bringToFront(wrapperRectBottom)

    canvas.renderAll()
}
export const captureShots = (canvas,updateImages) =>{
    let imagesArr = []
    let promises = []
    let canvasChunks = rects()
    for(let i=0;i<canvasChunks.length;i++){
        promises[i] = new Promise(resolve => {
            let e = canvasChunks[i]
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
                    resolve('resolved')
                };
            }
            else{
                resolve('resolved')
            }
        })
    }
    Promise.all(promises).then(value=>{
        updateImages(imagesArr);
        canvas.renderAll()
    })
    // updateImages(imagesArr)
};
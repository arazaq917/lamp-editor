import React from "react";
import minus from "../../../assets/images/minus.png";
import plus from "../../../assets/images/plus.png";

const CanvasZoom = () => {
    let SCALE_FACTOR = 1.2
    const zoomIn = () => {
        let height = canvas.getHeight()
        let width = canvas.getWidth()
        if(width>1000)return
        canvas.setHeight(height * 1.2);
        canvas.setWidth(width * 1.2);
        var objects = canvas.getObjects();
        for (var i in objects) {
            var scaleX = objects[i].scaleX;
            var scaleY = objects[i].scaleY;
            var left = objects[i].left;
            var top = objects[i].top;

            var tempScaleX = scaleX * SCALE_FACTOR;
            var tempScaleY = scaleY * SCALE_FACTOR;
            var tempLeft = left * SCALE_FACTOR;
            var tempTop = top * SCALE_FACTOR;

            objects[i].scaleX = tempScaleX;
            objects[i].scaleY = tempScaleY;
            objects[i].left = tempLeft;
            objects[i].top = tempTop;

            objects[i].setCoords();
        }

        canvas.renderAll();
    }
    const zoomOut = () => {
        let height = canvas.getHeight()
        let width = canvas.getWidth()
        if(width<300)return
        canvas.setHeight(height * (1 / SCALE_FACTOR));
        canvas.setWidth(width * (1 / SCALE_FACTOR));
        var objects = canvas.getObjects();
        for (var i in objects) {
            var scaleX = objects[i].scaleX;
            var scaleY = objects[i].scaleY;
            var left = objects[i].left;
            var top = objects[i].top;

            var tempScaleX = scaleX * (1 / SCALE_FACTOR);
            var tempScaleY = scaleY * (1 / SCALE_FACTOR);
            var tempLeft = left * (1 / SCALE_FACTOR);
            var tempTop = top * (1 / SCALE_FACTOR);

            objects[i].scaleX = tempScaleX;
            objects[i].scaleY = tempScaleY;
            objects[i].left = tempLeft;
            objects[i].top = tempTop;

            objects[i].setCoords();
        }
        canvas.renderAll();
    }

    return(
        <div className='zoom_wrapper'>
            <span onClick={zoomOut}>
                <img src={minus} height={20} width={20} />
            </span>
            <span onClick={zoomIn}>
                <img style={{marginRight: '2px'}} src={plus} height={20} width={20}/>
            </span>
        </div>
    )
}
export default CanvasZoom
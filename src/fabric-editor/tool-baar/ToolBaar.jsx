import React, {useState} from 'react';
import './index.css'
import { Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {FlipBottom, FlipFront} from "../../assets/images/icons/icons";
import redoImg from "../../assets/images/forward.png";
import undoImg from "../../assets/images/undo.png";
import grid from "../../assets/images/grid.png";
import backward from "../../assets/images/backward.png";
import Forward from "../../assets/images/sendForward.png";
import deleteImg from "../../assets/images/ButtonsImages/delete.png";
import { fabric } from "fabric";
import "fabric-history";
import {useSelector} from "react-redux";
const ToolBaar =()=>{
    const [gridEnabled, setGridEnabled] = useState(false);
    const [overlayGrid, setOverlayGrid] = useState();
    const canvas = useSelector(state => state.canvas)
    const sendForward = () => {
        let obj = canvas.getActiveObject();
        canvas.bringForward(obj);
        canvas.renderAll()
    }

    const sendBackward = () => {
        let obj = canvas.getActiveObject();
        canvas.sendBackwards(obj);
        canvas.renderAll()
    }
    const redo = () => {
        canvas.redo();
    }
    const undo = () => {
        canvas.undo();
    }

    const makeGrid = () => {
        let columns = 5;
        let rows = 5;
        const div = 5;
        const height = canvas.height - 2;
        const width = canvas.width - 2;
        const verticalDistance = height / rows;
        const horizontalDistance = width / columns;
        const divVertical = verticalDistance / div;
        const divHorizontal = horizontalDistance / div;
        let lines = [];
        let newLines = []
        let rect = new fabric.Rect({
            left: 0, top: 0, height: height, width: width, stroke: "dark gray", fill: null,
        })
        for (let i = 0; i < columns; i++) {
            for (let k = 1; k < div; k++) {
                let line = new fabric.Line([i * horizontalDistance + k * divHorizontal, 0, i * horizontalDistance + k * divHorizontal, height], {
                    left: i * horizontalDistance + k * divHorizontal,
                    top: 0,
                    stroke: '#808080',
                    strokeDashArray: [3, 3],
                });
                lines.push(line);
            }
            if (i != 0) {
                let line = new fabric.Line([i * horizontalDistance, 0, i * horizontalDistance, height], {
                    left: i * horizontalDistance,
                    top: 0,
                    stroke: 'dark gray'
                });
                newLines.push(line);
            }

        }
        for (let j = 0; j < rows; j++) {
            for (let k = 1; k < div; k++) {
                let line = new fabric.Line([0, j * verticalDistance + k * divVertical, width, j * verticalDistance + k * divVertical], {
                    left: 0,
                    top: j * verticalDistance + k * divVertical,
                    strokeDashArray: [3, 3],
                    stroke: '#808080',
                });
                lines.push(line);
            }
            if (j != 0) {
                let line = new fabric.Line([0, j * verticalDistance, width, j * verticalDistance], {
                    left: 0,
                    top: j * verticalDistance,
                    stroke: 'dark gray'
                });
                newLines.push(line);
            }

        }
        lines = [...lines, ...newLines]
        let group = new fabric.Group([rect, ...lines]);

        setOverlayGrid(group)
        return group;
    }

    const showGrid=()=>{

        if (!gridEnabled){
            if(!overlayGrid) {
                setOverlayGrid(makeGrid());
            }

            //to stop repetitive behaviour
            if(gridEnabled)
                return;

            canvas.setOverlayImage(overlayGrid, () => {
                canvas.renderAll();
            }, {
                overlayImageLeft: 0,
                overlayImageTop: 0,
            });
            setGridEnabled(!gridEnabled)
        }
        else{
            canvas.overlayImage = null;
            canvas.renderAll();
            setGridEnabled(!gridEnabled)
        }
    }

    const deleteObject = () => {
        let obj = canvas.getActiveObject();
        if (!obj) return;
        if(obj.type === 'activeSelection'){
            obj._objects.forEach(obj => {
                canvas.remove(obj)
            })
        }else{
            canvas.remove(obj)
        }
        canvas.discardActiveObject();
    }

    return (
        <div className={`toolbaar-container`}>
            <div className="canvas-tools">
                <Button variant="outline-light" onClick={undo}>
                    <span>
                        <img src={undoImg} height={25} width={25}/>
                    </span>
                </Button>
                <Button variant="outline-light" onClick={redo}>
                    <span>
                        <img src={redoImg} height={25} width={25}/>
                    </span>
                </Button>
                <Button variant="outline-light" onClick={sendForward}>
                    <span>
                        <img src={Forward} height={25} width={25}/>
                    </span>
                </Button>
                <Button variant="outline-light" onClick={sendBackward}>
                    <span>
                        <img src={backward} height={25} width={25}/>
                    </span>
                </Button>
                <Button variant="outline-light" onClick={showGrid}>
                    <span>
                        <img src={grid} height={25} width={25}/>
                    </span>
                </Button>
                <Button variant="outline-light" onClick={deleteObject}>
                    <span>
                        <img src={deleteImg} height={25} width={25}/>
                    </span>
                </Button>

            </div>
        </div>
    );
}

export default ToolBaar;
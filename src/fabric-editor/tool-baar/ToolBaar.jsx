import React from 'react';
import './index.css'
import { Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import redoImg from "../../assets/images/forward.png";
import undoImg from "../../assets/images/undo.png";
import "fabric-history";
import {useSelector} from "react-redux";
import {fabric} from "fabric";
const optionsToAdd = ['id', 'name', 'sub_type'];

const ToolBaar =()=>{
    const canvas = useSelector(state => state.canvas)

    const redo = () => {
        canvas.redo();
    }
    const undo = () => {
        canvas.undo();
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

    const duplicateObject = () => {
        let activeObject = canvas.getActiveObject()
        if (!activeObject) {
            return;
        }

        if (activeObject.type === 'activeSelection') {
            canvas.discardActiveObject();
            for (let i = 0; i < activeObject._objects.length; i++) {
                activeObject._objects[i].clone((clonedObject) => {
                    canvas.add(clonedObject.set({
                        left: activeObject._objects[i].left + 10,
                        top: activeObject._objects[i].top + 10
                    }));
                }, optionsToAdd);
            }
        } else {
            canvas.discardActiveObject();
            activeObject.clone((clonedObject) => {
                canvas.add(clonedObject.set({
                    left: activeObject.left + 10,
                    top: activeObject.top + 10
                }));
                canvas.setActiveObject(clonedObject)
            }, optionsToAdd);
        }
        canvas.renderAll()
    };

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
                <Button variant="outline-light" onClick={duplicateObject}>
                    <span>
                        Duplicate
                    </span>
                </Button>
                <Button variant="outline-light" onClick={deleteObject}>
                    <span>
                        Delete
                    </span>
                </Button>

            </div>
        </div>
    );
}

export default ToolBaar;
import React, {useEffect} from "react";
import {fabric} from 'fabric';
import './index.css'
import {initCenteringGuidelines, initAligningGuidelines} from '../../../utils/object-snapping'
import {drawObjectDimentions, getCanvas} from '../../../utils/utils'
import ToolBaar from "../../tool-baar/ToolBaar";
import 'fabric-history';
import clsx from "clsx";
import FabEditorLeft from '../left-panel/LeftPanel';
import FabEditorRight from '../right-panel/RightPanel'
import {useDispatch} from "react-redux";
import {setCanvas, setObjectsState} from "../../actions";

let canvas ,canvasVar;

const FabEditor =()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        window.addEventListener('resize', function(e) {
            adjustCanvasDimensions();
        }, true);
        canvas = getCanvas();
        window.canvas = canvas;
        dispatch(setCanvas(canvas));
        canvas.on({
            'selection:created': selectionCreated,
            'selection:updated': selectionUpdated,
            'selection:cleared': selectionCleared,
            })
        canvas.renderAll()
    },[]);

    const adjustCanvasDimensions=()=>{
        let elHeight = 0, elWidth = 0;
        document.querySelectorAll('div').forEach((el)=>{
        if (el.classList.contains('fabric-editor-pro')){
                elWidth = el.clientWidth;
                elHeight = el.clientHeight;
            }
        })
        let width = elWidth,
            height = elHeight;
        canvas.setWidth(width)
        canvas.setHeight(height)
        canvas.renderAll();
    }
    const selectionCreated = (e) => {
        console.log("event",e)
        let object = e.target
        if(!object)return
        updateObjectsStates(object)
    }
    const selectionUpdated=(e)=>{
        updateObjectsStates(e.target)
    }
    const selectionCleared=(e)=>{
        updateObjectsStates({ name: "clear" })
    }
    const updateObjectsStates = (object) => {
        let obj;
        if (object.name === "text") {
            obj = {
                image:false,
                objectActive: true,
                text: true,
                activeSelection:false
            }
        } else if (object.name === "clear") {
            obj = {
                image:false,
                objectActive: false,
                text: false,
                activeSelection:false
            }
        } else if (object.name === "image") {
            obj = {
                image:true,
                objectActive: true,
                text: false,
                activeSelection:false
            }
        }
        else {
            obj = {
                image:false,
                objectActive: true,
                text: false,
                activeSelection:false
            }
        }
        dispatch(setObjectsState(obj))
    }
    const addText = () => {
        let text = new fabric.IText('Hello There',{
            left:200,
            top:200,
            fontSize:20,
            name: 'text',
            fill:'black',
            originX:'center',
            originY:'center',
            fontFamily: 'Roboto',
        })
        canvas.add(text);
        canvas.setActiveObject(text)
        canvas.renderAll();
    }
    return (
        <div className="fabric-editor-container">
            <div className="editor-main-wrapper">
                <FabEditorLeft addText={addText}/>
                <div className="canvas-editor-wrapper">
                    <ToolBaar canvas={canvasVar}/>
                    <div className="canvas-right-wrapper">
                        <div className={clsx("canvas-main-wrapper")}>
                            <div className={`fabric-editor-pro center-content-column`}>
                                <canvas id="canvas" width={1000} height={800}/>
                            </div>
                        </div>
                        <FabEditorRight/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FabEditor;

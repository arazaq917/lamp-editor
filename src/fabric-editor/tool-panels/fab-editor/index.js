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
import {setCanvas} from "../../actions";

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
        canvas.renderAll()
    },[]);

    // const inItCanvas =()=>{
    //     let canvas = new fabric.Canvas('canvas',{
    //         width:700,
    //         height:500,
    //         backgroundColor:'white'
    //     })
    //     window.canvas = canvas;
    //     drawObjectDimentions(canvas)
    //     adjustCanvasDimensions();
    //
    //     initCenteringGuidelines(canvas);
    //     initAligningGuidelines(canvas);
    //     canvas.on({
    //         'object:added': objectAdded,
    //         'selection:created': selectionCreated,
    //         'selection:updated': selectionUpdated,
    //         'object:moving': objectMoving,
    //         'object:modified' : modifiedObject,
    //         'after:render':afterRender,
    //     })
    //     canvas.renderAll();
    // }
/// expand with color, background etc.
    const afterRender =()=>{
    }

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
    const objectAdded=(e)=>{
    }
    const selectionCreated=(e)=>{
    }
    const selectionUpdated=(e)=>{

    }
    const modifiedObject=(e)=>{

    }
    const objectMoving=(e)=>{
        let obj = e.target;
        if (!obj) return;
        if (obj.left <= 0){
            canvas.discardActiveObject();
            obj.setPositionByOrigin({x:0,y:obj.getScaledHeight()},'left','top');
            canvas.renderAll();
        }
    }
    const addText=()=>{
        let text = new fabric.IText('Hello There',{
            left:200,
            top:200,
            fontSize:20,
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

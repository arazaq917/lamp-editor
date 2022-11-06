import React, {useEffect, useState} from "react";
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
import {setCanvas, setImages, setObjectsState} from "../../actions";
import {captureShots, createBounds} from "../../../utils/bounds";
import WebFont from 'webfontloader'
let canvas ,canvasVar;
const arrayFonts = ["Acme", "Akshar"   , "Artifika","Comic Neue","Courier Prime","EB Garamond","Just Another Hand",
    "Black Han Sans" ,"Montserrat", "Playball" , "Poppins" , " Ultra" , "Smythe" , " Rock Salt","Brush Script MT" ]
const FabEditor =()=>{
    const dispatch = useDispatch()
    const [img,setImg] = useState([{name:'',url:''},{name:'',url:''},{name:'',url:''},{name:'',url:''}])
    useEffect(() => {
        window.addEventListener('resize', adjustCanvasDimensions, true);
        canvas = getCanvas();
        window.canvas = canvas;
        dispatch(setCanvas(canvas));
        canvas.on({
            'selection:created': selectionCreated,
            'selection:updated': selectionUpdated,
            'selection:cleared': selectionCleared,
            'object:added':objectAdded,
            'object:modified':objectModified,
            'history:undo':historyUndo,
            'history:redo':historyRedo,
            'history:append':historyAppend


            })
        createBounds(canvas)
        canvas.renderAll()
        loadGoogleFonts(arrayFonts)
    },[]);

    const loadGoogleFonts = (fontFamily) => {
        WebFont.load({
            google: {
                families: fontFamily
            }
        });
    }

    const updateImages = (images)=>{
        let img1 = images.find(f=>f.name === 'rect1')
        let img2 = images.find(f=>f.name === 'rect2')
        let img3 = images.find(f=>f.name === 'rect3')
        let img4 = images.find(f=>f.name === 'rect4')
        dispatch(setImages([img1,img2,img3,img4]))
    }
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = 'blue';
    fabric.Object.prototype.cornerStyle = 'circle';
    const adjustCanvasDimensions=()=>{
        console.log('window resized')
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
    const historyUndo = (e)=>{
        console.log('undo',e)
    }
    const historyRedo = (e)=>{
        console.log('redo',e)
    }
    const historyAppend = (e)=>{
        console.log('append',e)
    }

    const objectModified=(e)=>{
        if(e.target){
            captureShots(canvas,updateImages)
        }
    }
    const objectAdded = (e)=>{
        if(e.target){
            if(e.target.name && (!e.target.name.includes('Rect'))){
                canvas.sendToBack(e.target);
                canvas.renderAll();
            }
        }
    }
    const selectionCreated = (e) => {
        captureShots(canvas,updateImages)
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
            fontSize:40,
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

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
let canvas ,canvasVar,canvasDimensions, pitchContainerBox, containerDimensions;
const arrayFonts = ["Acme", "Akshar"   , "Artifika","Comic Neue","Courier Prime","EB Garamond","Just Another Hand",
    "Black Han Sans" ,"Montserrat", "Playball" , "Poppins" , " Ultra" , "Smythe" , " Rock Salt","Brush Script MT", "Times New Roman",'Roboto' ]
const FabEditor =()=>{
    const dispatch = useDispatch()
    const [img,setImg] = useState([{name:'',url:''},{name:'',url:''},{name:'',url:''},{name:'',url:''}])
    useEffect(() => {
        pitchContainerBox = document.querySelector(".canvas-main-wrapper")
        if (!pitchContainerBox) return;
        containerDimensions = {
            width: canvasContainerHeight(pitchContainerBox).width,
            height: canvasContainerHeight(pitchContainerBox).height,
        }
        window.addEventListener('resize', updateWindowDimensions, true);
        canvas = getCanvas(containerDimensions);
        window.canvas = canvas;
        dispatch(setCanvas(canvas));
        stopEvents()
        createBounds(canvas)
        canvas._historyInit();
        startEvents();
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
    const startEvents = ()=>{
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
    }
    const stopEvents = ()=>{
        canvas.__eventListeners = {}
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
    const updateWindowDimensions = () => {
        setCanvasDimensionsProps()
        updateObjectsScale(canvas)
        canvas._objects.forEach(obj => {
            updateCanvasResize(obj)
        })
        canvas.renderAll()
    };
    const setCanvasDimensionsProps = () => {
        const outerCanvasContainer = pitchContainerBox
        const windowWidth = window.innerWidth
        const ratio = canvas.getWidth() / canvas.getHeight();
        let containerWidth = canvasContainerHeight(outerCanvasContainer).width
        const scale = containerWidth / canvas.getWidth();
        const zoom = canvas.getZoom() * scale;

        canvasDimensions = {
            windowWidth: windowWidth,
            containerWidth: containerWidth,
            ratio: ratio,
            scale: scale,
            zoom: zoom,
            zoom_val: canvas.getZoom()
        }
    }
    const updateObjectsScale = (canvasEl) => {
        canvasEl.setDimensions({
            width: canvasDimensions.containerWidth,
            height: canvasDimensions.containerWidth / canvasDimensions.ratio
        });
        canvasEl.setViewportTransform([canvasDimensions.zoom, 0, 0, canvasDimensions.zoom, 0, 0]);
    }
    const updateCanvasResize = (obj) => {
        switch (obj.name) {
            case "image":
                setObjectPadding(obj, 5, 2)
                break;
            case "text":
                setObjectPadding(obj, 5, 2)
                break;
        }
    }
    const setObjectPadding = (obj, val, val2) => {
        if (window.innerWidth < 1100) {
            obj.set("padding", val)
        } else {
            obj.set("padding", val2)
        }
        canvas.renderAll()
    }
    const canvasContainerHeight = (el) => {
        let windowHeight = '';
        windowHeight = window.innerHeight - 50;

        let width = el.clientWidth
        let height
        if (window.innerWidth < 992) {
            let ratio = 1.40
            height = window.innerHeight;
            width = height * ratio
        }
        else {
            let ratio = 1.40
            height = window.innerHeight - 250;
            width = height * ratio
        }

        return {
            width: width,
            height: height,
        }
    }
    const historyUndo = (e)=>{
    }
    const historyRedo = (e)=>{
    }
    const historyAppend = (e)=>{
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

    return (
        <div className="fabric-editor-container">
            <div className="editor-main-wrapper">
                <FabEditorLeft />
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

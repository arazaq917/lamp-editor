import React, {useEffect, useRef, useState} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import CommonProps from "./commonProps";
import ShapeProps from "./ShapeProps";
import {fabric} from "fabric";

const RightPanel = () => {
    const objectState = useSelector(state => state.canvasObjectStates)
    const canvas = useSelector(state => state.canvas)
    const [canvasBackgroundColor, setCanvasBackgroundColor] = useState('#ffffff');
    const [canvasBackgroundImage, setBackgroundImage] = useState(false);
    const inputRef = useRef()
    useEffect(() => {
        console.log("objectState", objectState)
    }, [objectState])
    const changeCanvasBackgroundColor = (event) => {
        setCanvasBackgroundColor(event.target.value);
        canvas.backgroundColor = event.target.value;
        canvas.renderAll();
    };
    const setCanvasBackgroundImage = (event) => {
        if(canvasBackgroundImage){
            canvas.setBackgroundImage(null)
            canvas.renderAll()
            setBackgroundImage(false)
        }else{
            inputRef.current.click()
        }
    };

    const uploadFileHandler = (e) => {
        let uploadedImageData = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadedImageData);
        reader.onload = (e)=> {
            let imgObj = new Image();
            imgObj.src = e.target.result;
            imgObj.onload = function () {
                var image = new fabric.Image(imgObj,{
                    name: 'image',
                    scaleX: (canvas.width / canvas.getZoom()) / imgObj.width,
                    scaleY: (canvas.height / canvas.getZoom()) / imgObj.height,
                });
                canvas.centerObject(image);
                canvas.setBackgroundImage(image)
                canvas.renderAll();
                setBackgroundImage(true)
            }
        };
    }
    return (
        <div className="editor-right-panel">
            {!objectState.objectActive &&
                <>
                    <div className="d-flex flex-column col-12">
                        <span className="">Background</span>
                        <div className="gnr-input-color-wrapper justify-content-between d-flex align-items-center">
                            <input
                                className="color-input"
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#ffffff"
                                value={canvasBackgroundColor}
                                onChange={changeCanvasBackgroundColor}
                            />
                            <span role='button' className='color-code' onClick={setCanvasBackgroundImage}>
                                {
                                    canvasBackgroundImage ? 'Remove Image' : 'Use Image'
                                }
                            </span>
                            <input className="d_none" type="file" onChange={uploadFileHandler} name="files" onClick={(e)=>{e.target.value = null}}  ref={inputRef} />
                        </div>
                    </div>
                    <hr className="solid-divider" />
                </>
            }
            {objectState.objectActive &&
                <>
                    <CommonProps/>
                    <hr className="solid-divider" />
                </>
            }
            {objectState.shape &&
                <>
                    <ShapeProps/>
                    <hr className="solid-divider" />
                </>
            }
            {
                objectState.text &&
                    <TextProperties/>
            }
            {
                objectState.image &&
                    <ImageProperties/>
            }
        </div>
    );
}

export default RightPanel;
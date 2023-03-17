import React, {useEffect, useState} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import CommonProps from "./commonProps";
import Button from "react-bootstrap/Button";
import ShapeProps from "./ShapeProps";

const RightPanel = () => {
    const objectState = useSelector(state => state.canvasObjectStates)
    const [canvasBackgroundColor, setCanvasBackgroundColor] = useState('#ffffff');
    useEffect(() => {
        console.log("objectState", objectState)
    }, [objectState])
    const changeCanvasBackgroundColor = (event) => {
        setCanvasBackgroundColor(event.target.value);
        canvas.backgroundColor = event.target.value;
        canvas.renderAll();
    };
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
                            <span className='color-code'>
                                Use Image
                            </span>
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
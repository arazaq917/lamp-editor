import React, {useEffect} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import LampPreview from "./LampPreview";

const RightPanel =()=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    const images = useSelector(state => state.images)
    useEffect(()=>{
        console.log("objectState",objectState)
        console.log('images',images)
    },[objectState,images])
    return (
        <div className="editor-right-panel">
            {
                objectState.text &&
                    <TextProperties/>
            }
            {
                objectState.image &&
                    <ImageProperties/>
            }
            <div className="lamp_preview">
                <LampPreview images={images}/>
            </div>
        </div>
    );
}

export default RightPanel;
import React, {useEffect} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import LampPreview from "./LampPreview";
import LampPreviewLeft from "./LampPreviewLeft";
import LampPreviewRight from "./LampPreviewRight";
import LampPreviewBack from "./LampPreviewBack"

const RightPanel =({img})=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    const images = useSelector(state => state.images)
    useEffect(()=>{
        console.log("objectState",objectState)
        console.log('RightPanel',images)
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
            <div>
                <LampPreview img={img} />
                <LampPreviewLeft img={img}/>
                <LampPreviewRight img={img}/>
                <LampPreviewBack img={img}/>

            </div>
        </div>
    );
}

export default RightPanel;
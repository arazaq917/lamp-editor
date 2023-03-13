import React, {useEffect} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
const RightPanel =({img})=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    const images = useSelector(state => state.images)
    const previewStyle = useSelector(state => state.previewSwitch)
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
        </div>
    );
}

export default RightPanel;
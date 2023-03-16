import React, {useEffect} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import CommonProps from "./commonProps";

const RightPanel = () => {
    const objectState = useSelector(state => state.canvasObjectStates)
    useEffect(() => {
        console.log("objectState", objectState)
    }, [objectState])

    return (
        <div className="editor-right-panel">
            {objectState.objectActive &&
                <CommonProps/>
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
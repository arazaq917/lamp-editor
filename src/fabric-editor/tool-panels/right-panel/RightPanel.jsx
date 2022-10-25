import React, {useEffect} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";

const RightPanel =()=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    useEffect(()=>{
        console.log("objectState",objectState)
    },[objectState])
    return (
        <aside className="editor-right-panel">
            {
                objectState.text &&
                    <TextProperties/>
            }
            {
                objectState.image &&
                    <div>This is Image Properties</div>
            }
        </aside>
    );
}

export default RightPanel;
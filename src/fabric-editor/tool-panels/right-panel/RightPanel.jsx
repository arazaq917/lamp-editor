import React, {useEffect} from 'react';
import './index.css'
import {useSelector} from "react-redux";

const RightPanel =()=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    useEffect(()=>{
        console.log("objectState",objectState)
    },[])
    return (
        <aside className="editor-right-panel">
            Right panel
        </aside>
    );
}

export default RightPanel;
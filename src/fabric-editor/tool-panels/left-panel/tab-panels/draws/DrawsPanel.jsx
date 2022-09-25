import React from 'react';
import './index.css'
import BackgroundPanel from "./BackgroundPanel";
import TextPanel from "./TextPanel";

const DrawsPanel =()=>{
    return (
        <div className={`editor-panel-container draw-panel`}>
            <BackgroundPanel/>
            <TextPanel/>
        </div>
    );
}

export default DrawsPanel;
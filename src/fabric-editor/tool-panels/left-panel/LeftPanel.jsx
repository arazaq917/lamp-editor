import React from 'react';
import './index.css'
import Draws from "./tab-panels/draws/DrawsPanel";
import LeftTabMenu from "./left-tab-menu/LeftTabMenu";

const LeftPanel = ({addText,addShape,addPath})=>{
    return (
        <div className="editor-left-side">
            <LeftTabMenu addText={addText} addShape={addShape} addPath={addPath}/>
            <Draws/>
        </div>
    );
}

export default LeftPanel;
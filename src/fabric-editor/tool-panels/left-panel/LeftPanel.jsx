import React from 'react';
import './index.css'
import Draws from "./tab-panels/draws/DrawsPanel";
import LeftTabMenu from "./left-tab-menu/LeftTabMenu";

const LeftPanel = ({addText,addShape,addPath})=>{
    return (
        <div className="editor-left-side">
            <LeftTabMenu addShape={addShape} addPath={addPath}/>
            <Draws addText={addText}/>
        </div>
    );
}

export default LeftPanel;
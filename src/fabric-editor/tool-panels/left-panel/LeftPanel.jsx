import React from 'react';
import './index.css'
import Draws from "./tab-panels/DrawsPanel";
import LeftTabMenu from "./left-tab-menu/LeftTabMenu";

const LeftPanel = ()=>{
    return (
        <div className="editor-left-side">
            <LeftTabMenu />
            <Draws />
        </div>
    );
}

export default LeftPanel;
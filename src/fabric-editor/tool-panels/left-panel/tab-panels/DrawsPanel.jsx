import React, {useEffect} from 'react';
import './index.css'
import BackgroundPanel from "./BackgroundPanel";
import TextPanel from "./TextPanel";
import {useSelector} from "react-redux";
import UploadFilePanel from "./uploadFile";

const DrawsPanel =({addText})=>{
    const activeKey = useSelector(state => state.activePanel);

    useEffect(()=>{
        console.log("activeKey",activeKey)
    },[activeKey])

    return (
        <div className={`editor-panel-container draw-panel`}>
            {activeKey === '1' &&
                <BackgroundPanel/>
            }
            {activeKey === '2' &&
                <TextPanel addText={addText}/>
            }
            {activeKey === '3' &&
                <UploadFilePanel/>
            }
        </div>
    );
}

export default DrawsPanel;
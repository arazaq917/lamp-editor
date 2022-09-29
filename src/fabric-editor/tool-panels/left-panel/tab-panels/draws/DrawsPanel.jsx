import React, {useEffect} from 'react';
import './index.css'
import BackgroundPanel from "./BackgroundPanel";
import TextPanel from "./TextPanel";
import {useSelector} from "react-redux";

const DrawsPanel =()=>{
    const activeKey = useSelector(state => state.activePanel);

    useEffect(()=>{
        console.log("activeKey",activeKey)
    },[activeKey])

    return (
        <div className={`editor-panel-container draw-panel`}>
            {activeKey === '1' &&
                <TextPanel/>
            }
            {activeKey === '2' &&
                <BackgroundPanel/>
            }
        </div>
    );
}

export default DrawsPanel;
import React, {useEffect} from 'react';
import './index.css'
import BackgroundPanel from "./BackgroundPanel";
import TextPanel from "./TextPanel";
import {useSelector} from "react-redux";
import UploadFilePanel from "./uploadFile";
import ProductDetail from "./ProductDetail";

const DrawsPanel =()=>{
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
                <TextPanel />
            }
            {activeKey === '3' &&
                <UploadFilePanel/>
            }
            {activeKey === '4' &&
                <ProductDetail />
            }
        </div>
    );
}

export default DrawsPanel;
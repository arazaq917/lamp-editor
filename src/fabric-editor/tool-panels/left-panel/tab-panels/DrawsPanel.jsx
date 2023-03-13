import React, {useEffect} from 'react';
import './index.css'
import BackgroundPanel from "./BackgroundPanel";
import {useSelector} from "react-redux";
import UploadFilePanel from "./uploadFile";
import ProductDetail from "./ProductDetail";
import BackgroundImagePanel from "./BackgroundImagePanel";

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
                <BackgroundImagePanel />
            }
            {activeKey === '4' &&
                <UploadFilePanel/>
            }
            {activeKey === '5' &&
                <ProductDetail />
            }
        </div>
    );
}

export default DrawsPanel;
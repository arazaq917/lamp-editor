import React, {useEffect, useState} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import LampPreview from "./LampPreview";
import LampPreviewLeft from "./LampPreviewLeft";
import LampPreviewRight from "./LampPreviewRight";
import LampPreviewBack from "./LampPreviewBack"
import Carousel from 'react-bootstrap/Carousel';
const RightPanel =({img})=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    const images = useSelector(state => state.images)
    useEffect(()=>{
        console.log("objectState",objectState)
        console.log('RightPanel',images)
    },[objectState,images])
    return (
        <div className="editor-right-panel">
            {
                objectState.text &&
                    <TextProperties/>
            }
            {
                objectState.image &&
                    <ImageProperties/>
            }
            <div className="svg_carousel">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <LampPreview img={img} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <LampPreviewLeft img={img}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LampPreviewBack img={img}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LampPreviewRight img={img}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default RightPanel;
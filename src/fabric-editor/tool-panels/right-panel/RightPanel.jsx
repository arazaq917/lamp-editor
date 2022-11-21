import React, {useEffect, useState} from 'react';
import './index.css'
import {useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import TextProperties from "./TextProperties";
import ImageProperties from "./ImageProperties";
import LampPreview from "./lower-lamps/LampPreview";
import LampPreviewLeft from "./lower-lamps/LampPreviewLeft";
import LampPreviewRight from "./lower-lamps/LampPreviewRight";
import LampPreviewBack from "./lower-lamps/LampPreviewBack"
import Carousel from 'react-bootstrap/Carousel';
import TallLampPreview from "./tall-stand-lamps/TallLampPreview";
import TallLampPreviewLeft from "./tall-stand-lamps/TallLampPreviewLeft";
import TallLampPreviewRight from "./tall-stand-lamps/TallLampPreviewRight";
import TallLampPreviewBack from "./tall-stand-lamps/TallLampPreviewBack";
const RightPanel =({img})=>{
    const objectState = useSelector(state => state.canvasObjectStates)
    const images = useSelector(state => state.images)
    const previewStyle = useSelector(state => state.previewSwitch)
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
            {previewStyle === 'Tripod' ?
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
                :
                <div className="svg_carousel">
                    <Carousel variant="dark" interval={null}>
                        <Carousel.Item>
                            <TallLampPreview img={img}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <TallLampPreviewLeft img={img}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <TallLampPreviewRight img={img}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <TallLampPreviewBack img={img}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            }
        </div>
    );
}

export default RightPanel;
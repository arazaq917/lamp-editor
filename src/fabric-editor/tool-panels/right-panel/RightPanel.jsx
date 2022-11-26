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
import SilverLampPreview from "./silverLampStands/SilverLampPreview";
import BlackLampPreview from "./BlackLampsPreview/BlackLampsPreview";
import GlassLampPreview from "./GlassLampPreview/GlassLampPreview";
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
            {previewStyle === 'Tripod' &&
            <div className="svg_carousel">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <LampPreview img={img}/>
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
            }
            {previewStyle === 'White' && <div className="svg_carousel">
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
            {previewStyle === 'Silver' && <div className="svg_carousel">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <SilverLampPreview  index={0}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <SilverLampPreview  index={1}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <SilverLampPreview i index={2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <SilverLampPreview  index={3}/>
                    </Carousel.Item>
                </Carousel>
            </div>
            }
            {previewStyle === 'Black' && <div className="svg_carousel">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <BlackLampPreview  index={0}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <BlackLampPreview  index={1}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <BlackLampPreview  index={2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <BlackLampPreview  index={3}/>
                    </Carousel.Item>
                </Carousel>
            </div>
            }
            {previewStyle === 'Glass' && <div className="svg_carousel">
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <GlassLampPreview  index={0}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <GlassLampPreview  index={1}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <GlassLampPreview  index={2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <GlassLampPreview  index={3}/>
                    </Carousel.Item>
                </Carousel>
            </div>
            }
        </div>
    );
}

export default RightPanel;
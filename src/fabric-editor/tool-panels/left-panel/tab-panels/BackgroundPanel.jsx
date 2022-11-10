import React, {useEffect, useState} from "react";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab';
import {setImages} from "../../../actions";
import {captureShots} from "../../../../utils/bounds";

let COLORS = ["#fff", "#003E60", "#F7CF00", "#C40E12", "#23803C"]

const BackgroundPanel = () =>{
    const dispatch = useDispatch()
    const canvas = useSelector(state => state.canvas)
    const updateImages = (images)=>{
        let img1 = images.find(f=>f.name === 'rect1')
        let img2 = images.find(f=>f.name === 'rect2')
        let img3 = images.find(f=>f.name === 'rect3')
        let img4 = images.find(f=>f.name === 'rect4')
        dispatch(setImages([img1,img2,img3,img4]))
    }
    const canvasBackgroundImage = (url) => {
        if(canvas.backgroundColor !== 'White' || canvas.backgroundColor !== '#FFFFFF')
            canvas.backgroundColor = 'White'
        import(`../../../../assets/images/SportsImages/largeImages/${url}.png`).then(srcSprite => {
            let img = new Image();
            img.onload = function () {
                canvas.setBackgroundImage(img.currentSrc, () => {
                    canvas.requestRenderAll();
                    captureShots(canvas,updateImages)
                }, {
                    originX: 'left',
                    originY: 'top',
                    scaleX: .19,
                    scaleY: .2,
                    crossOrigin: 'anonymous'
                });
            };
            img.src = srcSprite.default;
        });
    }
    const canvasBackgroundColor = (color) =>{
        if(canvas.backgroundImage) canvas.backgroundImage = '';
        canvas.setBackgroundColor(color)
        canvas.renderAll()
        captureShots(canvas,updateImages)
    }
    const newColor = (e) =>{
        canvas.setBackgroundColor(e.target.value)
        canvas.renderAll()
        captureShots(canvas,updateImages)
    }
    let canvasBackgroundImages = [
        {
            imgUrl: "ballet",
            class:"background_football"
        },
        {
            imgUrl: "baseball",
            class:"background_baseball"
        },
        {
            imgUrl: "basketball",
            class:"background_basketball"
        },
        {
            imgUrl: "cycling",
            class:"background_cycling"
        },
        {
            imgUrl: "football",
            class:"background_football"
        },
        {
            imgUrl: "golf",
            class:"background_golf"
        },
        {
            imgUrl: "gymnastics",
            class:"background_gymnastics"
        },
        {
            imgUrl: "skiing",
            class:"background_skiing"
        },
        {
            imgUrl: "horseback",
            class:"background_horseback"
        },
        {
            imgUrl: "skateboarding",
            class:"background_skateboarding"
        },
        {
            imgUrl: "skating",
            class:"background_skating"
        },
        {
            imgUrl: "snowboarding",
            class:"background_snowboarding"
        },
        {
            imgUrl: "golf",
            class:"background_golf"
        },
        {
            imgUrl: "soccer",
            class:"background_soccer"
        },
        {
            imgUrl: "surfing",
            class:"background_surfing"
        },
        {
            imgUrl: "tennis",
            class:"background_tennis"
        },
        {
            imgUrl: "volleyball",
            class:"background_volleyball"
        }
    ];
    let canvasBackgroundImages1 = [
        {
            imgUrl: "Avocado",
            class:"background_Avocado"
        },
        {
            imgUrl: "baby",
            class:"background_baby"
        },
        {
            imgUrl: "Cactae",
            class:"background_Cactae"
        },
        {
            imgUrl: "cats",
            class:"background_cats"
        },
        {
            imgUrl: "cellos",
            class:"background_cellos"
        },
        {
            imgUrl: "Cherries",
            class:"background_Cherries"
        },
        {
            imgUrl: "Chocolate",
            class:"background_Chocolate"
        },
        {
            imgUrl: "dad",
            class:"background_dad"
        },
        {
            imgUrl: "dogs",
            class:"background_dogs"
        },
        {
            imgUrl: "flying",
            class:"background_flying"
        },
        {
            imgUrl: "itsaboy",
            class:"background_itsaboy"
        },
        {
            imgUrl: "itsagirl",
            class:"background_itsagirl"
        },
        {
            imgUrl: "Lightning",
            class:"background_Lightning"
        },
        {
            imgUrl: "Musical",
            class:"background_Musical"
        },
        {
            imgUrl: "robots",
            class:"background_robots"
        },
        {
            imgUrl: "skulbunny",
            class:"background_skulbunny"
        },
        {
            imgUrl: "tvs",
            class:"background_tvs"
        },
    ];
    return(
        <div className="background_panel_wrapper">
            <span className="formatted_title">Background Colors</span>
            <div className="colors_container">
                <input id="color" type="color" onChange={newColor} className={'colors_color'}/>
                {COLORS.map(color => <div key={color}
                      data-color={color}
                      onClick={() => canvasBackgroundColor(color)}
                      className="colors_color black__border_light"
                      style={{backgroundColor: color}}/>)}
            </div>
            <span className="formatted_title">Background Images</span>
            <div className="background_images_wrapper">
                <Tabs
                    defaultActiveKey="Sports"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="Sports" title="Sports">
                        {canvasBackgroundImages.map(m=>
                            <div onClick={()=>{canvasBackgroundImage(m.imgUrl)}} className={`lamp_background ${m.class}`}/>
                        )}
                    </Tab>
                    <Tab eventKey="Various" title="Various">
                        {canvasBackgroundImages1.map(m=>
                            <div onClick={()=>{canvasBackgroundImage(m.imgUrl)}} className={`lamp_background ${m.class}`}/>
                        )}
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default BackgroundPanel
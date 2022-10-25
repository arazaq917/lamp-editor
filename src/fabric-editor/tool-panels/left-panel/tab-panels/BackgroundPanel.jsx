import React, {useEffect, useState} from "react";
import './index.css'
import fabric from 'fabric'
import {useSelector} from "react-redux";

let COLORS = ["#003E60", "#35ACDD", "#F7CF00", "#C40E12", "#fff", "#23803C"]

const BackgroundPanel = () =>{
    const canvas = useSelector(state => state.canvas)
    const [bgImages, setBgImages] = useState([])
    // useEffect(()=>{
    //     setBgImages(CanvasBackgroundImages)
    //     console.log(CanvasBackgroundImages)
    // },[])

    const canvasBackgroundImage = (url) => {
        if(canvas.backgroundColor !== 'White' || canvas.backgroundColor !== '#FFFFFF')
            canvas.backgroundColor = 'White'
        import(`../../../../assets/images/SportsImages/${url}.png`).then(srcSprite => {
            let img = new Image();
            img.onload = function () {
                canvas.setBackgroundImage(img.currentSrc, () => {
                    canvas.requestRenderAll();
                }, {
                    scaleX: (canvas.width / canvas.getZoom()) / img.width,
                    scaleY: (canvas.height / canvas.getZoom()) / img.height,
                    crossOrigin: 'anonymous'
                });
            };
            img.src = srcSprite.default;
        });
    }
    const canvasBackgroundColor = (color) =>{
        if(canvas.backgroundImage) canvas.backgroundImage = '';
        console.log('color',color)
        canvas.setBackgroundColor(color)
        canvas.renderAll()
    }
    const newColor = (e) =>{
        console.log("target",e.target.value)
        canvas.setBackgroundColor(e.target.value)
        canvas.renderAll()
    }
    const onSelectBackgroundToGo = (background) => {
        console.log("background",background)
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
                {canvasBackgroundImages.map(m=>
                    <div onClick={()=>{canvasBackgroundImage(m.imgUrl)}} className={`lamp_background ${m.class}`}/>
                )}
            </div>
        </div>
    )
}

export default BackgroundPanel
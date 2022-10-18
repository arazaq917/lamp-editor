import React, {useEffect, useState} from "react";
import './index.css'
import {useSelector} from "react-redux";
import EditorButton from "../../../../customComponents/fab-button/EditorButton";
import leftAlign from "../../../../../assets/images/bg.png";
import imageU from "../../../../../assets/images/PNG Sports/baseball.png"

let COLORS = ["#003E60", "#35ACDD", "#F7CF00", "#C40E12", "#fff", "#23803C"]

const BackgroundPanel = () =>{
    const canvas = useSelector(state => state.canvas)
    const [bgImages, setBgImages] = useState([])
    useEffect(()=>{
        setBgImages(CanvasBackgroundImages)
        console.log(CanvasBackgroundImages)
    },[])

    const canvasBackgroundImage = () =>{
        canvas.setBackgroundColor({source: `${imageU}`}, canvas.renderAll.bind(canvas));
    }
    const canvasBackgroundColor = (color) =>{
        console.log('color',color)
        canvas.setBackgroundColor(color)
        canvas.renderAll()
    }
    const newColor = (e) =>{
        console.log("target",e.target.value)
        canvas.setBackgroundColor(e.target.value)
        canvas.renderAll()
    }
    return(
        <div className="background_panel_wrapper">
            <span>Background Colors</span>
            <div className="colors_container">
                <input id="color" type="color" onChange={newColor} className={'colors_color'}/>
                {COLORS.map(color => <div key={color}
                      data-color={color}
                      onClick={() => canvasBackgroundColor(color)}
                      className="colors_color black__border_light"
                      style={{backgroundColor: color}}/>)}
            </div>
            <EditorButton onClicked={canvasBackgroundImage} buttText={'Background Image'} customClass={'backgroundImageBtn'}/>
            {bgImages.map((item, ind) => (
                <div key={ind}>
                    <img src={imageU} height={100} width={100}/>
                </div>
            ))}
        </div>
    )
}
const CanvasBackgroundImages = [
    {
        imgUrl: "../../../../../assets/images/PNG Sports/ballet.png",
    },
    {
        imgUrl: "../../../../../assets/images/PNG Sports/baseball.png",
    },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/basketball.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/cycling.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/football.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/golf.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/gymnastics.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/horseback riding.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/ice skating.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/martial art.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/skateboarding.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/skiing.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/snowboarding.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/soccer.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/surfing.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/tennis.png",
    // },
    // {
    //     imgUrl: "../../../../../assets/images/PNG Sports/volleyball.png",
    // },
];
export default BackgroundPanel
import React, {useEffect, useState} from "react";
import './index.css'
import {useSelector} from "react-redux";
import EditorButton from "../../../../customComponents/fab-button/EditorButton";
import leftAlign from "../../../../../assets/images/bg.png";
import imageU from "../../../../../assets/images/SportsImages/baseball.png"

let COLORS = ["#003E60", "#35ACDD", "#F7CF00", "#C40E12", "#fff", "#23803C"]

const BackgroundPanel = () =>{
    const canvas = useSelector(state => state.canvas)
    const [bgImages, setBgImages] = useState([])
    // useEffect(()=>{
    //     setBgImages(CanvasBackgroundImages)
    //     console.log(CanvasBackgroundImages)
    // },[])

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
    const onSelectBackgroundToGo = (background) => {
        console.log("background",background)
    }
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
                <div onClick={() => onSelectBackgroundToGo('football')} className={`lamp_background background_football`}/>
                <div onClick={() => onSelectBackgroundToGo('baseball')} className={`lamp_background background_baseball`}/>
                <div onClick={() => onSelectBackgroundToGo('basketball')} className={`lamp_background background_basketball`}/>
                <div className={`lamp_background background_cycling`}/>
                <div className={`lamp_background background_golf`} />
                <div className={`lamp_background background_gymnastics`}/>
                <div className={`lamp_background background_skiing`} />
                <div className={`lamp_background background_horseback`}/>
                <div className={`lamp_background background_skateboarding`}/>
                <div className={`lamp_background background_skating`}/>
                <div className={`lamp_background background_snowboarding`}/>
                <div className={`lamp_background background_soccer`}/>
                <div className={`lamp_background background_surfing`}/>
                <div className={`lamp_background background_tennis`}/>
                <div className={`lamp_background background_volleyball`}/>
            </div>
        </div>
    )
}
// const CanvasBackgroundImages = [
//     {
//         imgUrl: "/assets/images/SportsImages/ballet.png",
//     },
//     {
//         imgUrl: "/assets/images/SportsImages/baseball.png",
//     },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/basketball.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/cycling.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/football.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/golf.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/gymnastics.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/horseback.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/skating.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/martial art.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/skateboarding.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/skiing.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/snowboarding.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/soccer.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/surfing.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/tennis.png",
//     // },
//     // {
//     //     imgUrl: "../../../../../assets/images/SportsImages/volleyball.png",
//     // },
// ];
export default BackgroundPanel
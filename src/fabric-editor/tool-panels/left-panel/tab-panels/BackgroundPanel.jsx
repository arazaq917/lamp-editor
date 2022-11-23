import React, {useRef} from "react";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {setImages} from "../../../actions";
import {captureShots} from "../../../../utils/bounds";
import removeBg from '../../../../assets/images/transparent.jpg'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import moreBtn from "../../../../assets/images/ButtonsImages/more.png";
import {canvasBackgroundImage} from "../../../../utils/utils";

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
    const canvasBackgroundColor = (color) =>{
        canvas.setBackgroundColor(color)
        canvas.renderAll()
        captureShots(canvas,updateImages)
    }
    const newColor = (e) =>{
        canvas.setBackgroundColor(e.target.value)
        canvas.renderAll()
        captureShots(canvas,updateImages)
    }
    const colorPicker = useRef();
    const removeBackground = () =>{
        canvas.backgroundColor = ''
        canvas.renderAll()
        captureShots(canvas,updateImages)
    }
    const handleColorChange = ()=>{
        colorPicker.current.click();
    }
    let SolidImages = [
        {
            imgUrl: "Winter Print",
            class:"background_Winter"
        },
        {
            imgUrl: "Desert Print",
            class:"background_Desert"
        },
        {
            imgUrl: "Fall Print",
            class:"background_Fall"
        },
        {
            imgUrl: "Summer Print",
            class:"background_Summer"
        },
        {
            imgUrl: "Spring Print",
            class:"background_Spring"
        },
    ];
    const backgroundImage= (url) => {
        canvasBackgroundImage(url, 'jpg', canvas, captureShots, updateImages)
    }
    return(
        <div className="background_panel_wrapper">
            <span className="formatted_title">1. Choose Background Color</span>
            <div className="colors_container color_padding">
                <div className="colors_color black__border_light" onClick={()=>handleColorChange()}>
                    <img src={moreBtn} style={{ width: 40, height: 40}}/>
                </div>
                <input style={{display:"none"}} ref={colorPicker} id="color" type="color" onChange={newColor} className={'colors_color'}/>                {COLORS.map(color => <div key={color}
                      data-color={color}
                      onClick={() => canvasBackgroundColor(color)}
                      className="colors_color black__border_light"
                      style={{backgroundColor: color}}/>)}
            </div>
            <div className='removeBg_div'>
                <span className="formatted_title">Remove Background</span>
                <span className="d-inline-block">
                    <img className={'removeBackground'} onClick={()=>{backgroundImage('transparent')}} src={removeBg} height={80} width={80}/>
                </span>
            </div>
            <span className="formatted_title">2. Choose a Background Theme</span>
            <div className="background_images_wrapper background_scroll">
                {SolidImages.map(m=>
                    <div onClick={()=>{backgroundImage(m.imgUrl)}} className={`lamp_background ${m.class}`}/>
                )}
            </div>
        </div>
    )
}

export default BackgroundPanel
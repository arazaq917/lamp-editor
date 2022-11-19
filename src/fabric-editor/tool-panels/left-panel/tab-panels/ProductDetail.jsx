import React, {useRef, useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {captureShots} from "../../../../utils/bounds";
import {setPreviewState, setTrimColor} from "../../../actions";
import img1 from "../../../../assets/images/Tripod.jpg";
import img2 from "../../../../assets/images/White Base.jpg";
import moreBtn from "../../../../assets/images/ButtonsImages/more.png";

let COLORS = ["#1a1a1a", "#c1c0be", "#cabeae", "#f6f6f6", "#fad3e6","#fad3e6","#f98831","#a1cee2","#9fcc93","#f3e06f","#dd4f53","#255487","#8d1725"]

const ProductDetail =()=>{
    const previewStyle = useSelector(state => state.previewSwitch)

    const dispatch = useDispatch()
    const colorPicker = useRef();

    const lampTrimColor = (color) =>{
        dispatch(setTrimColor(color))
    }
    const handleColorChange = ()=>{
        colorPicker.current.click();
    }

    const newColor = (e) =>{
        console.log('color changed')
        dispatch(setTrimColor(e.target.value))
    }
    const toggleDesign = (type)=>{
        dispatch(setPreviewState(type))
    }
    return (
        <div className={`product_panel_wrapper`}>
            <div>
                <span className="formatted_title">Trim Colors</span>
                <div className="colors_container">
                    <div className="colors_color black__border_light" onClick={()=>handleColorChange()}>
                        <img src={moreBtn} style={{ width: 40, height: 40}}/>
                    </div>
                    <input style={{display:"none"}} ref={colorPicker} id="color" type="color" onChange={newColor} className={'colors_color'}/>
                    {COLORS.map(color => <div key={color}
                          data-color={color}
                          onClick={() => lampTrimColor(color)}
                          className="colors_color black__border_light"
                          style={{backgroundColor: color}}/>)}
                </div>
            </div>
            <div className="details_row">
                <span className="formatted_title">Select Lamp</span>
                <div className="container">
                    <div className="row">
                        <div className={`${previewStyle === 'small' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('small')}>
                            <img style={{objectFit:'contain'}} src={img1} height={110} width={110} alt='image'/>
                        </div>
                        <div className={`${previewStyle === 'large' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('large')}>
                            <img style={{objectFit:'contain'}} src={img2} height={110} width={110} alt='image'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'product_detail_wrapper'}>
                {previewStyle === 'small' ?
                    <div>
                        <h2>Lorem Small Ipsum</h2>
                        <p>
                            Replace color-adjust to print-color-adjust.
                            The color-adjust shorthand is currently deprecated.
                        </p>
                    </div>
                    :
                    <div>
                        <h2>Lorem Large Ipsum</h2>
                        <p>
                            Replace color-adjust to print-color-adjust.
                            The color-adjust shorthand is currently deprecated.
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProductDetail;
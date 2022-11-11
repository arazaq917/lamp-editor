import React, {useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {captureShots} from "../../../../utils/bounds";
import {setPreviewState, setTrimColor} from "../../../actions";
import img1 from "../../../../assets/images/lamp v2 2 1.png";
import img2 from "../../../../assets/images/lamp 7 2.png";

let COLORS = ["#fff", "#003E60", "#F7CF00", "#C40E12", "#23803C"]

const ProductDetail =()=>{
    const previewStyle = useSelector(state => state.previewSwitch)

    const dispatch = useDispatch()

    const lampTrimColor = (color) =>{
        dispatch(setTrimColor(color))
    }

    const newColor = (e) =>{
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
                    <input id="color" type="color" onChange={newColor} className={'colors_color'}/>
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
import React, {useRef} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {captureShots} from "../../../../utils/bounds";
import {setPreviewState, setTrimColor} from "../../../actions";
import Tripod from "../../../../assets/images/Tripod.png";
import White from "../../../../assets/images/White_Base.png";
import Glass from "../../../../assets/images/Glass_Base.png";
import Black from "../../../../assets/images/Black_Base.png";
import Silver from "../../../../assets/images/Silver Base.png";
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
                <span className="formatted_title">6. Choose Color of Top and Bottom Trim</span>
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
            <div className='selectedBase_content'>
                <div className="details_row">
                    <span className="formatted_title">7. Choose Lamp Base (or Shade Only)</span>
                    <div className="container">
                        <div className="row">
                            <div className={`${previewStyle === 'Tripod' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Tripod')}>
                                <img style={{objectFit:'contain'}} src={Tripod} height={110} width={110} alt='image'/>
                            </div>
                            <div className={`${previewStyle === 'White' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('White')}>
                                <img style={{objectFit:'contain'}} src={White} height={110} width={110} alt='image'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${previewStyle === 'Glass' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Glass')}>
                                <img style={{objectFit:'contain'}} src={Glass} height={110} width={110} alt='image'/>
                            </div>
                            <div className={`${previewStyle === 'Black' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Black')}>
                                <img style={{objectFit:'contain'}} src={Black} height={110} width={110} alt='image'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${previewStyle === 'Silver' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Silver')}>
                                <img style={{objectFit:'contain'}} src={Silver} height={110} width={110} alt='image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
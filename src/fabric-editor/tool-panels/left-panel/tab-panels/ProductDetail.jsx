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
import onlyShadow from "../../../../assets/images/shadow.png";

import moreBtn from "../../../../assets/images/ButtonsImages/more.png";

let COLORS = ["#141311", "#cccbc9", "#d6cfbf", "#ffffff", "#b4d7eb","#e25452","#add8a0","#ffe67f","#ff9b2c","#fed4e8","#0e3964","#26442c"]

const ProductDetail =()=>{
    const previewStyle = useSelector(state => state.previewSwitch)

    const dispatch = useDispatch()

    const lampTrimColor = (color) =>{
        dispatch(setTrimColor(color))
    }
    const toggleDesign = (type)=>{
        dispatch(setPreviewState(type))
    }
    return (
        <div className={`product_panel_wrapper`}>
            <div>
                <span className="formatted_title">6. Choose Color of Top and Bottom Trim</span>
                <div className="colors_container">
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
                                <span>Tripod Base</span>
                            </div>
                            <div className={`${previewStyle === 'White' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('White')}>
                                <img style={{objectFit:'contain'}} src={White} height={110} width={110} alt='image'/>
                                <span>White Base</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${previewStyle === 'Glass' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Glass')}>
                                <img style={{objectFit:'contain'}} src={Glass} height={110} width={110} alt='image'/>
                                <span>Glass Base</span>
                            </div>
                            <div className={`${previewStyle === 'Black' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Black')}>
                                <img style={{objectFit:'contain'}} src={Black} height={110} width={110} alt='image'/>
                                <span>Black Base</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${previewStyle === 'Silver' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('Silver')}>
                                <img style={{objectFit:'contain'}} src={Silver} height={110} width={110} alt='image'/>
                                <span>Silver Base</span>
                            </div>
                            <div className={`${previewStyle === 'shade-only' ? 'product_selected' : ''} col product_details`} onClick={()=>toggleDesign('shade-only')}>
                                <img style={{objectFit:'contain'}} src={onlyShadow} height={110} width={110} alt='image'/>
                                <span>Shade Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
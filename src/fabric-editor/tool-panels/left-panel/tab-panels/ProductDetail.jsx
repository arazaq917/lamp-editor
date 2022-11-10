import React from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {captureShots} from "../../../../utils/bounds";
import {setTrimColor} from "../../../actions";

let COLORS = ["#fff", "#003E60", "#F7CF00", "#C40E12", "#23803C"]

const ProductDetail =()=>{
    const dispatch = useDispatch()

    const lampTrimColor = (color) =>{
        dispatch(setTrimColor(color))
    }

    const newColor = (e) =>{
        dispatch(setTrimColor(e.target.value))
    }

    return (
        <div className={`product_panel_wrapper`}>
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
    );
}

export default ProductDetail;
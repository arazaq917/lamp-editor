import React, {useState} from 'react';
import './index.css'
import TextImg from '../../../../assets/images/ButtonsImages/text.png';
import BackgroundColor from '../../../../assets/images/ButtonsImages/background (1).png';
import uploadImage from '../../../../assets/images/ButtonsImages/upload.png';
import product from '../../../../assets/images/ButtonsImages/manufacture.png';
import {useDispatch} from "react-redux";
import {setActivePanel} from "../../../actions";

const LeftTabMenu =()=>{
    const dispatch = useDispatch()
    const [index, setIndex] = useState('1');

    const activePanel = (key) =>{
        dispatch(setActivePanel(key))
        setIndex(key)
    }
    return (
        <div className="editor-left-menu">
            <div className={`fab-icon-button ${index === '1' ? 'selected_panel' : ''}`} onClick={()=>activePanel('1')}>
                <img src={BackgroundColor} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${index === '2' ? 'selected_panel' : ''}`} onClick={()=>activePanel('2')}>
                <img src={TextImg} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${index === '3' ? 'selected_panel' : ''}`} onClick={()=>activePanel('3')}>
                <img src={uploadImage} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${index === '4' ? 'selected_panel' : ''}`} onClick={()=>activePanel('4')}>
                <img src={product} height={40} width={40}/>
            </div>
        </div>
    );
}

export default LeftTabMenu;
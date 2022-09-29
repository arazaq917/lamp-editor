import React from 'react';
import './index.css'
import TextImg from '../../../../assets/images/ButtonsImages/text.png';
import BackgroundColor from '../../../../assets/images/ButtonsImages/background (1).png';
import uploadImage from '../../../../assets/images/ButtonsImages/upload.png';
import {useDispatch} from "react-redux";
import {setActivePanel} from "../../../actions";

const LeftTabMenu =()=>{
    const dispatch = useDispatch()
    const activePanel = (key) =>{
        dispatch(setActivePanel(key))
    }
    return (
        <div className="editor-left-menu">
            <div className="fab-icon-button" onClick={()=>activePanel('1')}>
                <img src={TextImg} height={40} width={40}/>
            </div>
            <div className="fab-icon-button" onClick={()=>activePanel('2')}>
                <img src={BackgroundColor} height={40} width={40}/>
            </div>
            <div className="fab-icon-button" onClick={()=>activePanel('3')}>
                <img src={uploadImage} height={40} width={40}/>
            </div>
        </div>
    );
}

export default LeftTabMenu;
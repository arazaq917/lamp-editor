import React, {useState} from 'react';
import './index.css'
import TextImg from '../../../../assets/images/ButtonsImages/text.png';
import BackgroundColor from '../../../../assets/images/ButtonsImages/background.png';
import uploadImage from '../../../../assets/images/ButtonsImages/upload.png';
import product from '../../../../assets/images/ButtonsImages/manufacture.png';
import BgImages from '../../../../assets/images/ButtonsImages/picture.png';
import {useDispatch} from "react-redux";
import {setActivePanel} from "../../../actions";
import {fabric} from "fabric";

const LeftTabMenu =()=>{
    const dispatch = useDispatch()
    const [index, setIndex] = useState('1');
    const addText = () => {
        let text = new fabric.IText('Hello There',{
            left:200,
            top:200,
            fontSize:40,
            name: 'text',
            fill:'black',
            originX:'center',
            originY:'center',
            fontFamily: 'Roboto',
            isShadow:false,
            shadow:null
        })
        canvas.add(text);
        canvas.setActiveObject(text)
        canvas.renderAll();
    }

    const addRect = ()=>{
        let rect = new fabric.Rect({
            left: 100,
            top: 100,
            name:'wrapperRect',
            width: 100,
            height: 60,
            fill:'rgba(0, 0, 0, 0.78)',
            originX:'left',
            originY:'center',
        });
        canvas.add(rect);
        canvas.setActiveObject(rect)
        canvas.renderAll();
    }

    return (
        <div className="editor-left-menu">
            <div className={`fab-icon-button ${index === '1' ? 'selected_panel' : ''}`} onClick={addText}>
                <img src={BackgroundColor} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${index === '2' ? 'selected_panel' : ''}`} onClick={addRect}>
                <img src={BgImages} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${index === '3' ? 'selected_panel' : ''}`} onClick={addText}>
                <img src={TextImg} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${index === '4' ? 'selected_panel' : ''}`} onClick={addText}>
                <img src={uploadImage} height={40} width={40}/>
            </div>
            {/*<div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={addText}>*/}
            {/*    <img src={product} height={40} width={40}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default LeftTabMenu;
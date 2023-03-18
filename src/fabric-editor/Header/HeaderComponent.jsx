import React from 'react';
import './header.css'
import EditorButton from "../customComponents/fab-button/EditorButton";
import {useSelector} from "react-redux";

const optionsToAdd = ['id', 'name', 'sub_type'];

const HeaderComponent =()=>{
    const canvas = useSelector(state => state.canvas)

    const exportJSON = () => {
        let json = {
            name: 'canvas',
            fileType: 'canvas',
            canvasJSON: canvas.toJSON(optionsToAdd),
            thumbnail: canvas.toDataURL()
        }
        console.log('json',json)
    }

    return (
        <div className={"separate-section-baar"}>
            <div className="right-section">
                <span className={"section-sperator-text"}>CANVAS EDITOR</span>
            </div>
            <div className="left-section">
                <EditorButton customClass={'done-btn'} buttText={'Save'} onClicked={exportJSON}/>
            </div>
        </div>
    );
}

export default HeaderComponent;
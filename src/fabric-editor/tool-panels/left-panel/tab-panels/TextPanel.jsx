import React, {useEffect} from "react";
import EditorButton from "../../../customComponents/fab-button/EditorButton";
import './index.css'
import {fabric} from "fabric";
import {useSelector} from "react-redux";
const TextPanel = () =>{
    const canvas = useSelector(state => state.canvas)
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
    return(
        <div className="text_panel_wrapper">
            <span className="formatted_title">4. Add text if desired</span>
            <EditorButton onClicked={addText} customClass={'add_text-btn'} buttText={'Add Text'}/>
        </div>
    )
}
export default TextPanel
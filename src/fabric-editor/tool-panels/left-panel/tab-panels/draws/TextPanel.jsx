import React, {useEffect} from "react";
import EditorButton from "../../../../customComponents/fab-button/EditorButton";
import './index.css'
import {Select} from "antd";
const TextPanel = ({addText}) =>{
    const {Option} = Select;
    return(
        <div className="text_panel_wrapper">
            <EditorButton onClicked={addText} customClass={'add_text-btn'} buttText={'Add Text'}/>
        </div>
    )
}
export default TextPanel
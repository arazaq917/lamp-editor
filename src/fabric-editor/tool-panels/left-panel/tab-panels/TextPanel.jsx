import React, {useEffect} from "react";
import EditorButton from "../../../customComponents/fab-button/EditorButton";
import './index.css'
const TextPanel = ({addText}) =>{
    return(
        <div className="text_panel_wrapper">
            <EditorButton onClicked={addText} customClass={'add_text-btn'} buttText={'Add Text'}/>
        </div>
    )
}
export default TextPanel
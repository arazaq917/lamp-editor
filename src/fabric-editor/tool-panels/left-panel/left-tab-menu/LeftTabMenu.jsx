import React from 'react';
import './index.css'

const LeftTabMenu =({addText,addShape})=>{
    return (
        <div className="editor-left-menu">
            <div className={"left-tab-bar"}>
                <div className="fab-icon-button" onClick={addText}>
                    <img src={'My_Portfolio/images/black/text.png'} height={23} width={23}/>
                </div>
                <div className="fab-icon-button" onClick={addShape}>
                    <img src={'My_Portfolio/images/black/shapes.png'} height={23} width={23}/>
                </div>
            </div>

        </div>
    );
}

export default LeftTabMenu;
import React from 'react';
import './header.css'
import EditorButton from "../customComponents/fab-button/EditorButton";

const HeaderComponent =()=>{

    return (
        <div className={"separate-section-baar"}>
            <div className="right-section">
                <span className={"section-sperator-text"}>CANVAS EDITOR</span>
            </div>
            <div className="left-section">
                <EditorButton customClass={'done-btn'} buttText={'Save'}/>
            </div>
        </div>
    );
}

export default HeaderComponent;
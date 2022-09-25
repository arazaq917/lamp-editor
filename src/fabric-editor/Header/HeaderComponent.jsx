import React from 'react';
import './header.css'
import EditorButton from "../customComponents/fab-button/EditorButton";

const HeaderComponent =()=>{

    return (
        <div className={"separate-section-baar"}>
            <div className="right-section">
                <span className={"section-sperator-text"}>LAMP EDITOR</span>
            </div>
            <div className="left-section">
                <EditorButton customClass={'share-btn'} buttText={'Share'}/>
                <EditorButton customClass={'done-btn'} buttText={'Done'}/>
            </div>
        </div>
    );
}

export default HeaderComponent;
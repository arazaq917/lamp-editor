import React from 'react';
import './index.css'

const ToolBaar =()=>{
    const undo=()=>{
        // if (!canvas) return;
        // canvas.undo();
    }
    const redo=()=>{
        // if (!canvas) return;
        // canvas.redo();
    }

    return (
        <div className={`toolbaar-container`}>
            <div className="editor-tool-btn center-content" onClick={undo}>
                <img src={'My_Portfolio/images/black/undo.png'} height={13} width={13}/>
            </div>
            <div className="editor-tool-btn center-content" onClick={redo}>
                <img src={'My_Portfolio/images/black/redo.png'} height={13} width={13}/>
            </div>
        </div>
    );
}

export default ToolBaar;
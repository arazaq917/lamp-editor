import React, {useRef, useState} from "react";
import './index.css'
import {useSelector} from "react-redux";
import EditorButton from "../../../../customComponents/fab-button/EditorButton";

const UploadFilePanel = () => {
    const [imageData, setImageData] = useState([])
    const inputRef = useRef()
    const canvas = useSelector(state => state.canvas)

    const uploadFile = () =>{
        inputRef.current.click()
    }
    const uploadFileHandler = (e) => {
        let uploadedIconData = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadedIconData);
        reader.onload = (e)=> {
            setImageData((prevData) => [
                ...prevData,e.target.result
            ]);
        };
    }

    return(
        <div className="file_panel_wrapper">
            <div className="lf-secondary-btn custom-editor-upload-div" onClick={uploadFile}>
                <input className="d_none" type="file" onChange={uploadFileHandler} name="files"  ref={inputRef} />
                <div className="modified-upload-icon-upload-in-editor">Upload Icon</div>
            </div>
            <div>
                {imageData.length &&
                    imageData.map((item,index)=> {
                        return (
                            <div key={index} className="lf-icons-images lf-icon-height-width">
                                <img src={item} height={50} width={50} alt='image'/>
                            </div>
                        )})
                }
            </div>

        </div>
    )
}
export default UploadFilePanel
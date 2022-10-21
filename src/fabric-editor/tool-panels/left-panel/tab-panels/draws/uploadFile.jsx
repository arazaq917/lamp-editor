import React, {useRef, useState} from "react";
import './index.css'
import {useSelector} from "react-redux";
import img1 from '../../../../../assets/images/bg.png'
import img2 from '../../../../../assets/images/PNG Various/baby.png'

const UploadFilePanel = () => {
    const [imageData, setImageData] = useState([img2,img1])
    const inputRef = useRef()
    const canvas = useSelector(state => state.canvas)

    const uploadFile = () =>{
        inputRef.current.click()
    }
    const uploadFileHandler = (e) => {
        let uploadedImageData = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadedImageData);
        reader.onload = (e)=> {
            console.log("image",e.target.result)
            setImageData((prevData) => [
                e.target.result, ...prevData
            ]);
        };
    }

    return(
        <div className="file_panel_wrapper">
            <div className="secondary-btn" onClick={uploadFile}>
                <input className="d_none" type="file" onChange={uploadFileHandler} name="files"  ref={inputRef} />
                <div className="upload-image">Upload Image</div>
            </div>
            <div className="images-row">
                {imageData.length &&
                    imageData.map((item,index)=> {
                        return (
                            <div key={index} className="images-div">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <img src={item} height={110} width={110} alt='image'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})
                }
            </div>

        </div>
    )
}
export default UploadFilePanel
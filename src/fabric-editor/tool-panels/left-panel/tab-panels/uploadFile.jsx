import React, {useRef, useState} from "react";
import './index.css'
import {useSelector} from "react-redux";
import img1 from '../../../../assets/images/bg.png'
import img2 from '../../../../assets/images/PNGVarious/baby.jpg'

const UploadFilePanel = () => {
    const [imageData, setImageData] = useState([img1, img2])
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
            let imgObj = new Image();
            imgObj.src = e.target.result;
            imgObj.onload = function () {
                var image = new fabric.Image(imgObj,{
                    name: 'image',
                    scaleX:0.3,
                    scaleY:0.3,
                });
                image.scaleToHeight(400)
                canvas.centerObject(image);
                canvas.add(image);
                canvas.renderAll();
            }
            setImageData((prevData) => [
                e.target.result, ...prevData
            ]);
        };
    }
    const addImage = (item)=>{
        let imgObj = new Image();
        imgObj.src = item;
        imgObj.onload = function () {
            var image = new fabric.Image(imgObj, {
                originX: 'center',
                originY: 'center',
                name: "image",
            });
            image.scaleToHeight(400)
            image.scaleToWidth(400)
            canvas.centerObject(image);
            canvas.add(image);
            canvas.setActiveObject(image)
            canvas.renderAll();
        }
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
                            <div key={index} className="images-div" onClick={()=>addImage(item)}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <img style={{objectFit:'contain'}} src={item} height={110} width={110} alt='image'/>
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
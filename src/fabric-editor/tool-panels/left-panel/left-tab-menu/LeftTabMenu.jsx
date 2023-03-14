import React, {useRef, useState} from 'react';
import './index.css'
import circle from '../../../../assets/images/icons/circle.png';
import rectangular from '../../../../assets/images/icons/rectangular.png';
import triangle from '../../../../assets/images/icons/triangle.png';
import pentagon from '../../../../assets/images/icons/pentagon.png';
import TextImg from '../../../../assets/images/icons/text.png';
import square from '../../../../assets/images/icons/square.png';
import uploadImage from '../../../../assets/images/icons/image.png';
import line from '../../../../assets/images/icons/line.png';
import {useDispatch} from "react-redux";
import {fabric} from "fabric";

const LeftTabMenu =()=>{
    const dispatch = useDispatch()
    const [index, setIndex] = useState('1');
    const inputRef = useRef()
    const addText = () => {
        let text = new fabric.IText('Hello There',{
            left:200,
            top:200,
            fontSize:35,
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

    const addRect = ()=>{
        let rect = new fabric.Rect({
            left: 100,
            top: 100,
            name:'wrapperRect',
            width: 100,
            height: 60,
            fill:'rgba(0, 0, 0, 0.78)',
            originX:'left',
            originY:'center',
        });
        canvas.add(rect);
        canvas.setActiveObject(rect)
        canvas.renderAll();
    }
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
                canvas.setActiveObject(image)
                canvas.renderAll();
            }
            // setImageData((prevData) => [
            //     e.target.result, ...prevData
            // ]);
        };
    }
    // const addImage = (item)=>{
    //     let imgObj = new Image();
    //     imgObj.src = item;
    //     imgObj.onload = function () {
    //         var image = new fabric.Image(imgObj, {
    //             originX: 'center',
    //             originY: 'center',
    //             name: "image",
    //         });
    //         image.scaleToHeight(400)
    //         image.scaleToWidth(400)
    //         canvas.centerObject(image);
    //         canvas.add(image);
    //         canvas.setActiveObject(image)
    //         canvas.renderAll();
    //     }
    // }

    const addShapes = (shape) => {
        switch (shape) {
            case 'rect':
                var rec = new fabric.Rect({
                    top: 10,
                    left: 10,
                    width: 175,
                    height: 100,
                    fill: '',
                    stroke: 'blue',
                });
                canvas.add(rec);
                canvas.setActiveObject(rec)
                canvas.renderAll();
                break;
            case 'square':
                var rec = new fabric.Rect({
                    top: 10,
                    left: 10,
                    width: 100,
                    height: 100,
                    fill: '',
                    stroke: 'blue',
                });
                canvas.add(rec);
                canvas.setActiveObject(rec)
                canvas.renderAll();
                break;
            case 'circle':
                var cir = new fabric.Circle({
                    top: 10,
                    left: 100,
                    radius: 50,
                    fill: '',
                    stroke: 'blue',
                    strokeWidth: 2
                });
                canvas.add(cir);
                canvas.setActiveObject(cir)
                canvas.renderAll();
                break;
            case 'triangle':
                var tri = new fabric.Triangle({
                    top: 10,
                    left: 200,
                    width: 200,
                    height: 100,
                    fill: '',
                    stroke: 'blue',
                    strokeWidth: 2
                });
                canvas.add(tri);
                canvas.setActiveObject(tri)
                canvas.renderAll();
                break;
            case 'polygon':
                var trapezoid = [ {x:-100,y:-50},{x:100,y:-50},{x:150,y:50},{x:-150,y:50} ];
                var emerald = [ 	{x:850,y:75},
                    {x:958,y:137.5},
                    {x:958,y:262.5},
                    {x:850,y:325},
                    {x:742,y:262.5},
                    {x:742,y:137.5},
                ];
                var star4 = [
                    {x:0,y:0},
                    {x:100,y:50},
                    {x:200,y:0},
                    {x:150,y:100},
                    {x:200,y:200},
                    {x:100,y:150},
                    {x:0,y:200},
                    {x:50,y:100},
                    {x:0,y:0}
                ];
                var star5 = [ 	{x:350,y:75},
                    {x:380,y:160},
                    {x:470,y:160},
                    {x:400,y:215},
                    {x:423,y:301},
                    {x:350,y:250},
                    {x:277,y:301},
                    {x:303,y:215},
                    {x:231,y:161},
                    {x:321,y:161},];
                var shape = new Array(trapezoid,emerald,star4,star5);

                var polyg = new fabric.Polygon(shape[1], {
                    top: 180,
                    left: 200,
                    fill: '',
                    stroke: 'blue',
                    strokeWidth: 2
                });
                canvas.add(polyg);
                canvas.setActiveObject(polyg)
                canvas.renderAll();
                break;
            case 'line':
                var line = new fabric.Line([50, 10, 200, 150], {
                    stroke: 'black'
                });
                canvas.add(line)
                canvas.setActiveObject(line)
                canvas.renderAll();
                break;
            default:
                return;
        }
    }

    return (
        <div className="editor-left-menu">
            <div ref={inputRef} className={`fab-icon-button ${index === '3' ? 'selected_panel' : ''}`} onClick={addText}>
                <img src={TextImg} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '4' ? 'selected_panel' : ''}`} onClick={uploadFile}>
                <input className="d_none" type="file" onChange={uploadFileHandler} name="files" onClick={(e)=>{e.target.value = null}}  ref={inputRef} />
                <img src={uploadImage} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={()=>{addShapes('circle')}}>
                <img src={circle} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={()=>{addShapes('rect')}}>
                <img src={rectangular} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={()=>{addShapes('square')}}>
                <img src={square} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={()=>{addShapes('triangle')}}>
                <img src={triangle} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={()=>{addShapes('polygon')}}>
                <img src={pentagon} height={35} width={35}/>
            </div>
            <div className={`fab-icon-button ${index === '5' ? 'selected_panel' : ''}`} onClick={()=>{addShapes('line')}}>
                <img src={line} height={35} width={35}/>
            </div>
        </div>
    );
}

export default LeftTabMenu;
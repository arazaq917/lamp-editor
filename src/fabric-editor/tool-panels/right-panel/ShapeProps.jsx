import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
const ShapeProps = () => {
    const [shapeColor, setShapeColor] = useState('')
    const [shapeOpacity, setShapeOpacity] = useState(100)

    useEffect(()=>{
        let object = canvas?.getActiveObject()
        if(object.name === 'shape'){
            setShapeColor(object.fill)
            setShapeOpacity(object.opacity*100)
        }

    },[canvas?.getActiveObject()])

    const changeColor = (e) =>{
        let color = e.target.value
        let obj = canvas.getActiveObject()
        setShapeColor(color)
        obj.set({
            fill : color
        })
        canvas.renderAll()
    }
    const changeOpacity = (e) =>{
        let value = e.target.value
        let obj = canvas.getActiveObject()
        setShapeOpacity(+value)
        obj.set({
            opacity : +value/100
        })
        canvas.renderAll()
    }


    return(
        <div>
            <div className="d-flex flex-column col-12">
                <span className="">Fill Color</span>
                <div className="gnr-input-color-wrapper justify-content-between d-flex align-items-center">
                    <input
                        className="color-input"
                        type="color"
                        id="exampleColorInput"
                        defaultValue="#ffffff"
                        value={shapeColor}
                        onChange={changeColor}
                    />
                    <span className='color-code'>
                        {shapeColor}
                    </span>
                </div>
            </div>
            <hr className="solid-divider" />
            <div className='d-flex flex-column'>
                <Form.Label>Range</Form.Label>
                <div className='d-flex opacity-scroller justify-content-between'>
                    <Form.Range onChange={changeOpacity} value={shapeOpacity} />
                    <span className='opacity-number'>
                        {(shapeOpacity).toFixed(0)} %
                </span>
                </div>
            </div>
        </div>
    )
}
export default ShapeProps
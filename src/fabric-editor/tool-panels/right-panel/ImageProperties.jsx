import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import plus from "../../../assets/images/plus.png";
import minus from "../../../assets/images/minus.png";
import leftRotate from "../../../assets/images/rotate-left.png";
import rightRotate from "../../../assets/images/rotate-right.png";
import flipRight from "../../../assets/images/flipRight.png";
import flipBottom from "../../../assets/images/flipBottom.png";
import fitImage from "../../../assets/images/fitImage.png";
import fillImage from "../../../assets/images/fillImage.png";
import './index.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ImageProperties = () => {

    const canvas = useSelector(state => state.canvas)
    const objectStates = useSelector(state => state.canvasObjectStates)

    useEffect(() => {

    }, [])

    const updateSize = (state) => {
        const obj = canvas.getActiveObject();
        if (obj) {
          let sizeX
            let sizeY
            switch (state) {
                case "increase":
                    sizeX = obj.scaleX + percentageIncrease(obj.scaleX)
                    sizeY = obj.scaleY + percentageIncrease(obj.scaleY)
                    break;
                case "decrease":
                    sizeX = obj.scaleX - percentageIncrease(obj.scaleX)
                    sizeY = obj.scaleY - percentageIncrease(obj.scaleY)
                    break;
                default:
                    break;
            }
            if (sizeX > 0 && sizeY > 0) {
                obj.set("scaleX", sizeX)
                obj.set("scaleY", sizeY)
                canvas.renderAll()
            }
        }
    }
    const percentageIncrease = (num) => {
        return parseFloat((5 / 100) * num)
    }
    const updateAngle = (state) => {
        const obj = canvas.getActiveObject();
        if (obj) {
           let angle
            switch (state) {
                case "increase":
                    angle = obj.angle - 10
                    break;
                case "decrease":
                    angle = obj.angle + 10
                    break;
                default:
                    angle = 0
                    break;
            }
            obj.set("angle", angle)
            canvas.renderAll()
        }
    }
    const flipX = () => {
        let obj = canvas.getActiveObject();
        if (obj) {
            obj.set('flipX', !obj.flipX);
            canvas.renderAll();
        }
    }

    const flipY = () => {
        let obj = canvas.getActiveObject();
        if (obj) {
            obj.set('flipY', !obj.flipY);
            canvas.renderAll();
        }
    }
    const fitObject = () => {
        let obj = canvas.getActiveObject();
        if (obj) {
            obj.scaleToHeight(300)
            obj.scaleToWidth(300)
            canvas.centerObject(obj);
            canvas.renderAll();
        }
    }
    const fillObject = () => {
        let obj = canvas.getActiveObject();
        if (obj) {
            obj.scaleToHeight(500)
            obj.scaleToWidth(500)
            canvas.centerObject(obj);
            canvas.renderAll();
        }
    }
    return (
        <div className={`properties_wrapper`}>
            <Container>
                <Row>
                    <Col>
                        <span className="format_title">Fill</span>
                    </Col>
                    <Col>
                        <div className="border_icon flip_icon" onClick={fillObject}>
                            <img src={fillImage} height={20} width={20} />
                        </div>
                    </Col>
                    <Col>
                        <span className="format_title">Fit</span>
                    </Col>
                    <Col>
                        <div className="border_icon flip_icon" onClick={fitObject}>
                            <img src={fitImage} height={20} width={20} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="format_title">Scale</span>
                    </Col>
                    <Col>
                        <div className="scale_props">
                            <div className="border_icon" onClick={() => updateSize("decrease")}>
                                <img src={minus} height={20} width={20} />
                            </div>
                            <div className="border_icon" onClick={() => updateSize("increase")}>
                                <img src={plus} height={20} width={20}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="format_title">Rotate</span>
                    </Col>
                    <Col>
                        <div className="rotate_props">
                            <div className="border_icon" onClick={() => updateAngle("increase")}>
                                <img src={leftRotate} height={20} width={20}/>
                            </div>
                            <div className="border_icon" onClick={() => updateAngle("decrease")}>
                                <img src={rightRotate} height={20} width={20}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="format_title">Flip</span>
                    </Col>
                    <Col>
                        <div className="rotate_props">
                            <div className="border_icon" onClick={flipX}>
                                <img src={flipRight} height={20} width={20}/>
                            </div>
                            <div className="border_icon" onClick={flipY}>
                                <img src={flipBottom} height={20} width={20}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ImageProperties;
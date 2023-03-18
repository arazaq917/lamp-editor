import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import centreAlign from "../../../assets/images/center.png";
import leftAlign from "../../../assets/images/left.png";
import rightAlign from "../../../assets/images/right.png";
import './index.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import undoImg from "../../../assets/images/undo.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const arrayFonts = ["Dennis Hill Speeding", "Acme", "Akshar", "Artifika", "Comic Neue", "Courier Prime", "EB Garamond", "Just Another Hand",
    "Black Han Sans", "Montserrat", "Playball", "Poppins", " Ultra", "Smythe", " Rock Salt", "Brush Script MT", "Times New Roman", 'Roboto']

const TextProperties = () => {
    const canvas = useSelector(state => state.canvas)
    const objectStates = useSelector(state => state.canvasObjectStates)
    const [toggleBold, setToggleBold] = useState(false);
    const [toggleItalic, setToggleItalic] = useState(false);
    const [toggleUnderline, setToggleUnderline] = useState(false);
    const [textProps, setTextProps] = useState(true);
    const [changeSize, setChangeSize] = useState('');
    const [changeFamily, setChangeFamily] = useState('');
    const [changeAlign, setAlignment] = useState('left');
    const [textColor, setTextColor] = useState('');
    const [isShadow, setShadow] = useState(false);
    const [blur, setBlur] = useState(0);
    const [shadowColor, setShadowColor] = useState('#FFFFFF')

    useEffect(() => {
        let obj = canvas?.getActiveObject()
        if (obj.isShadow) {
            setShadow(true);
            setBlur(obj.shadow.blur * 10)
            setShadowColor(obj.shadow.color);
        } else {
            setShadow(false)
            setBlur(0);
            setShadowColor('#FFFFFF')
        }
        if (obj && obj.fontWeight === 'bold') setToggleBold(true)
        else {
            setToggleBold(false)
        }
        if (obj && obj.type === 'i-text') {
            setTextProps(true)
            setChangeSize(Math.floor(obj.fontSize))
            setChangeFamily(obj.fontFamily)
            setAlignment(obj.textAlign)
            setTextColor(obj.fill)
            if (obj && obj.fontStyle === 'italic') setToggleItalic(true)
            else {
                setToggleItalic(false)
            }
            if (obj && obj.underline) setToggleUnderline(true)
            else {
                setToggleUnderline(false)
            }
        }
        canvas?.on({
            'text:selection:changed': onSelectionChanged,
            'text:changed': onSelectionChanged,
        });
    }, [objectStates])
    const toggleShadow = (state) => {
        let obj = canvas.getActiveObject();
        let shadow = {color: 'rgba(0, 0, 0, 1)', offsetX: 2, offsetY: 2, blur: 2, id: 6};
        if (obj) {
            setShadow(state)
            obj.set({isShadow: state})
            obj.set({shadow: state ? shadow : null})
        }
        canvas.renderAll()
    }
    const setOpacity = (val) => {
        let obj = canvas.getActiveObject();
        if (obj && obj.shadow) {
            obj.shadow.blur = val / 10;
            canvas.renderAll()
            setBlur(val)
        }
    }
    const changeShadowColor = (e) => {
        let obj = canvas.getActiveObject();
        if (obj && obj.shadow) {
            obj.shadow.color = e.target.value
            setShadowColor(e.target.value)
            canvas.renderAll()
        }
    }
    const onSelectionChanged = () => {
        var obj = canvas.getActiveObject();
        if (obj.selectionStart > -1) {
            let fFamily = getStyle(obj, 'fontFamily')
            let fontW = getStyle(obj, 'fontWeight')
            let fontU = getStyle(obj, 'underline')
            let fontS = getStyle(obj, 'fontStyle')
            let fontSize = getStyle(obj, 'fontSize')
            let textFill = getStyle(obj, 'fill')
            if (fontW === 'bold') {
                setToggleBold(true)
            } else {
                setToggleBold(false)
            }
            if (fontS === 'italic') {
                setToggleItalic(true)
            } else {
                setToggleItalic(false)
            }
            if (fontU) {
                setToggleUnderline(true)
            } else {
                setToggleUnderline(false)
            }
            if (fFamily) {
                setChangeFamily(`${fFamily}`)
            } else {
                setChangeFamily(obj.fontFamily)
            }
            if (textFill) {
                setTextColor(textFill)
            } else {
                setTextColor(obj.fill)
            }
            if (fontSize) {
                setChangeSize(Math.floor(fontSize))
            } else {
                setChangeSize(Math.floor(obj.fontSize))
            }
        }
    }
    const getStyle = (object, styleName) => {
        return (object.getStyleAtPosition && object.isEditing) ? object.getStyleAtPosition(object.selectionStart)[styleName] : object[styleName];
    }

    const setStyle = (object, styleName, value) => {
        if (object.setSelectionStyles && object.isEditing) {
            var style = {};
            style[styleName] = value;
            object.setSelectionStyles(style);
        } else {
            object[styleName] = value;
        }
    }

    const textProperty = (value) => {
        let obj = canvas.getActiveObject()
        switch (value) {
            case 'bold':
                if (obj.setSelectionStyles && obj.isEditing) {
                    let fBold = getStyle(obj, 'fontWeight')
                    if (fBold === 'bold') {
                        setStyle(obj, 'fontWeight', '500')
                        setToggleBold(false)
                    } else {
                        setStyle(obj, 'fontWeight', value)
                        setToggleBold(true)
                    }
                } else {
                    if (obj.fontWeight === 'bold') {
                        setToggleBold(false)
                        obj.set({
                            fontWeight: '500'
                        })
                    } else {
                        setToggleBold(true)
                        obj.set({
                            fontWeight: 'bold'
                        })
                    }
                }
                break;
            case 'italic':
                if (obj.setSelectionStyles && obj.isEditing) {
                    let fItalic = getStyle(obj, 'fontStyle')
                    if (fItalic === 'italic') {
                        setStyle(obj, 'fontStyle', 'normal')
                        setToggleItalic(false)
                    } else {
                        setStyle(obj, 'fontStyle', value)
                        setToggleItalic(true)
                    }
                } else {
                    if (obj.fontStyle === 'italic') {
                        setToggleItalic(false)
                        obj.set({
                            fontStyle: 'normal'
                        })
                    } else {
                        setToggleItalic(true)
                        obj.set({
                            fontStyle: 'italic'
                        })
                    }
                }
                break;
            case 'underline':
                if (obj.setSelectionStyles && obj.isEditing) {
                    let fUnderline = getStyle(obj, 'underline')
                    if (fUnderline) {
                        setStyle(obj, 'underline', false)
                        setToggleUnderline(false)
                    } else {
                        setStyle(obj, 'underline', true)
                        setToggleUnderline(true)
                    }
                } else {
                    if (obj.underline) {
                        setToggleUnderline(false)
                        obj.set({
                            underline: false
                        })
                    } else {
                        setToggleUnderline(true)
                        obj.set({
                            underline: true
                        })
                    }
                }
                break;
            default:
                return
        }
        canvas.renderAll()
    }
    const changeFontFamily = (e) => {
        let val = e.target.value
        setChangeFamily(`${val}`)
        let obj = canvas.getActiveObject()
        if (obj.setSelectionStyles && obj.isEditing) {
            setStyle(obj, 'fontFamily', val)
            setChangeFamily(`${val}`)
        } else {
            if (obj) {
                obj.set({
                    fontFamily: `${val}`
                })
            }
        }
        canvas.renderAll()
    }
    const changeFontSize = (e) => {
        let val = e.target.value
        let obj = canvas.getActiveObject()
        if (obj.setSelectionStyles && obj.isEditing) {
            setStyle(obj, 'fontSize', val)
            setChangeSize(val)
        } else {
            setChangeSize(val)
            if (obj) {
                obj.set({
                    fontSize: val
                })
            }
        }
        canvas.renderAll()
    }
    const changeAlignment = (align) => {
        let obj = canvas.getActiveObject()
        setAlignment(align)
        obj.set({
            textAlign: align
        })
        canvas.renderAll()
    }

    const changeColor = (e) => {
        let color = e.target.value
        let obj = canvas.getActiveObject()
        setTextColor(color)
        obj.set({
            fill: color
        })
        canvas.renderAll()
    }

    return (
        <div className={`properties_wrapper`}>
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex flex-column col-12">
                            <span className="">Fill Color</span>
                            <div className="gnr-input-color-wrapper justify-content-between d-flex align-items-center">
                                <input
                                    className="color-input"
                                    type="color"
                                    id="exampleColorInput"
                                    defaultValue="#ffffff"
                                    onChange={changeColor}
                                    value={textColor}
                                />
                                <span className='color-code'>
                                    {textColor}
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr className="solid-divider"/>
                <Row>
                    <Col>
                        <span className="format_title">Properties</span>
                    </Col>
                    <Col>
                        <div className="lamp_text_props">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bold</Tooltip>}>
                                <button className={`buttons_style ${toggleBold ? 'bg_purple' : ''}`}
                                        onClick={() => textProperty('bold')}>B
                                </button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Italic</Tooltip>}>
                                <button className={`buttons_style italic_btn ${toggleItalic ? 'bg_purple' : ''}`}
                                        onClick={() => textProperty('italic')}>I
                                </button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Underline</Tooltip>}>
                                <button className={`buttons_style underline_btn ${toggleUnderline ? 'bg_purple' : ''}`}
                                        onClick={() => textProperty('underline')}>U
                                </button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
                <hr className="solid-divider"/>
                <Row>
                    <Col>
                        <span className="format_title">Alignment</span>
                    </Col>
                    <Col>
                        <div className="lamp_text_alignment">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Left</Tooltip>}>
                                <button className={`buttons_style ${changeAlign === 'left' ? 'bg_purple' : ''}`}
                                        onClick={() => changeAlignment('left')}>
                                    <img src={leftAlign} alt="left" height={20} width={20}/>
                                </button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Center</Tooltip>}>
                                <button className={`buttons_style ${changeAlign === 'center' ? 'bg_purple' : ''}`}
                                        onClick={() => changeAlignment('center')}>
                                    <img src={centreAlign} alt="left" height={20} width={20}/>
                                </button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Right</Tooltip>}>
                                <button className={`buttons_style ${changeAlign === 'right' ? 'bg_purple' : ''}`}
                                        onClick={() => changeAlignment('right')}>
                                    <img src={rightAlign} alt="left" height={20} width={20}/>
                                </button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
                <hr className="solid-divider"/>
                <Row>
                    <Col>
                        <span className="format_title">Family</span>
                    </Col>
                    <Col className='text-select'>
                        <Form.Select
                            onChange={changeFontFamily}
                            value={changeFamily}
                        >
                            {
                                arrayFonts.map((item, index) => {
                                    return (
                                        <option style={{fontFamily: item}} key={index}>{item}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Col>
                </Row>
                <hr className="solid-divider"/>
                <Row>
                    <Col>
                        <span className="format_title">Size</span>
                    </Col>
                    <Col>
                        <Form.Select
                            value={changeSize}
                            placeholder="Font Size"
                            onChange={changeFontSize}
                        >
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                            <option value="22">22</option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                            <option value="28">28</option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="38">38</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                            <option value="44">44</option>
                            <option value="46">46</option>
                            <option value="48">48</option>
                            <option value="50">50</option>
                            <option value="52">52</option>
                            <option value="54">54</option>
                            <option value="56">56</option>
                            <option value="58">58</option>
                            <option value="60">60</option>
                            <option value="62">62</option>
                            <option value="64">64</option>
                            <option value="66">66</option>
                            <option value="68">68</option>
                            <option value="70">70</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TextProperties;
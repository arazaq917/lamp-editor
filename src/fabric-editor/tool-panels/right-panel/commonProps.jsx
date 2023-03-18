import React, {useEffect, useState} from "react";
import {
    AlignHorizontalObject, AlignVerticalObject, ArrowBackwardIcon, ArrowDownIcon, ArrowFrontIcon, ArrowUpIcon,
    BottomAlignIcon,
    LeftAlignIcon, LockIcon,
    RightAlignIcon,
    TopAlignIcon
} from "../../../assets/images/icons/icons";
import {useSelector} from "react-redux";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const CommonProps = () => {
    const canvas = useSelector(state => state.canvas)
    const [lockObj, setLockObj] = useState(false);

    useEffect(() => {
        let object = canvas?.getActiveObject()
        if (object.lockMovementX) {
            setLockObj(true)
        } else {
            setLockObj(false)
        }
    }, [canvas?.getActiveObject()])

    const alignSingleObject = (alignment, fabricObject = canvas.getActiveObject()) => {
        // Get the canvas and the current zoom level
        const zoom = canvas.getZoom();
        // Calculate the minimum and maximum x and y values for the object, based on the current zoom level
        const maxX = canvas.width / zoom;
        const maxY = canvas.height / zoom;
        const minY = 0;
        const minX = 0;
        // Get dimensions and positions with the Bounding Rect: (true, true) gives us the absolute coordinates
        const {
            top, left, width, height,
        } = fabricObject.getBoundingRect(true, true);
        switch (alignment) {
            case 'top':
                fabricObject.setBoundingBox('top', minY);
                break;
            case 'bottom':
                fabricObject.setBoundingBox('top', maxY - height);
                break;
            case 'left':
                fabricObject.setBoundingBox('left', minX);
                break;
            case 'right':
                fabricObject.setBoundingBox('left', maxX - width);
                break;
        }
        canvas.renderAll();
    };

    const sendBackward = () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.sendBackwards(activeObject, true);
        }
        canvas.renderAll();
    };

    const sendForward = () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.bringForward(activeObject, true);
        }
        canvas.renderAll();
    };

    const sendToBack = () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.sendToBack(activeObject);
        }
        canvas.renderAll();
    };

    const sendToFront = () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.bringToFront(activeObject);
        }
        canvas.renderAll();
    };
    const lockObject = () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            if (lockObj) {
                activeObject.lockMovementX = false;
                activeObject.lockMovementY = false;
                setLockObj(false)
            } else {
                activeObject.lockMovementX = true;
                activeObject.lockMovementY = true;
                setLockObj(true)
            }
        }
        canvas.renderAll();
    };
    const centerObjectVertical = () => {
        const obj = canvas.getActiveObject();
        if (!obj) return;
        canvas.centerObjectV(obj);
        canvas.renderAll();
    };
    const centerObjectHorizontal = () => {
        const obj = canvas.getActiveObject();
        if (!obj) return;
        canvas.centerObjectH(obj);
        canvas.renderAll();
    };
    return (
        <div
            style={{fontSize: '14px'}}
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center mx-3"
        >
            <div className="row">
                <div className="col input-group p-0">
                    <ul className="image-properties-icons list-group d-flex flex-row flex-wrap justify-content-center">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Align left</Tooltip>}>
                            <li onClick={() => alignSingleObject('left')} className="list-group-item">
                                <LeftAlignIcon fill="#000" />
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Align right</Tooltip>}>
                            <li onClick={() => alignSingleObject('right')} className="list-group-item">
                                <RightAlignIcon fill="#000" />
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Align top</Tooltip>}>
                            <li onClick={() => alignSingleObject('top')} className="list-group-item">
                                <TopAlignIcon fill="#000"/>
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Align bottom</Tooltip>}>
                            <li onClick={() => alignSingleObject('bottom')} className="list-group-item">
                                <BottomAlignIcon fill="#000" />
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Align center horizontally</Tooltip>}>
                            <li onClick={centerObjectHorizontal} className="list-group-item">
                                <AlignHorizontalObject fill="#000" />
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Align center vertically</Tooltip>}>
                            <li onClick={centerObjectVertical} className="list-group-item">
                                <AlignVerticalObject fill="#000" />
                            </li>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bring froward</Tooltip>}>
                            <span className='layering-icons' onClick={sendForward}>
                                    <ArrowUpIcon fill="#000"/>
                            </span>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bring to front</Tooltip>}>
                            <span className='layering-icons' onClick={sendToFront}>
                                    <ArrowFrontIcon fill="#000" />
                            </span>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Backward</Tooltip>}>
                            <span className='layering-icons' onClick={sendBackward}>
                                    <ArrowDownIcon fill="#000" />
                            </span>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sent to back</Tooltip>}>
                            <span className='layering-icons' onClick={sendToBack}>
                                    <ArrowBackwardIcon fill="#000" />
                            </span>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Lock movement</Tooltip>}>
                            <span className='layering-icons' onClick={lockObject}>
                                    <LockIcon fill={lockObj ? '#ad3333' : '#000'} />
                            </span>
                        </OverlayTrigger>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CommonProps
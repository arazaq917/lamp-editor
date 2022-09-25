import {fabric} from "fabric";

export const initCenteringGuidelines = (canvas) => {
    var canvasWidth = canvas.getWidth(),
        canvasHeight = canvas.getHeight(),
        canvasWidthCenter = canvasWidth / 2,
        canvasHeightCenter = canvasHeight / 2,
        canvasWidthCenterMap = { },
        canvasHeightCenterMap = { },
        centerLineMargin = 4,
        centerLineColor = 'rgba(28,233,12,0.5)',
        centerLineWidth = 2,
        ctx = canvas.getSelectionContext(),
        viewportTransform;
    let len = canvasWidthCenter + centerLineMargin;
    for (var i = canvasWidthCenter - centerLineMargin; i <= len; i++) {
        canvasWidthCenterMap[Math.round(i)] = true;
    }
    let lenH = canvasHeightCenter + centerLineMargin;
    for (var i = canvasHeightCenter - centerLineMargin; i <= lenH; i++) {
        canvasHeightCenterMap[Math.round(i)] = true;
    }

    const showVerticalCenterLine = () => {
        showCenterLine(canvasWidthCenter + 0.5, 0, canvasWidthCenter + 0.5, canvasHeight);
    }

    const showHorizontalCenterLine = () => {
        showCenterLine(0, canvasHeightCenter + 0.5, canvasWidth, canvasHeightCenter + 0.5);
    }

    const showCenterLine = (x1, y1, x2, y2) => {
        if (!viewportTransform?.length) return;
        ctx.save();
        ctx.strokeStyle = centerLineColor;
        ctx.lineWidth = centerLineWidth;
        ctx.beginPath();
        ctx.moveTo(x1 * viewportTransform[0], y1 * viewportTransform[3]);
        ctx.lineTo(x2 * viewportTransform[0], y2 * viewportTransform[3]);
        ctx.stroke();
        ctx.restore();
    }

    var afterRenderActions = [],
        isInVerticalCenter,
        isInHorizontalCenter;

    canvas.on('mouse:down', function () {
        viewportTransform = canvas.viewportTransform;
    });

    canvas.on('object:moving', function(e) {
        var object = e.target,
            objectCenter = object.getCenterPoint(),
            transform = canvas._currentTransform;

        if (!transform) return;

        isInVerticalCenter = Math.round(objectCenter.x) in canvasWidthCenterMap;
        isInHorizontalCenter = Math.round(objectCenter.y) in canvasHeightCenterMap;

        if (isInHorizontalCenter || isInVerticalCenter) {
            object.setPositionByOrigin(new fabric.Point((isInVerticalCenter ? canvasWidthCenter : objectCenter.x), (isInHorizontalCenter ? canvasHeightCenter : objectCenter.y)), 'center', 'center');
        }
    });

    canvas.on('before:render', function() {
        canvas.clearContext(canvas.contextTop);
    });

    canvas.on('after:render', function() {
        if (isInVerticalCenter) {
            showVerticalCenterLine();
        }
        if (isInHorizontalCenter) {
            showHorizontalCenterLine();
        }
    });

    canvas.on('mouse:up', function() {
        // clear these values, to stop drawing guidelines once mouse is up
        isInVerticalCenter = isInHorizontalCenter = null;
        canvas.renderAll();
    });
}
export const initAligningGuidelines = (canvas) => {

    var ctx = canvas.getSelectionContext(),
        aligningLineOffset = 4,
        aligningLineMargin = 2,
        aligningLineWidth = 2,
        aligningLineColor = 'rgb(173,14,120)',
        viewportTransform,
        zoom = 1;

    const drawVerticalLine = (coords,isBetFlag=false) => {
        drawLine(
            coords.x + 0.5,
            coords.y1 > coords.y2 ? coords.y2 : coords.y1,
            coords.x + 0.5,
            coords.y2 > coords.y1 ? coords.y2 : coords.y1,
            isBetFlag);
    }

    const drawHorizontalLine = (coords,isBetFlag=false) => {
        drawLine(
            coords.x1 > coords.x2 ? coords.x2 : coords.x1,
            coords.y + 0.5,
            coords.x2 > coords.x1 ? coords.x2 : coords.x1,
            coords.y + 0.5,
            isBetFlag);
    }

    const drawLine = (x1, y1, x2, y2,isBetFlag) => {
        ctx.save();
        ctx.lineWidth = aligningLineWidth;
        ctx.strokeStyle = aligningLineColor;
        if (isBetFlag) {
            ctx.lineWidth = 6;
            ctx.strokeStyle = 'rgb(0,255,0)';
        }
        ctx.beginPath();
        ctx.moveTo(((x1+viewportTransform[4])*zoom), ((y1+viewportTransform[5])*zoom));
        ctx.lineTo(((x2+viewportTransform[4])*zoom), ((y2+viewportTransform[5])*zoom));
        ctx.stroke();
        ctx.restore();
    }

    const isInRange = (value1, value2) => {
        value1 = Math.round(value1);
        value2 = Math.round(value2);
        for (var i = value1 - aligningLineMargin, len = value1 + aligningLineMargin; i <= len; i++) {
            if (i === value2) {
                return true;
            }
        }
        return false;
    }

    var verticalLines = [],
        horizontalLines = [];

    const objectSnapping =(activeObject)=>{
        if (!canvas && !activeObject) return;
        var canvasObjects = canvas.getObjects(),
            activeObjectCenter = activeObject.getCenterPoint(),
            activeObjectLeft = activeObjectCenter.x,
            activeObjectTop = activeObjectCenter.y,
            activeObjectBoundingRect = activeObject.getBoundingRect(),
            activeObjectHeight = activeObjectBoundingRect.height / viewportTransform[3],
            activeObjectWidth = activeObjectBoundingRect.width / viewportTransform[0],
            horizontalInTheRange = false,
            verticalInTheRange = false,
            transform = canvas._currentTransform;
        if (!transform) return;

        for (var i = canvasObjects.length; i--; ) {

            if (canvasObjects[i] === activeObject) continue;
            var objectCenter = canvasObjects[i].getCenterPoint(),
                objectLeft = objectCenter.x,
                objectTop = objectCenter.y,
                objectBoundingRect = canvasObjects[i].getBoundingRect(),
                objectHeight = objectBoundingRect.height / viewportTransform[3],
                objectWidth = objectBoundingRect.width / viewportTransform[0];

            if (isInRange(objectLeft, activeObjectLeft)) {
                verticalInTheRange = true;
                verticalLines.push({
                    x: objectLeft,
                    y1: (objectTop < activeObjectTop)
                        ? (objectTop - objectHeight / 2 - aligningLineOffset)
                        : (objectTop + objectHeight / 2 + aligningLineOffset),
                    y2: (activeObjectTop > objectTop)
                        ? (activeObjectTop + activeObjectHeight / 2 + aligningLineOffset)
                        : (activeObjectTop - activeObjectHeight / 2 - aligningLineOffset)
                });
                // activeObject.setPositionByOrigin(new fabric.Point(objectLeft, activeObjectTop), 'center', 'center');
            }

            // snap by the left edge
            if (isInRange(objectLeft - objectWidth / 2, activeObjectLeft - activeObjectWidth / 2)) {
                verticalInTheRange = true;
                verticalLines.push({
                    x: objectLeft - objectWidth / 2,
                    y1: (objectTop < activeObjectTop)
                        ? (objectTop - objectHeight / 2 - aligningLineOffset)
                        : (objectTop + objectHeight / 2 + aligningLineOffset),
                    y2: (activeObjectTop > objectTop)
                        ? (activeObjectTop + activeObjectHeight / 2 + aligningLineOffset)
                        : (activeObjectTop - activeObjectHeight / 2 - aligningLineOffset)
                });
                // activeObject.setPositionByOrigin(new fabric.Point(objectLeft - objectWidth / 2 + activeObjectWidth / 2, activeObjectTop), 'center', 'center');
            }

            // snap by the right edge
            if (isInRange(objectLeft + objectWidth / 2, activeObjectLeft + activeObjectWidth / 2)) {
                verticalInTheRange = true;
                verticalLines.push({
                    x: objectLeft + objectWidth / 2,
                    y1: (objectTop < activeObjectTop)
                        ? (objectTop - objectHeight / 2 - aligningLineOffset)
                        : (objectTop + objectHeight / 2 + aligningLineOffset),
                    y2: (activeObjectTop > objectTop)
                        ? (activeObjectTop + activeObjectHeight / 2 + aligningLineOffset)
                        : (activeObjectTop - activeObjectHeight / 2 - aligningLineOffset)
                });
                // activeObject.setPositionByOrigin(new fabric.Point(objectLeft + objectWidth / 2 - activeObjectWidth / 2, activeObjectTop), 'center', 'center');
            }
            // MIDDLE LINE FOR COMMON WIDTH
            if (isInRange(objectLeft + (objectWidth / 2), activeObjectLeft - activeObjectWidth / 2)) {
                verticalInTheRange = true;
                verticalLines.push({
                    x: objectLeft + objectWidth / 2,
                    y1: (objectTop < activeObjectTop)
                        ? (objectTop - objectHeight / 2)
                        : (objectTop + objectHeight / 2),
                    y2: (activeObjectTop > objectTop)
                        ? (activeObjectTop + activeObjectHeight / 2)
                        : (activeObjectTop - activeObjectHeight / 2),
                    inBetFlag:true
                });
                // activeObject.setPositionByOrigin({x:objectLeft + objectWidth / 2 + ((activeObjectWidth / 2)),y: activeObjectTop}, 'center', 'center');
            }
            // MIDDLE LINE FOR COMMON WIDTH
            if (isInRange(objectLeft - (objectWidth / 2), activeObjectLeft + activeObjectWidth / 2)) {
                verticalInTheRange = true;
                verticalLines.push({
                    x: objectLeft - (objectWidth / 2),
                    y1: (objectTop < activeObjectTop)
                        ? (objectTop - objectHeight / 2)
                        : (objectTop + objectHeight / 2),
                    y2: (activeObjectTop > objectTop)
                        ? (activeObjectTop + activeObjectHeight / 2)
                        : (activeObjectTop - activeObjectHeight / 2),
                    inBetFlag:true
                });
                // //SET POSITION FORCEFULLY AND MAKE GROUP
                // if (activeObject && activeObject.name === "left"){
                //     activeObject.setPositionByOrigin(new fabric.Point(currObject.left - activeObject.getScaledWidth(), activeObject.top), 'left', 'top');
                // }else if (activeObject && activeObject.name === "right"){
                //     activeObject.setPositionByOrigin(new fabric.Point(currObject.left + currObject.getScaledWidth(), activeObject.top), 'left', 'top');
                // }
                // activeObject.setPositionByOrigin({x:objectLeft - objectWidth / 2 - ((activeObjectWidth / 2)),y: activeObjectTop}, 'center', 'center');
                // let objs = [activeObject,canvasObjects[i]]
                // let numGroup = new fabric.Group(objs, {
                //     name: "group-rects",
                //     originX: 'center',
                //     originY: 'center',
                //     hasControls:false,
                //     hasBorders:true,
                // });
                // canvas.discardActiveObject();
                // canvas.remove(objs[0])
                // canvas.remove(objs[1])
                // canvas.add(numGroup);
            }
            // MIDDLE LINE FOR COMMON HEIGHT
            if (isInRange(objectTop - objectHeight/2, activeObjectTop + activeObjectHeight / 2)) {
                horizontalInTheRange = true;
                horizontalLines.push({
                    y: objectTop - objectHeight/2,
                    x1: (objectLeft < activeObjectLeft)
                        ? (objectLeft - objectWidth / 2)
                        : (objectLeft + objectWidth / 2),
                    x2: (activeObjectLeft > objectLeft)
                        ? (activeObjectLeft + activeObjectWidth / 2)
                        : (activeObjectLeft - activeObjectWidth / 2),
                    inBetFlag:true
                });
                // activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop - activeObject.getScaledHeight()), 'center', 'center');
            }
            // MIDDLE LINE FOR COMMON HEIGHT
            if (isInRange(objectTop + objectHeight/2, activeObjectTop - activeObjectHeight / 2)) {
                horizontalInTheRange = true;
                horizontalLines.push({
                    y: objectTop + objectHeight/2,
                    x1: (objectLeft < activeObjectLeft)
                        ? (objectLeft - objectWidth / 2)
                        : (objectLeft + objectWidth / 2),
                    x2: (activeObjectLeft > objectLeft)
                        ? (activeObjectLeft + activeObjectWidth / 2)
                        : (activeObjectLeft - activeObjectWidth / 2),
                    inBetFlag:true
                });
                // activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop - activeObject.getScaledHeight()), 'center', 'center');
            }

            // snap by the vertical center line
            if (isInRange(objectTop, activeObjectTop)) {
                horizontalInTheRange = true;
                horizontalLines.push({
                    y: objectTop,
                    x1: (objectLeft < activeObjectLeft)
                        ? (objectLeft - objectWidth / 2 - aligningLineOffset)
                        : (objectLeft + objectWidth / 2 + aligningLineOffset),
                    x2: (activeObjectLeft > objectLeft)
                        ? (activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset)
                        : (activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset)
                });
                // activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop), 'center', 'center');
            }

            // snap by the top edge
            if (isInRange(objectTop - objectHeight / 2, activeObjectTop - activeObjectHeight / 2)) {
                horizontalInTheRange = true;
                horizontalLines.push({
                    y: objectTop - objectHeight / 2,
                    x1: (objectLeft < activeObjectLeft)
                        ? (objectLeft - objectWidth / 2 - aligningLineOffset)
                        : (objectLeft + objectWidth / 2 + aligningLineOffset),
                    x2: (activeObjectLeft > objectLeft)
                        ? (activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset)
                        : (activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset)
                });
                // activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop - objectHeight / 2 + activeObjectHeight / 2), 'center', 'center');
            }

            // snap by the bottom edge
            if (isInRange(objectTop + objectHeight / 2, activeObjectTop + activeObjectHeight / 2)) {
                horizontalInTheRange = true;
                horizontalLines.push({
                    y: objectTop + objectHeight / 2,
                    x1: (objectLeft < activeObjectLeft)
                        ? (objectLeft - objectWidth / 2 - aligningLineOffset)
                        : (objectLeft + objectWidth / 2 + aligningLineOffset),
                    x2: (activeObjectLeft > objectLeft)
                        ? (activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset)
                        : (activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset)
                });
                // activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft, objectTop + objectHeight / 2 - activeObjectHeight / 2), 'center', 'center');
            }
        }

        if (!horizontalInTheRange) {
            horizontalLines.length = 0;
        }

        if (!verticalInTheRange) {
            verticalLines.length = 0;
        }
    }

    canvas.on('mouse:down', function () {
        viewportTransform = canvas.viewportTransform;
        zoom = canvas.getZoom();
    });
    canvas.on('object:moving', function(e) {
        objectSnapping(e.target)
    });

    canvas.on('object:scaling', function(e) {
        objectSnapping(e.target)
    });

    canvas.on('before:render', function() {
        canvas.clearContext(canvas.contextTop);
    });

    canvas.on('after:render', function() {
        for (var i = verticalLines.length; i--; ) {
            if (verticalLines[i].hasOwnProperty('inBetFlag')){
                drawVerticalLine(verticalLines[i],true);
            }else drawVerticalLine(verticalLines[i]);
        }
        for (var i = horizontalLines.length; i--; ) {
            if (horizontalLines[i].hasOwnProperty('inBetFlag')){
                drawHorizontalLine(horizontalLines[i],true);
            }else drawHorizontalLine(horizontalLines[i]);

        }

        verticalLines.length = horizontalLines.length = 0;
    });

    canvas.on('mouse:up', function() {
        verticalLines.length = horizontalLines.length = 0;
        canvas.renderAll();
    });
}
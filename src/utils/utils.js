import {fabric} from "fabric";
import {captureShots} from "./bounds";

export const drawObjectDimentions = (canvas) => {
    var ctx = canvas.getSelectionContext(),
        aligningLineColor = 'rgb(0,0,255)',
        zoom = 1;

    const drawVerticalLine = (coords) => {
        if (!coords) return;
        drawLine(coords);
    }


    function drawSimpleText(string, fontSize, color,x,y,type) {
        ctx.fillStyle = color;
        ctx.font = "bold " + fontSize.toString() + "px monospace";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(string, x, y);
    }

    function drawTextWithBG(string, fontSize, color,x,y,type) {
        var i = string.length, xOffset = fontSize * 0.75;

        if (type === "heightText") xOffset = fontSize * 0.2
        i = i * xOffset;
        if (i > canvas.width) {
            i = canvas.width;
        }
        var width = i,
            height = fontSize * 1.2;
        ctx.fillStyle = "RGBA(255, 255, 255,1)";
        ctx.fillRect(x - (i/2),y - (fontSize * 1.2)/2, width, height);
        ctx.font = "bold " + fontSize.toString() + "px monospace";
        ctx.fillStyle = color;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(string, x, y+1);
    }


    const drawText = (coords) => {
        if (!coords) return;
        const {x,y,type,text,fontSize=10}=coords;
        drawTextWithBG(text,fontSize,aligningLineColor,x,y,type)
    }
    const drawLine = (coords) => {
        if (!coords) return;
        const {mtx,mty,ltx,lty,mtx1,mty1,ltx1,lty1,mtx2,mty2,ltx2,lty2,isDashed}=coords;
        ctx.save();
        ctx.lineWidth = 0.6;
        ctx.strokeStyle = aligningLineColor;
        ctx.beginPath();
        isDashed && ctx.setLineDash([4,4])
        ctx.moveTo(mtx*zoom, mty * zoom);
        ctx.lineTo(ltx*zoom, lty*zoom);
        ctx.stroke();
        ctx.beginPath();
        isDashed && ctx.setLineDash([0,0])
        ctx.lineWidth=1.5
        ctx.moveTo(mtx1*zoom, mty1 * zoom);
        ctx.lineTo(ltx1*zoom, lty1*zoom);
        ctx.moveTo(mtx2*zoom, mty2 * zoom);
        ctx.lineTo(ltx2*zoom, lty2*zoom);
        ctx.stroke();
        ctx.restore();
    }
    const drawSimpleLine = (coords,color='',strokeWidth='') => {
        if (!coords) return;
        const {mtx,mty,ltx,lty}=coords;
        ctx.save();
        ctx.lineWidth = strokeWidth || 0.6;
        ctx.strokeStyle = color || aligningLineColor;
        ctx.beginPath();
        ctx.moveTo(mtx*zoom, mty * zoom);
        ctx.lineTo(ltx*zoom, lty*zoom);
        ctx.stroke();

        ctx.restore();
    }

    const touchInRange =(currObject,canvasObjects)=>{
        let objScaledWidth=currObject.getScaledWidth();
        const currObjLeft = currObject.left + objScaledWidth;
        for (let i=0; i<canvasObjects.length; i++){
            if (currObject.name === canvasObjects[i].name) continue;
            if (canvasObjects[i].left < currObjLeft + 3 && canvasObjects[i].left > currObjLeft - 3) {
                return {
                    flag: true,
                    x: canvasObjects[i].left
                };
            }
        }
        return {flag:false,targetObj:''};
    }
    const inRangeByHeight =(currObject,canvasObjects)=>{
        const currObjTop = currObject.top;
        for (let i=0; i<canvasObjects.length; i++){
            if (currObject.name === canvasObjects[i].name) continue;
            const objBottom = canvasObjects[i].top +canvasObjects[i].getScaledHeight();
            if (currObject.name !== "right" && objBottom > currObjTop - 3 && objBottom < currObjTop + 3){
                return {
                    flag: true,
                    x: canvasObjects[i].left,
                    y: canvasObjects[i].top
                };
            }
        }
        return {flag:false,x:'',y:''};
    }
    const getMaxObjectWidth =(currObject,canvasObjects,isHeight=false)=>{
        if (!canvasObjects || !canvasObjects.length) return
        let maxRight = canvasObjects[0].left + canvasObjects[0].getScaledWidth();
        for (let i=0; i<canvasObjects.length; i++) {
            let objScaledWidth = canvasObjects[i].getScaledWidth()
            const objRight = canvasObjects[i].left + objScaledWidth;
            if (objRight > maxRight) maxRight = objRight;
        }
        return maxRight;
    }
    const getMaxObjectHeight =(currObject,canvasObjects,isHeight=false)=>{
        if (!canvasObjects || !canvasObjects.length) return
        let maxRight = canvasObjects[0].left + canvasObjects[0].getScaledWidth();
        let maxTop = canvasObjects[0].top + canvasObjects[0].getScaledHeight();
        for (let i=0; i<canvasObjects.length; i++) {
            let objScaledWidth = canvasObjects[i].getScaledWidth()
            let objScaledHeight = canvasObjects[i].getScaledHeight()
            const objRight = canvasObjects[i].left + objScaledWidth;
            const objTop = canvasObjects[i].top + objScaledHeight;
            if (objTop > maxTop) maxTop = objTop;
            if (objRight > maxRight) maxRight = objRight;
        }
        if (isHeight) return maxTop;
        else return maxRight;
    }



    var objectLineValues =[],
        commonWidthLines = [],
        commonHeightLines = [],
        innerRectLines = [],
        widthLine = null,
        heightLine = null,
        widthDashed = null,
        heightDashed = null,
        widthText = null,
        heightText = null,
        inText,outText,inOutLine,
        commonWidth = null,
        middleFrameName,
        framesNames=[],
        commonHeight = null;

    const nameConver = {
        'left':'F1',
        'right':'F2',
        'top':'F3',
    }
    const checkObjectInRange=(actObject,canvasObjs)=>{
        if (!actObject) return;
        let statusValue = {left:true,right:true,top:true,bottom:true};

        for (let i=0; i<canvasObjs.length; i++) {
            let obj = canvasObjs[i]
            if (actObject === obj) continue;
            const actObjLeft = actObject.left,
                actObjTop = actObject.top,
                objScaledW = obj.getScaledWidth(),
                objScaledH = obj.getScaledHeight(),
                scaledW = actObject.getScaledWidth(),
                scaledH = actObject.getScaledHeight(),
                spaceOffset = 3;
            if (actObjLeft < obj.left + objScaledW + spaceOffset && actObjLeft > obj.left + objScaledW - spaceOffset && (actObjTop > obj.top - objScaledH && actObjTop < obj.top + objScaledH)) {
                console.log("left")
                statusValue.left = false;
            }
            if (actObjLeft + scaledW < obj.left + spaceOffset && actObjLeft + scaledW > obj.left - spaceOffset && (actObjTop > obj.top - objScaledH && actObjTop < obj.top + objScaledH)) {
                console.log("right")
                statusValue.right = false;
            }
            if (actObjTop + scaledH < obj.top + spaceOffset && actObjTop + scaledH > obj.top - spaceOffset && (actObjLeft > obj.left - objScaledW && actObjLeft < obj.left + objScaledW)) {
                statusValue.top = false;
            }
            if (actObjTop > obj.top + objScaledH - spaceOffset && actObjTop < obj.top + objScaledH + spaceOffset && (actObjLeft > obj.left - objScaledW && actObjLeft < obj.left + objScaledW)) {
                statusValue.bottom = false;
            }
        }
        return statusValue;

    }
    const updateDimensionValuesAct =()=>{
        if (!canvas) return;
        var currObject = canvas.getActiveObject(),
            canvasObjects = canvas.getObjects(),
            nodeOffset = 3.5,
            paddingFactor = 10;
        if (!currObject && currObject?.type !== "rect") return;
        let objScaledWidth=currObject.getScaledWidth(),
            objScaledHeight=currObject.getScaledHeight();

        //Check frame side availability
        let objectInRange = checkObjectInRange(currObject,canvasObjects);

        if (!objectInRange) objectInRange = checkObjectInRange(currObject,canvasObjects);
        if (!objectInRange) return;

        let lineFactor = paddingFactor * 1.5;
        if (currObject.name === 'left'){
            //Draw Inside/Outside text
            let x = currObject.left - 60;
            let y = currObject.top + objScaledHeight + (paddingFactor * 4.5);
            outText = {x:x + 15,y:y - 6,text:'OUTSIDE',fontSize:8,type:'OUTSIDE'};
            inOutLine = {mtx: x,mty:y,ltx: x + 30,lty:y};
            inText = {x:x+15,y:y+6,text:'INSIDE',fontSize:8,type:'INSIDE'};
        }


        // WIDTH TEXT
        if (objectInRange.bottom){
            widthText = {
                x:currObject.left + (objScaledWidth/2),
                y:currObject.top + objScaledHeight + lineFactor,
                text:Math.trunc(objScaledWidth).toString(),
                type:'widthText',
            }
        }
        if (objectInRange.top && !objectInRange.bottom){
            widthText = {
                x:currObject.left + (objScaledWidth/2),
                y:currObject.top - lineFactor,
                text:Math.trunc(objScaledWidth).toString(),
                type:'widthText',
            }
        }




        // HEIGHT TEXT
        if (objectInRange.left){
            heightText = {
                x:currObject.left - lineFactor,
                y:currObject.top + (objScaledHeight/2),
                text:Math.trunc(objScaledHeight).toString(),
                type:'heightText',
            }
        }
        if (objectInRange.right && !objectInRange.left){
            heightText = {
                x:currObject.left + objScaledWidth + lineFactor,
                y:currObject.top + (objScaledHeight/2),
                text:Math.trunc(objScaledHeight).toString(),
                type:'heightText',
            }
        }


        let yPos = currObject.top + objScaledHeight + lineFactor;

        widthLine = {
            mtx: currObject.left,
            mty:yPos,
            ltx: currObject.left + objScaledWidth,
            lty:yPos,
            mtx1:currObject.left,
            mty1:yPos - nodeOffset,
            ltx1:currObject.left,
            lty1:yPos + nodeOffset,
            mtx2:currObject.left + objScaledWidth,
            mty2:yPos - nodeOffset,
            ltx2:currObject.left + objScaledWidth,
            lty2:yPos + nodeOffset,
            isDashed:false
        };

        lineFactor = paddingFactor * 4.5;
        yPos = currObject.top + objScaledHeight + lineFactor;
        widthDashed = {
            mtx: currObject.left,
            mty:yPos,
            ltx: currObject.left + objScaledWidth,
            lty:yPos,
            mtx1:currObject.left,
            mty1:yPos - nodeOffset,
            ltx1:currObject.left,
            lty1:yPos + nodeOffset,
            mtx2:currObject.left + objScaledWidth,
            mty2:yPos - nodeOffset,
            ltx2:currObject.left + objScaledWidth,
            lty2:yPos + nodeOffset,
            isDashed:true
        };

        if (objectInRange.top && !objectInRange.bottom){
            yPos = currObject.top - paddingFactor * 1.5;
            widthText.y = yPos;
            widthLine = {
                ...widthLine,
                mty:yPos,
                lty:yPos,
                mty1:yPos - nodeOffset,
                lty1:yPos + nodeOffset,
                mty2:yPos - nodeOffset,
                lty2:yPos + nodeOffset,
            }

            widthDashed = null;
        }

        lineFactor = paddingFactor * 1.5;
        yPos = currObject.top + objScaledHeight;
        heightLine = {
            mtx: currObject.left - lineFactor,
            mty:yPos,
            ltx: currObject.left - lineFactor,
            lty:currObject.top,
            mtx1:currObject.left - lineFactor - nodeOffset,
            mty1:yPos,
            ltx1:currObject.left - lineFactor + nodeOffset,
            lty1:yPos,
            mtx2:currObject.left - lineFactor - nodeOffset,
            mty2:currObject.top,
            ltx2:currObject.left - lineFactor + nodeOffset,
            lty2:currObject.top,
            isDashed:false
        };
        lineFactor = paddingFactor * 4.5;

        if (objectInRange.right && !objectInRange.left){
            heightText.x = currObject.left + objScaledWidth + paddingFactor * 1.5;
            lineFactor = paddingFactor * 1.5;
            let leftVal = currObject.left + objScaledWidth + lineFactor;
            heightLine = {
                ...heightLine,
                mtx: leftVal,
                ltx: leftVal,
                mtx1:leftVal - nodeOffset,
                ltx1:leftVal + nodeOffset,
                mtx2:leftVal - nodeOffset,
                ltx2:leftVal + nodeOffset,
            };
            lineFactor = paddingFactor * 3;
            leftVal = currObject.left + objScaledWidth + lineFactor;
            heightDashed = {
                ...heightDashed,
                mtx: leftVal,
                ltx: leftVal,
                mtx1:leftVal - nodeOffset,
                ltx1:leftVal + nodeOffset,
                mtx2:leftVal - nodeOffset,
                ltx2:leftVal + nodeOffset,
            };
        }
        //COMMON WIDTH
        const {flag,x}=touchInRange(currObject,canvasObjects);
        if (flag && x !== ''){
            let yPosi = currObject.top + objScaledHeight + paddingFactor * 3;
            const scaledWidth = getMaxObjectWidth(currObject,canvasObjects);
            commonWidth = {
                mtx: currObject.left,
                mty:yPosi,
                ltx: scaledWidth,
                lty:yPosi,
                mtx1:currObject.left,
                mty1:yPosi - nodeOffset,
                ltx1:currObject.left,
                lty1:yPosi + nodeOffset,
                mtx2:scaledWidth,
                mty2:yPosi - nodeOffset,
                ltx2:scaledWidth,
                lty2:yPosi + nodeOffset,
                isDashed:false
            };
            // TEXT
            const commonText = {
                x:currObject.left + objScaledWidth,
                y:currObject.top + objScaledHeight + paddingFactor * 3,
                text:Math.trunc(objScaledWidth + scaledWidth).toString(),
                type:'commonWidthText',
            }
            commonWidthLines.push({lines:[commonWidth],texts:[commonText]})

        }else commonWidthLines.length = 0;

        const inRanged = inRangeByHeight(currObject,canvasObjects);
        if (inRanged.flag && inRanged.y !== ''){
            lineFactor = paddingFactor * 3;
            yPos = currObject.top + objScaledHeight;
            const scaledHeight = getMaxObjectHeight(currObject,canvasObjects,true);
            commonHeight = {
                mtx: currObject.left - lineFactor,
                mty:yPos,
                ltx: currObject.left - lineFactor,
                lty:inRanged.y,
                mtx1:currObject.left - lineFactor - nodeOffset,
                mty1:yPos,
                ltx1:currObject.left - lineFactor + nodeOffset,
                lty1:yPos,
                mtx2:currObject.left - lineFactor - nodeOffset,
                mty2:inRanged.y,
                ltx2:currObject.left - lineFactor + nodeOffset,
                lty2:inRanged.y,
                isDashed:false
            };
            // TEXT
            const commonText = {
                x:currObject.left - lineFactor,
                y:currObject.top,
                text:Math.trunc(objScaledWidth + scaledHeight).toString(),
                type:'commonWidthText',
            }
            commonHeightLines.push({lines:[commonHeight],texts:[commonText]})
        }else commonHeightLines.length = 0;

        objectLineValues.push({id:'gh',lines:[widthLine,heightLine,widthDashed],texts:[widthText,heightText]})
    }

    const updateDimensionValues =()=>{
        if (!canvas) return;
        var activeObject = canvas.getActiveObject(),
            canvasObjects = canvas.getObjects(),
            nodeOffset = 3.5,
            paddingFactor = 10;

        if (activeObject && activeObject.left <= 0){
            activeObject.setPositionByOrigin({x:0,y:activeObject.getScaledHeight()},'left','top');
            canvas.renderAll();
            return;
        }

        objectLineValues.length =innerRectLines.length = framesNames.length = 0;
        for (let i=0; i<canvasObjects.length; i++){
            let obj = canvasObjects[i]
            if (obj.type !== 'rect') continue;
            const scaledW = obj.getScaledWidth(),
                scaledH = obj.getScaledHeight();
            // WIDTH TEXT
            middleFrameName = {
                x:obj.left + (scaledW/2),
                y:obj.top + (scaledH/2),
                text:nameConver[obj.name] || "F" ,
                type:`${obj.name}Text`,
            }
            framesNames.push(middleFrameName);
            innerRectLines.push({coords:[
                    {mtx:obj.left, mty:obj.top, ltx:obj.left + 10, lty:obj.top+10},
                    {mtx:obj.left,mty:obj.top + scaledH,ltx:obj.left+10,lty:obj.top + scaledH - 10},
                    {mtx:obj.left + scaledW,mty:obj.top,ltx:obj.left + scaledW - 10,lty:obj.top+10},
                    {mtx:obj.left + scaledW,mty:obj.top + scaledH,ltx:obj.left + scaledW - 10,lty:obj.top + scaledH -10}
                ],strokeColor:'purple',strokeWidth:1});
        }
        for (var i = canvasObjects.length; i--; ) {
            let currObject = canvasObjects[i];
            if (currObject.type !== 'rect') continue;
            // if (activeObject === currObject) {
            //     updateDimensionValuesAct()
            //     continue;
            // }
            let objScaledWidth=currObject.getScaledWidth(),
                objScaledHeight=currObject.getScaledHeight();
            let lineFactor = paddingFactor * 1.5;
            if (currObject.name === 'left'){
                //Draw Inside/Outside text
                let x = currObject.left - 60;
                let y = currObject.top + objScaledHeight + (paddingFactor * 4.5);
                outText = {x:x + 15,y:y - 6,text:'OUTSIDE',fontSize:8,type:'OUTSIDE'};
                inOutLine = {mtx: x,mty:y,ltx: x + 30,lty:y};
                inText = {x:x+15,y:y+6,text:'INSIDE',fontSize:8,type:'INSIDE'};
            }


            // WIDTH TEXT
            widthText = {
                x:currObject.left + (objScaledWidth/2),
                y:currObject.top + objScaledHeight + lineFactor,
                text:Math.trunc(objScaledWidth).toString(),
                type:'widthText',
            }

            // HEIGHT TEXT
            heightText = {
                x:currObject.left - lineFactor,
                y:currObject.top + (objScaledHeight/2),
                text:Math.trunc(objScaledHeight).toString(),
                type:'heightText',
            }

            let yPos = currObject.top + objScaledHeight + lineFactor;

            widthLine = {
                mtx: currObject.left,
                mty:yPos,
                ltx: currObject.left + objScaledWidth,
                lty:yPos,
                mtx1:currObject.left,
                mty1:yPos - nodeOffset,
                ltx1:currObject.left,
                lty1:yPos + nodeOffset,
                mtx2:currObject.left + objScaledWidth,
                mty2:yPos - nodeOffset,
                ltx2:currObject.left + objScaledWidth,
                lty2:yPos + nodeOffset,
                isDashed:false
            };

            lineFactor = paddingFactor * 4.5;
            yPos = currObject.top + objScaledHeight + lineFactor;
            widthDashed = {
                mtx: currObject.left,
                mty:yPos,
                ltx: currObject.left + objScaledWidth,
                lty:yPos,
                mtx1:currObject.left,
                mty1:yPos - nodeOffset,
                ltx1:currObject.left,
                lty1:yPos + nodeOffset,
                mtx2:currObject.left + objScaledWidth,
                mty2:yPos - nodeOffset,
                ltx2:currObject.left + objScaledWidth,
                lty2:yPos + nodeOffset,
                isDashed:true
            };

            if (currObject.name === 'top'){
                yPos = currObject.top - paddingFactor * 1.5;
                widthText.y = yPos;
                widthLine = {
                    ...widthLine,
                    mty:yPos,
                    lty:yPos,
                    mty1:yPos - nodeOffset,
                    lty1:yPos + nodeOffset,
                    mty2:yPos - nodeOffset,
                    lty2:yPos + nodeOffset,
                }

                // yPos = currObject.top - lineFactor;

                widthDashed = null;
            }

            lineFactor = paddingFactor * 1.5;
            yPos = currObject.top + objScaledHeight;
            heightLine = {
                mtx: currObject.left - lineFactor,
                mty:yPos,
                ltx: currObject.left - lineFactor,
                lty:currObject.top,
                mtx1:currObject.left - lineFactor - nodeOffset,
                mty1:yPos,
                ltx1:currObject.left - lineFactor + nodeOffset,
                lty1:yPos,
                mtx2:currObject.left - lineFactor - nodeOffset,
                mty2:currObject.top,
                ltx2:currObject.left - lineFactor + nodeOffset,
                lty2:currObject.top,
                isDashed:false
            };
            lineFactor = paddingFactor * 4.5;
            // heightDashed = {
            //     mtx: currObject.left - lineFactor,
            //     mty:yPos,
            //     ltx: currObject.left - lineFactor,
            //     lty:currObject.top,
            //     mtx1:currObject.left - lineFactor - nodeOffset,
            //     mty1:yPos,
            //     ltx1:currObject.left - lineFactor + nodeOffset,
            //     lty1:yPos,
            //     mtx2:currObject.left - lineFactor - nodeOffset,
            //     mty2:currObject.top,
            //     ltx2:currObject.left - lineFactor + nodeOffset,
            //     lty2:currObject.top,
            //     isDashed:true
            // };
            if (currObject.name === 'right'){
                heightText.x = currObject.left + objScaledWidth + paddingFactor * 1.5;
                lineFactor = paddingFactor * 1.5;
                let leftVal = currObject.left + objScaledWidth + lineFactor;
                heightLine = {
                    ...heightLine,
                    mtx: leftVal,
                    ltx: leftVal,
                    mtx1:leftVal - nodeOffset,
                    ltx1:leftVal + nodeOffset,
                    mtx2:leftVal - nodeOffset,
                    ltx2:leftVal + nodeOffset,
                };
                lineFactor = paddingFactor * 3;
                leftVal = currObject.left + objScaledWidth + lineFactor;
                heightDashed = {
                    ...heightDashed,
                    mtx: leftVal,
                    ltx: leftVal,
                    mtx1:leftVal - nodeOffset,
                    ltx1:leftVal + nodeOffset,
                    mtx2:leftVal - nodeOffset,
                    ltx2:leftVal + nodeOffset,
                };
            }
            //COMMON WIDTH
            const {flag,x}=touchInRange(currObject,canvasObjects);
            if (flag && x !== ''){
                let yPosi = currObject.top + objScaledHeight + paddingFactor * 3;
                const scaledWidth = getMaxObjectWidth(currObject,canvasObjects);
                commonWidth = {
                    mtx: currObject.left,
                    mty:yPosi,
                    ltx: scaledWidth,
                    lty:yPosi,
                    mtx1:currObject.left,
                    mty1:yPosi - nodeOffset,
                    ltx1:currObject.left,
                    lty1:yPosi + nodeOffset,
                    mtx2:scaledWidth,
                    mty2:yPosi - nodeOffset,
                    ltx2:scaledWidth,
                    lty2:yPosi + nodeOffset,
                    isDashed:false
                };
                // TEXT
                const commonText = {
                    x:currObject.left + objScaledWidth,
                    y:currObject.top + objScaledHeight + paddingFactor * 3,
                    text:Math.trunc(objScaledWidth + scaledWidth).toString(),
                    type:'commonWidthText',
                }
                commonWidthLines.push({lines:[commonWidth],texts:[commonText]})

            }else commonWidthLines.length = 0;

            const inRanged = inRangeByHeight(currObject,canvasObjects);
            if (inRanged.flag && inRanged.y !== ''){
                lineFactor = paddingFactor * 3;
                yPos = currObject.top + objScaledHeight;
                const scaledHeight = getMaxObjectHeight(currObject,canvasObjects,true);
                commonHeight = {
                    mtx: currObject.left - lineFactor,
                    mty:yPos,
                    ltx: currObject.left - lineFactor,
                    lty:inRanged.y,
                    mtx1:currObject.left - lineFactor - nodeOffset,
                    mty1:yPos,
                    ltx1:currObject.left - lineFactor + nodeOffset,
                    lty1:yPos,
                    mtx2:currObject.left - lineFactor - nodeOffset,
                    mty2:inRanged.y,
                    ltx2:currObject.left - lineFactor + nodeOffset,
                    lty2:inRanged.y,
                    isDashed:false
                };
                // TEXT
                const commonText = {
                    x:currObject.left - lineFactor,
                    y:currObject.top,
                    text:Math.trunc(objScaledWidth + scaledHeight).toString(),
                    type:'commonWidthText',
                }
                commonHeightLines.push({lines:[commonHeight],texts:[commonText]})
            }else commonHeightLines.length = 0;

            objectLineValues.push({id:i,lines:[widthLine,heightLine,widthDashed],texts:[widthText,heightText]})


        }

    }

    // canvas.on('mouse:down', function () {
    //     viewportTransform = canvas.viewportTransform;
    //     zoom = canvas.getZoom();
    // });
    canvas.on('object:added', function(e) {
        updateDimensionValues();
    });
    canvas.on('object:moving', function(e) {
        if (e.target && e.target.left <= 0){
            e.target.setPositionByOrigin({x:0,y:e.target.getScaledHeight()},'left','top');
            canvas.renderAll();
            return;
        }
        updateDimensionValues();
    });
    canvas.on('object:scaling', function(e) {
        updateDimensionValues();
    });

    canvas.on('before:render', function() {
        canvas.clearContext(canvas.contextTop);
    });

    canvas.on('after:render', function() {
        for (let i=0; i<objectLineValues.length; i++){
            const {id,lines,texts} = objectLineValues[i];
            if (!lines || !texts) return;
            for (let j=0; j<lines.length; j++){
                drawVerticalLine(lines[j])
            }
            for (let j=0; j<texts.length; j++){
                drawText(texts[j])
            }
        }
        for (let i=0; i<commonWidthLines.length; i++){
            const {lines,texts} = commonWidthLines[i];
            if (!lines || !texts) return;
            for (let j=0; j<lines.length; j++){
                drawVerticalLine(lines[j])
            }
            for (let j=0; j<texts.length; j++){
                drawText(texts[j])
            }
        }
        for (let i=0; i<commonHeightLines.length; i++){
            const {lines,texts} = commonHeightLines[i];
            if (!lines || !texts) return;
            for (let j=0; j<lines.length; j++){
                drawVerticalLine(lines[j])
            }
            for (let j=0; j<texts.length; j++){
                drawText(texts[j])
            }
        }
        drawText(outText)
        drawSimpleLine(inOutLine)
        drawText(inText)
        for (let i=0; i<innerRectLines.length; i++){
            const {coords,strokeColor,strokeWidth} = innerRectLines[i];
            for (let j=0; j<coords.length; j++) {
                drawSimpleLine(coords[j],strokeColor,strokeWidth);
            }

        }
        for (let i=0; i<framesNames.length; i++){
            const {x,y,type,text,fontSize=10}=framesNames[i];
            drawSimpleText(text,fontSize,'#fff',x,y,type)
        }


    });
}
export const getCanvas=(containerDimensions)=>{
    let height = Math.ceil(containerDimensions.height);
    let width = Math.ceil(containerDimensions.width);
    if(height % 2 != 0)
        height += 1;
    if(width % 2 != 0)
        width += 1;
    const canvas = new fabric.Canvas("canvas", {
        targetFindTolerance: 10,
        selection: true,
        preserveObjectStacking: true,
        width:width,
        height:height,
        backgroundColor:'white'
    });
    return canvas;
}

export const canvasBackgroundImage = (url, type, canvas, callback, images) => {
    import(`../assets/images/SportsImages/largeImages/${url}.${type}`).then(srcSprite => {
        let img = new Image();
        img.onload = function () {
            canvas.setBackgroundImage(img.currentSrc, () => {
                canvas.requestRenderAll();
                callback && callback(canvas, images)
            }, {
                name:url,
                left:canvas.width/2,
                top:canvas.height/2,
                originX: 'center',
                originY: 'center',
                scaleX: (canvas.width / canvas.getZoom()) / img.width,
                scaleY: (canvas.height / canvas.getZoom()) / img.height/2,
                crossOrigin: 'anonymous'
            })
        };
        img.src = srcSprite.default;
    });
}
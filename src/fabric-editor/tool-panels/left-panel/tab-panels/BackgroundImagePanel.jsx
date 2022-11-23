import React from "react";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab';
import {setImages} from "../../../actions";
import {captureShots} from "../../../../utils/bounds";
import {canvasBackgroundImage} from "../../../../utils/utils";

const BackgroundImagePanel = () =>{
    const dispatch = useDispatch()
    const canvas = useSelector(state => state.canvas)
    const updateImages = (images)=>{
        let img1 = images.find(f=>f.name === 'rect1')
        let img2 = images.find(f=>f.name === 'rect2')
        let img3 = images.find(f=>f.name === 'rect3')
        let img4 = images.find(f=>f.name === 'rect4')
        dispatch(setImages([img1,img2,img3,img4]))
    }

    let canvasBackgroundImages = [
        {
            imgUrl: "ballet",
            class:"background_ballet"
        },
        {
            imgUrl: "baseball",
            class:"background_baseball"
        },
        {
            imgUrl: "basketball",
            class:"background_basketball"
        },
        {
            imgUrl: "cycling",
            class:"background_cycling"
        },
        {
            imgUrl: "football",
            class:"background_football"
        },
        {
            imgUrl: "golf",
            class:"background_golf"
        },
        {
            imgUrl: "gymnastics",
            class:"background_gymnastics"
        },
        {
            imgUrl: "skiing",
            class:"background_skiing"
        },
        {
            imgUrl: "horseback",
            class:"background_horseback"
        },
        {
            imgUrl: "skateboarding",
            class:"background_skateboarding"
        },
        {
            imgUrl: "skating",
            class:"background_skating"
        },
        {
            imgUrl: "snowboarding",
            class:"background_snowboarding"
        },
        {
            imgUrl: "golf",
            class:"background_golf"
        },
        {
            imgUrl: "soccer",
            class:"background_soccer"
        },
        {
            imgUrl: "surfing",
            class:"background_surfing"
        },
        {
            imgUrl: "tennis",
            class:"background_tennis"
        },
        {
            imgUrl: "volleyball",
            class:"background_volleyball"
        }
    ];
    let canvasBackgroundImages1 = [
        {
            imgUrl: "Avocado",
            class:"background_Avocado"
        },
        {
            imgUrl: "baby",
            class:"background_baby"
        },
        {
            imgUrl: "Cactae",
            class:"background_Cactae"
        },
        {
            imgUrl: "cats",
            class:"background_cats"
        },
        {
            imgUrl: "cellos",
            class:"background_cellos"
        },
        {
            imgUrl: "Cherries",
            class:"background_Cherries"
        },
        {
            imgUrl: "Chocolate",
            class:"background_Chocolate"
        },
        {
            imgUrl: "dad",
            class:"background_dad"
        },
        {
            imgUrl: "dogs",
            class:"background_dogs"
        },
        {
            imgUrl: "flying",
            class:"background_flying"
        },
        {
            imgUrl: "itsaboy",
            class:"background_itsaboy"
        },
        {
            imgUrl: "itsagirl",
            class:"background_itsagirl"
        },
        {
            imgUrl: "Lightning",
            class:"background_Lightning"
        },
        {
            imgUrl: "Musical",
            class:"background_Musical"
        },
        {
            imgUrl: "robots",
            class:"background_robots"
        },
        {
            imgUrl: "skulbunny",
            class:"background_skulbunny"
        },
        {
            imgUrl: "tvs",
            class:"background_tvs"
        },
    ];

    const backgroundImage= (url) => {
        canvasBackgroundImage(url, 'png', canvas, captureShots, updateImages)
    }

    return(
        <div className="background_panel_wrapper">
            <span className="formatted_title">3. Choose Background Art</span>
            <div className="background_images_wrapper">
                <Tabs
                    defaultActiveKey="Sports"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="Sports" title="Sports">
                        {canvasBackgroundImages.map(m=>
                            <div onClick={()=>{backgroundImage(m.imgUrl)}} className={`lamp_background ${m.class}`}/>
                        )}
                    </Tab>
                    <Tab eventKey="Various" title="Various">
                        {canvasBackgroundImages1.map(m=>
                            <div onClick={()=>{backgroundImage(m.imgUrl)}} className={`lamp_background ${m.class}`}/>
                        )}
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default BackgroundImagePanel
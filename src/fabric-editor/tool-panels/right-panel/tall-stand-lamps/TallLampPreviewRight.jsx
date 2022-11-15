import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const TallLampPreviewRight = () => {
    const images = useSelector(state => state.images)
    const trimColor = useSelector(state => state.trimColor)
    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>
            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M305 584H169V612C169 612 178.5 629 237 629C295.5 629 305 612 305 612V584Z" fill="url(#paint0_linear_12_104)"/>
                <ellipse cx="237" cy="583.5" rx="68" ry="17.5" fill="url(#paint1_radial_12_104)"/>
                <ellipse cx="237" cy="583.5" rx="68" ry="17.5" fill="url(#paint2_linear_12_104)" fill-opacity="0.2"/>
                <rect x="232" y="312" width="10" height="272" fill="url(#paint3_linear_12_104)"/>
                <image href={images.length ? images[2].url : ''} x="140" y="42" width="196" height="264"preserveAspectRatio="none"/>
                <path d="M180.169 33.8496C153.819 36.006 141.837 37.5818 138.799 41.2106C136.311 44.1832 136.944 51.1037 137.536 52.0817C138.01 52.864 138.503 52.6975 138.799 52.7789C138.799 50.2142 140.003 49.1478 140.793 48.6588C148.888 45.3579 170.399 44.2925 180.169 43.5591C238.76 39.8935 270.722 42.22 289.092 43.5571L289.12 43.5591L289.793 43.6081C313.986 45.3689 322.253 45.9706 332.854 48.0295C336.116 48.6629 336.116 52.3515 336.116 52.7789C337.063 51.801 337.464 51.5577 337.761 50.3364C338.058 49.1151 338.798 41.7958 334.417 40.0147C325.843 36.529 313.989 36.05 289.12 33.8496C263.889 31.6172 213.032 31.1602 180.169 33.8496Z" fill={trimColor}/>
                <path d="M180.169 312.15C153.819 309.994 141.837 308.418 138.799 304.789C136.311 301.817 136.944 294.896 137.536 293.918C138.01 293.136 138.503 293.303 138.799 293.221C138.799 295.786 140.003 296.852 140.793 297.341C148.888 300.642 170.399 301.707 180.169 302.441C238.76 306.106 270.722 303.78 289.092 302.443L289.12 302.441L289.793 302.392C313.986 300.631 322.253 300.029 332.854 297.971C336.116 297.337 336.116 293.649 336.116 293.221C337.063 294.199 337.464 294.442 337.761 295.664C338.058 296.885 338.798 304.204 334.417 305.985C325.843 309.471 313.989 309.95 289.12 312.15C263.889 314.383 213.032 314.84 180.169 312.15Z" fill={trimColor}/>
                <defs>
                    <linearGradient id="paint0_linear_12_104" x1="169" y1="607" x2="305" y2="607" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DEDEDE"/>
                        <stop offset="0.161458" stop-color="#ECECEC"/>
                        <stop offset="0.265625" stop-color="#ECECEC"/>
                        <stop offset="0.341506" stop-color="#EDEDED"/>
                        <stop offset="0.427083" stop-color="#EDEDED"/>
                        <stop offset="0.557292" stop-color="#EFEFEF"/>
                        <stop offset="0.658722" stop-color="#F1F1F1"/>
                        <stop offset="0.722729" stop-color="#F0F0F0"/>
                        <stop offset="0.801455" stop-color="#EBEBEB"/>
                        <stop offset="0.847739" stop-color="#EBEBEB"/>
                        <stop offset="0.926113" stop-color="#E3E3E3"/>
                        <stop offset="0.975175" stop-color="#DAD9D9"/>
                        <stop offset="1" stop-color="#C4C2C1"/>
                    </linearGradient>
                    <radialGradient id="paint1_radial_12_104" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(237 583.5) rotate(90) scale(17.5 68)">
                        <stop stop-color="#C4C4C4"/>
                        <stop offset="0.177083" stop-color="#E1E1E1"/>
                        <stop offset="0.328125" stop-color="#E7E7E7"/>
                        <stop offset="0.5" stop-color="#E3E3E3"/>
                        <stop offset="0.640625" stop-color="#E6E6E6"/>
                        <stop offset="0.770833" stop-color="#E6E6E6"/>
                        <stop offset="0.880208" stop-color="#E4E4E4"/>
                        <stop offset="0.963542" stop-color="#EFEFEF"/>
                        <stop offset="1" stop-color="#F3F0F0"/>
                    </radialGradient>
                    <linearGradient id="paint2_linear_12_104" x1="237" y1="569" x2="237" y2="595.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BABABA"/>
                        <stop offset="0.318728" stop-color="#DDDDDC"/>
                        <stop offset="0.591727" stop-color="#E2E2E2"/>
                        <stop offset="1" stop-color="#E9E9E9"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_12_104" x1="232" y1="448" x2="242" y2="448" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CCCCCC"/>
                        <stop offset="0.213542" stop-color="#CCCCCC"/>
                        <stop offset="0.390625" stop-color="#D9D7D5"/>
                        <stop offset="0.713542" stop-color="#F1F0EE"/>
                        <stop offset="1" stop-color="#E4E3DF"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_12_104" x1="138.783" y1="173.589" x2="336.124" y2="173.589" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EEEEEE"/>
                        <stop offset="0.307292" stop-color="#FCFCFC"/>
                        <stop offset="0.682292" stop-color="#F9F9F9"/>
                        <stop offset="1" stop-color="#F2F2F2"/>
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}
export default TallLampPreviewRight;
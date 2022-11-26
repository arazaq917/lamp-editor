import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const BlackLampPreview = ({index}) => {
    const images = useSelector(state => state.images)
    const trimColor = useSelector(state => state.trimColor)

    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>
            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M306 584H170V612C170 612 179.5 629 238 629C296.5 629 306 612 306 612V584Z" fill={`url(#paint0_linear_12_83${index})`}/>
                <ellipse cx="238" cy="583.5" rx="68" ry="17.5" fill={`url(#paint1_radial_12_83${index})`}/>
                <rect x="233" y="312" width="10" height="272" fill={`url(#paint2_linear_12_83${index})`}/>
                <path d="M138.783 42.0927L138.783 304.501H336.101L336.124 42.0927L138.783 42.0927Z" fill={`url(#paint3_linear_12_83)`}/>
                <image href={images.length ? images[index].url : ''} x="140" y="42" width="196" height="264"preserveAspectRatio="none"/>
                <path d="M180.169 33.8496C153.819 36.006 141.837 37.5818 138.799 41.2106C136.311 44.1832 136.944 51.1037 137.536 52.0817C138.01 52.864 138.503 52.6975 138.799 52.7789C138.799 50.2142 140.003 49.1478 140.793 48.6588C148.888 45.3579 170.399 44.2925 180.169 43.5591C238.76 39.8935 270.722 42.22 289.092 43.5571L289.12 43.5591L289.793 43.6081C313.986 45.3689 322.253 45.9706 332.854 48.0295C336.116 48.6629 336.116 52.3515 336.116 52.7789C337.063 51.801 337.464 51.5577 337.761 50.3364C338.058 49.1151 338.798 41.7958 334.417 40.0147C325.843 36.529 313.989 36.05 289.12 33.8496C263.889 31.6172 213.032 31.1602 180.169 33.8496Z" fill={trimColor}/>
                <path d="M180.169 312.15C153.819 309.994 141.837 308.418 138.799 304.789C136.311 301.817 136.944 294.896 137.536 293.918C138.01 293.136 138.503 293.303 138.799 293.221C138.799 295.786 140.003 296.852 140.793 297.341C148.888 300.642 170.399 301.707 180.169 302.441C238.76 306.106 270.722 303.78 289.092 302.443L289.12 302.441L289.793 302.392C313.986 300.631 322.253 300.029 332.854 297.971C336.116 297.337 336.116 293.649 336.116 293.221C337.063 294.199 337.464 294.442 337.761 295.664C338.058 296.885 338.798 304.204 334.417 305.985C325.843 309.471 313.989 309.95 289.12 312.15C263.889 314.383 213.032 314.84 180.169 312.15Z" fill={trimColor}/>
                <defs>
                    <linearGradient id={`paint0_linear_12_83${index}`} x1="170" y1="607" x2="306" y2="607" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#606161"/>
                        <stop offset="0.161458" stop-color="#424345"/>
                        <stop offset="0.265625" stop-color="#2B2C2E"/>
                        <stop offset="0.3125" stop-color="#2D2E30"/>
                        <stop offset="0.427083" stop-color="#252628"/>
                        <stop offset="0.557292" stop-color="#1E2021"/>
                        <stop offset="0.658722" stop-color="#1A1B1D"/>
                        <stop offset="0.722729" stop-color="#1A1B1D"/>
                        <stop offset="0.801455" stop-color="#1E1F21"/>
                        <stop offset="0.847739" stop-color="#27282A"/>
                        <stop offset="1" stop-color="#393B3E"/>
                    </linearGradient>
                    <radialGradient id={`paint1_radial_12_83${index}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(238 583.5) rotate(90) scale(17.5 68)">
                        <stop stop-color="#202020"/>
                        <stop offset="0.177083" stop-color="#3F4042"/>
                        <stop offset="0.328125" stop-color="#37383A"/>
                        <stop offset="0.5" stop-color="#2D2E30"/>
                        <stop offset="0.6875" stop-color="#2C2D30"/>
                        <stop offset="0.838542" stop-color="#2A2C2E"/>
                        <stop offset="0.880208" stop-color="#272727"/>
                        <stop offset="0.963542" stop-color="#1F1F1F"/>
                        <stop offset="1" stop-color="#1D1D1D"/>
                    </radialGradient>
                    <linearGradient id={`paint2_linear_12_83${index}`} x1="233" y1="448" x2="243" y2="448" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7D7D7F"/>
                        <stop offset="0.213542" stop-color="#26282C"/>
                        <stop offset="0.390625" stop-color="#1A1B1E"/>
                        <stop offset="0.713542" stop-color="#090A0C"/>
                        <stop offset="1" stop-color="#1E1F20"/>
                    </linearGradient>
                    <linearGradient id={`paint3_linear_12_83${index}`} x1="138.783" y1="173.589" x2="336.124" y2="173.589" gradientUnits="userSpaceOnUse">
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
export default BlackLampPreview;
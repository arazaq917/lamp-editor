import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const GlassLampPreview = ({index}) => {
    const images = useSelector(state => state.images)
    const trimColor = useSelector(state => state.trimColor)

    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>
            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="227" y="309" width="21" height="263" fill="#CECBC7"/>
                <rect x="233" y="584" width="10" height="45" fill={`url(#paint0_linear_12_93${index})`}/>
                <path opacity="0.8" d="M306 612.082V584.082C306 584.082 306 567.582 239 566.082C172 564.582 170 584.082 170 584.082V612.082C170 612.082 179.5 629.082 238 629.082C296.5 629.082 306 612.082 306 612.082Z" fill={`url(#paint1_linear_12_93${index})`}/>
                <path opacity="0.45" d="M306 583.5C306 593.165 275.555 601 238 601C200.445 601 170 593.165 170 583.5C170 573.835 198 564.5 238 566C275.555 566 306 573.835 306 583.5Z" fill={`url(#paint2_radial_12_93${index})`}/>
                <rect x="233" y="312" width="10" height="272" fill={`url(#paint3_linear_12_93${index})`}/>
                <path d="M138.783 42.0927L138.783 304.501H336.101L336.124 42.0927L138.783 42.0927Z" fill={`url(#paint4_linear_12_93${index})`}/>
                <image href={images.length ? images[index].url : ''} x="140" y="42" width="196" height="264"preserveAspectRatio="none"/>
                <path d="M180.169 33.8496C153.819 36.006 141.837 37.5818 138.799 41.2106C136.311 44.1832 136.944 51.1037 137.536 52.0817C138.01 52.864 138.503 52.6975 138.799 52.7789C138.799 50.2142 140.003 49.1478 140.793 48.6588C148.888 45.3579 170.399 44.2925 180.169 43.5591C238.76 39.8935 270.722 42.22 289.092 43.5571L289.12 43.5591L289.793 43.6081C313.986 45.3689 322.253 45.9706 332.854 48.0295C336.116 48.6629 336.116 52.3515 336.116 52.7789C337.063 51.801 337.464 51.5577 337.761 50.3364C338.058 49.1151 338.798 41.7958 334.417 40.0147C325.843 36.529 313.989 36.05 289.12 33.8496C263.889 31.6172 213.032 31.1602 180.169 33.8496Z" fill={trimColor}/>
                <path d="M180.169 312.15C153.819 309.994 141.837 308.418 138.799 304.789C136.311 301.817 136.944 294.896 137.536 293.918C138.01 293.136 138.503 293.303 138.799 293.221C138.799 295.786 140.003 296.852 140.793 297.341C148.888 300.642 170.399 301.707 180.169 302.441C238.76 306.106 270.722 303.78 289.092 302.443L289.12 302.441L289.793 302.392C313.986 300.631 322.253 300.029 332.854 297.971C336.116 297.337 336.116 293.649 336.116 293.221C337.063 294.199 337.464 294.442 337.761 295.664C338.058 296.885 338.798 304.204 334.417 305.985C325.843 309.471 313.989 309.95 289.12 312.15C263.889 314.383 213.032 314.84 180.169 312.15Z" fill={trimColor}/>
                <defs>
                    <linearGradient id={`paint0_linear_12_93${index}`} x1="233" y1="606.5" x2="243" y2="606.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5C594D"/>
                        <stop offset="0.213542" stop-color="#BEB9B2"/>
                        <stop offset="0.369792" stop-color="#151515"/>
                        <stop offset="0.520833" stop-color="#CECED0"/>
                        <stop offset="0.713542" stop-color="#F8F8F8"/>
                        <stop offset="1" stop-color="#B3AFAB"/>
                    </linearGradient>
                    <linearGradient id={`paint1_linear_12_93${index}`} x1="170" y1="607.082" x2="306" y2="607.082" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8A8A89"/>
                        <stop offset="0.0690328" stop-color="#B4B4B4"/>
                        <stop offset="0.122984" stop-color="#D2D2D2"/>
                        <stop offset="0.174462" stop-color="#BBBBBA"/>
                        <stop offset="0.211988" stop-color="#A6A6A6"/>
                        <stop offset="0.253088" stop-color="#B2B1B0"/>
                        <stop offset="0.325515" stop-color="#CACACC"/>
                        <stop offset="0.427083" stop-color="#DFDFE0"/>
                        <stop offset="0.515452" stop-color="#D8D8D8"/>
                        <stop offset="0.63046" stop-color="#E6E5E3"/>
                        <stop offset="0.701904" stop-color="#BBBBBA"/>
                        <stop offset="0.715844" stop-color="#ACACAC"/>
                        <stop offset="0.74024" stop-color="#B2B1B0"/>
                        <stop offset="0.84305" stop-color="#D6D6D6"/>
                        <stop offset="0.895833" stop-color="#C5C2BF"/>
                        <stop offset="1" stop-color="#B8B4B0"/>
                    </linearGradient>
                    <radialGradient id={`paint2_radial_12_93${index}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(238 583.5) rotate(90) scale(17.5 68)">
                        <stop stop-color="#656464"/>
                        <stop offset="0.177083" stop-color="#B7B7B7"/>
                        <stop offset="0.328125" stop-color="#C6C6C6"/>
                        <stop offset="0.5" stop-color="#C6C6C6"/>
                        <stop offset="0.6875" stop-color="#DDDDDD"/>
                        <stop offset="0.776042" stop-color="#D8D8D8"/>
                        <stop offset="0.880208" stop-color="#D2D2D2"/>
                        <stop offset="0.963542" stop-color="#EBEBEB"/>
                        <stop offset="1" stop-color="#DFDFDF"/>
                    </radialGradient>
                    <linearGradient id={`paint3_linear_12_93${index}`} x1="233" y1="448" x2="243" y2="448" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5C594D"/>
                        <stop offset="0.213542" stop-color="#BEB9B2"/>
                        <stop offset="0.369792" stop-color="#151515"/>
                        <stop offset="0.520833" stop-color="#CECED0"/>
                        <stop offset="0.713542" stop-color="#F8F8F8"/>
                        <stop offset="1" stop-color="#B3AFAB"/>
                    </linearGradient>
                    <linearGradient id={`paint4_linear_12_93${index}`} x1="138.783" y1="173.589" x2="336.124" y2="173.589" gradientUnits="userSpaceOnUse">
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
export default GlassLampPreview;
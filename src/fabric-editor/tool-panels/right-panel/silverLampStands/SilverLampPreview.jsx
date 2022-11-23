import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const SilverLampPreview = ({index}) => {
    const images = useSelector(state => state.images)
    const trimColor = useSelector(state => state.trimColor)
    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>
            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M307 583.574H169V611.839C169 611.839 178.64 629 238 629C297.36 629 307 611.839 307 611.839V583.574Z" fill={`url(#paint0_linear_12_114${index})`}/>
                <path d="M307 583.069C307 592.826 276.108 600.735 238 600.735C199.892 600.735 169 592.826 169 583.069C169 573.313 199.892 565.404 238 565.404C276.108 565.404 307 573.313 307 583.069Z" fill={`url(#paint1_radial_12_114${index})`}/>
                <path d="M232.926 309H243.074V583.574H232.926V309Z" fill={`url(#paint2_linear_12_114${index})`}/>
                <path d="M138.783 42.0927L138.783 304.501H336.101L336.124 42.0927L138.783 42.0927Z" fill={`url(#paint3_linear_12_114${index})`}/>
                <image href={images.length ? images[index].url : ''} x="140" y="42" width="196" height="264"preserveAspectRatio="none"/>
                <path d="M180.169 33.8496C153.819 36.006 141.837 37.5818 138.799 41.2106C136.311 44.1832 136.944 51.1037 137.536 52.0817C138.01 52.864 138.503 52.6975 138.799 52.7789C138.799 50.2142 140.003 49.1478 140.793 48.6588C148.888 45.3579 170.399 44.2925 180.169 43.5591C238.76 39.8935 270.722 42.22 289.092 43.5571L289.12 43.5591L289.793 43.6081C313.986 45.3689 322.253 45.9706 332.854 48.0295C336.116 48.6629 336.116 52.3515 336.116 52.7789C337.063 51.801 337.464 51.5577 337.761 50.3364C338.058 49.1151 338.798 41.7958 334.417 40.0147C325.843 36.529 313.989 36.05 289.12 33.8496C263.889 31.6172 213.032 31.1602 180.169 33.8496Z" fill={trimColor}/>
                <path d="M180.169 312.15C153.819 309.994 141.837 308.418 138.799 304.789C136.311 301.817 136.944 294.896 137.536 293.918C138.01 293.136 138.503 293.303 138.799 293.221C138.799 295.786 140.003 296.852 140.793 297.341C148.888 300.642 170.399 301.707 180.169 302.441C238.76 306.106 270.722 303.78 289.092 302.443L289.12 302.441L289.793 302.392C313.986 300.631 322.253 300.029 332.854 297.971C336.116 297.337 336.116 293.649 336.116 293.221C337.063 294.199 337.464 294.442 337.761 295.664C338.058 296.885 338.798 304.204 334.417 305.985C325.843 309.471 313.989 309.95 289.12 312.15C263.889 314.383 213.032 314.84 180.169 312.15Z" fill={trimColor}/>
                <defs>
                    <linearGradient id={`paint0_linear_12_114${index}`} x1="169" y1="472.556" x2="307" y2="472.556" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A19D9B"/>
                        <stop offset="0.161458" stop-color="#93918F"/>
                        <stop offset="0.3125" stop-color="#9D9D9D"/>
                        <stop offset="0.3126" stop-color="#9E9C9B"/>
                        <stop offset="0.383065" stop-color="#B4B4B4"/>
                        <stop offset="0.449615" stop-color="#AFAFAF"/>
                        <stop offset="0.658722" stop-color="#C0C0C0"/>
                        <stop offset="0.722729" stop-color="#DAD6D4"/>
                        <stop offset="0.801455" stop-color="#EAEAEA"/>
                        <stop offset="0.847739" stop-color="#E2E2E2"/>
                        <stop offset="1" stop-color="#A29F9D"/>
                    </linearGradient>
                    <radialGradient id={`paint1_radial_12_114${index}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(238 469) rotate(90.163) scale(178.286 76.936)">
                        <stop stop-color="#AAA7A5"/>
                        <stop offset="0.177083" stop-color="#ACA8A7"/>
                        <stop offset="0.328125" stop-color="#ADAAA9"/>
                        <stop offset="0.5" stop-color="#AEABAA"/>
                        <stop offset="0.6875" stop-color="#ACA8A7"/>
                        <stop offset="0.838542" stop-color="#ACA7A7"/>
                        <stop offset="1" stop-color="#7F7D7D"/>
                    </radialGradient>
                    <linearGradient id={`paint2_linear_12_114${index}`} x1="232.926" y1="446.287" x2="243.074" y2="446.287" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#868281"/>
                        <stop offset="0.213542" stop-color="#A8A3A1"/>
                        <stop offset="0.390625" stop-color="#999895"/>
                        <stop offset="0.713542" stop-color="#E8E6E3"/>
                        <stop offset="1" stop-color="#878483"/>
                    </linearGradient>
                    <linearGradient id={`paint3_linear_12_114${index}`} x1="138.783" y1="173.589" x2="336.124" y2="173.589" gradientUnits="userSpaceOnUse">
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
export default SilverLampPreview;
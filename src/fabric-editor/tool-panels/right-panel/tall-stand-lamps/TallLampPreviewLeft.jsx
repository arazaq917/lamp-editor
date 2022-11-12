import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

let modifiedImages;
const TallLampPreviewLeft = () => {
    const images = useSelector(state => state.images)
    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>

            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="475" height="662" fill="white"/>
                <path d="M306 596H170V624C170 624 179.5 641 238 641C296.5 641 306 624 306 624V596Z" fill="url(#paint0_linear_7_198)"/>
                <path d="M306 595.5C306 605.165 275.555 613 238 613C200.445 613 170 605.165 170 595.5C170 585.835 200.445 578 238 578C275.555 578 306 585.835 306 595.5Z" fill="url(#paint1_radial_7_198)"/>
                <path d="M233 324H243V596H233V324Z" fill="url(#paint2_linear_7_198)"/>
                <image href={images.length ? images[1].url : ''} x="142" y="60" width="192" height="263"preserveAspectRatio="none"/>
                <path d="M182.626 53.1635C157.387 55.6859 147.462 59.4552 142.357 63.459C140.089 66.0329 141.223 74.0404 141.79 75.1844C142.244 76.0995 142.924 76.519 143.208 76.6143C142.754 73.6401 144.153 71.7526 144.909 71.1806C152.623 65.6897 173.268 62.601 182.626 61.7431C238.776 57.4533 269.403 60.0272 286.985 61.7431C310.137 64.0026 329.05 68.8927 330.373 70.8946C331.696 72.8965 332.169 74.8984 332.074 76.0423C332.982 74.8984 333.209 74.0404 333.209 74.0404C333.663 69.2359 334.91 65.355 332.642 63.745C324.985 58.3113 310.806 55.7374 286.985 53.1635C262.817 50.5523 214.104 50.0177 182.626 53.1635Z" fill="black"/>
                <path d="M293.107 330.594C302.939 329.613 326.471 325.443 331.589 321.438C334.716 318.991 334.049 311.428 333.48 310.284C333.025 309.368 332.343 308.949 332.059 308.854C332.059 311.428 331.21 312.572 330.451 313.144C323.912 317.72 302.49 320.008 293.107 320.866C236.812 325.156 206.106 323.44 188.478 321.724C165.265 319.464 146.683 314.594 144.977 313.43C143.271 312.266 143.177 309.426 143.271 308.282C142.362 309.426 141.628 309.887 141.38 310.57C141.132 311.253 140.243 319.828 142.517 321.438C150.194 326.873 164.595 328.589 188.478 331.163C213.859 333.898 264.233 333.472 293.107 330.594Z" fill="black"/>
                <defs>
                    <linearGradient id="paint0_linear_7_198" x1="170" y1="486.022" x2="306" y2="486.022" gradientUnits="userSpaceOnUse">
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
                    <radialGradient id="paint1_radial_7_198" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(238 482.5) rotate(90.1622) scale(176.615 75.8209)">
                        <stop stop-color="#AAA7A5"/>
                        <stop offset="0.177083" stop-color="#ACA8A7"/>
                        <stop offset="0.328125" stop-color="#ADAAA9"/>
                        <stop offset="0.5" stop-color="#AEABAA"/>
                        <stop offset="0.6875" stop-color="#ACA8A7"/>
                        <stop offset="0.838542" stop-color="#ACA7A7"/>
                        <stop offset="1" stop-color="#7F7D7D"/>
                    </radialGradient>
                    <linearGradient id="paint2_linear_7_198" x1="233" y1="460" x2="243" y2="460" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#868281"/>
                        <stop offset="0.213542" stop-color="#A8A3A1"/>
                        <stop offset="0.390625" stop-color="#999895"/>
                        <stop offset="0.713542" stop-color="#E8E6E3"/>
                        <stop offset="1" stop-color="#878483"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_7_198" x1="142.708" y1="191.309" x2="332.253" y2="191.309" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050505"/>
                        <stop offset="0.0723505" stop-color="#A0A09F"/>
                        <stop offset="0.129096" stop-color="#C2C2C2"/>
                        <stop offset="0.230619" stop-color="#E5E6E4"/>
                        <stop offset="0.397116" stop-color="#FEFBF4"/>
                        <stop offset="0.472924" stop-color="#FFFFFB"/>
                        <stop offset="0.657014" stop-color="#EFEFE7" stop-opacity="0.94"/>
                        <stop offset="0.75" stop-color="#D1D1D1"/>
                        <stop offset="0.875" stop-color="#ACACAC"/>
                        <stop offset="1" stop-color="#4A4A4A"/>
                    </linearGradient>
                </defs>
            </svg>

        </>
    )
}
export default TallLampPreviewLeft;
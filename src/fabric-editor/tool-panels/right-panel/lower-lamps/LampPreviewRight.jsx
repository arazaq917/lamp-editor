import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const LampPreviewRight = () => {
    const images = useSelector(state => state.images)
    const trimColor = useSelector(state => state.trimColor)

    useEffect(() => {
        console.log("LampPreviewRight", images)
    }, [images])
    return (
        <>
            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_12_120)">
                    <ellipse cx="100.063" cy="606.373" rx="37.1306" ry="1.0981" transform="rotate(-5.12792 100.063 606.373)" fill="#C1C1C1"/>
                </g>
                <g filter="url(#filter1_f_12_120)">
                    <ellipse cx="375.08" cy="606.414" rx="37.1306" ry="1.0981" transform="rotate(5.13 375.08 606.414)" fill="#C1C1C1"/>
                </g>
                <g opacity="0.7" filter="url(#filter2_f_12_120)">
                    <ellipse cx="237.5" cy="611" rx="188.5" ry="9" fill="url(#paint0_linear_12_120)"/>
                </g>
                <g opacity="0.9" filter="url(#filter3_f_12_120)">
                    <ellipse cx="237.5" cy="598" rx="137.5" ry="9" fill="#D9D9D9"/>
                </g>
                <path d="M235.977 491L229.068 491.051L229.708 559.013L236.617 558.963L235.977 491Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M230.087 492.056L234.977 492.02L235.598 557.958L230.708 557.993L230.087 492.056ZM235.977 491L236.617 558.963L229.708 559.013L229.068 491.051L235.977 491Z" fill="url(#paint1_linear_12_120)"/>
                <path d="M235.977 491L232.115 491.028L232.755 558.91L236.616 558.882L235.977 491Z" fill="#ACAB97"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M233.134 492.033L234.977 492.02L235.597 557.877L233.755 557.89L233.134 492.033ZM235.977 491L236.616 558.882L232.755 558.91L232.115 491.028L235.977 491Z" fill="url(#paint2_linear_12_120)"/>
                <path d="M238.41 559.959C238.4 558.84 237.487 557.94 236.372 557.949L230.44 557.992C229.325 558 228.43 558.913 228.44 560.032L228.618 578.865C228.644 581.611 230.911 583.821 233.65 583.801C236.388 583.781 238.614 581.538 238.588 578.792L238.41 559.959Z" fill="url(#paint3_linear_12_120)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M230.45 559.004L236.382 558.961C236.939 558.957 237.395 559.407 237.401 559.966L237.578 578.799C237.599 580.979 235.828 582.772 233.64 582.788C231.452 582.804 229.648 581.038 229.627 578.858L229.45 560.024C229.445 559.465 229.892 559.009 230.45 559.004ZM236.372 557.949C237.487 557.94 238.4 558.84 238.41 559.959L238.588 578.792C238.614 581.538 236.388 583.781 233.65 583.801C230.911 583.821 228.644 581.611 228.618 578.865L228.44 560.032C228.43 558.913 229.325 558 230.44 557.992L236.372 557.949Z" fill="url(#paint4_linear_12_120)"/>
                <path d="M98.3549 526.681L104.452 529.87L73.3162 590.141L67.2189 586.952L98.3549 526.681Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M103.093 530.301L98.7856 528.048L68.5784 586.521L72.8855 588.774L103.093 530.301ZM98.3549 526.681L67.2189 586.952L73.3162 590.141L104.452 529.87L98.3549 526.681Z" fill="url(#paint5_linear_12_120)"/>
                <path d="M98.3549 526.681L101.762 528.463L70.6635 588.662L67.256 586.88L98.3549 526.681Z" fill="#ACAB97"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.403 528.894L98.7856 528.048L68.6155 586.449L70.2328 587.295L100.403 528.894ZM98.3549 526.681L67.256 586.88L70.6635 588.662L101.762 528.463L98.3549 526.681Z" fill="url(#paint6_linear_12_120)"/>
                <path d="M65.181 587.025C65.694 586.033 66.9113 585.647 67.9 586.164L73.1181 588.893C74.1068 589.41 74.4925 590.635 73.9795 591.628L65.3553 608.322C64.0956 610.76 61.1032 611.706 58.6752 610.436C56.2473 609.166 55.2971 606.158 56.5568 603.72L65.181 587.025Z" fill="url(#paint7_linear_12_120)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.6537 589.792L67.4356 587.063C66.9412 586.804 66.3326 586.997 66.0761 587.494L57.4519 604.188C56.4492 606.129 57.2053 608.525 59.1396 609.537C61.074 610.549 63.4575 609.795 64.4602 607.854L73.0844 591.159C73.3409 590.663 73.1481 590.051 72.6537 589.792ZM67.9 586.164C66.9113 585.647 65.694 586.033 65.181 587.025L56.5568 603.72C55.2971 606.158 56.2473 609.166 58.6752 610.436C61.1032 611.706 64.0956 610.76 65.3553 608.322L73.9795 591.628C74.4925 590.635 74.1068 589.41 73.1181 588.893L67.9 586.164Z" fill="url(#paint8_linear_12_120)"/>
                <path d="M376.392 526.681L370.259 529.87L401.581 590.141L407.715 586.952L376.392 526.681Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M371.621 530.302L375.963 528.045L406.352 586.52L402.01 588.777L371.621 530.302ZM376.392 526.681L407.715 586.952L401.581 590.141L370.259 529.87L376.392 526.681Z" fill="url(#paint9_linear_12_120)"/>
                <path d="M376.392 526.681L372.964 528.463L404.249 588.662L407.677 586.88L376.392 526.681Z" fill="#ACAB97"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M374.327 528.895L375.963 528.045L406.314 586.448L404.679 587.299L374.327 528.895ZM376.392 526.681L407.677 586.88L404.249 588.662L372.964 528.463L376.392 526.681Z" fill="url(#paint10_linear_12_120)"/>
                <path d="M409.763 587.023C409.248 586.032 408.028 585.645 407.038 586.16L401.772 588.898C400.782 589.412 400.397 590.634 400.912 591.625L409.592 608.327C410.858 610.763 413.878 611.7 416.309 610.436C418.74 609.172 419.709 606.16 418.443 603.725L409.763 587.023Z" fill="url(#paint11_linear_12_120)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M402.238 589.796L407.504 587.057C407.999 586.8 408.61 586.993 408.867 587.489L417.547 604.191C418.552 606.124 417.785 608.528 415.843 609.538C413.9 610.548 411.493 609.794 410.488 607.861L401.809 591.159C401.551 590.663 401.743 590.053 402.238 589.796ZM407.038 586.16C408.028 585.645 409.248 586.032 409.763 587.023L418.443 603.725C419.709 606.16 418.74 609.172 416.309 610.436C413.878 611.7 410.858 610.763 409.592 608.327L400.912 591.625C400.397 590.634 400.782 589.412 401.772 588.898L407.038 586.16Z" fill="url(#paint12_linear_12_120)"/>
                <image href={images.length ? images[3].url : ''} x="74" y="99" width="327" height="430" preserveAspectRatio="none"/>
                <path d="M144.231 86.0302C101.134 89.563 81.5359 92.1446 76.5679 98.0897C72.4983 102.96 73.5333 114.298 74.5018 115.9C75.2765 117.182 76.0836 116.909 76.5678 117.042C76.5678 112.84 78.537 111.093 79.8283 110.292C93.0686 104.884 128.251 103.139 144.231 101.937C240.061 95.932 292.337 99.7433 322.383 101.934L322.428 101.937L323.529 102.017C363.098 104.902 376.619 105.888 393.958 109.261C399.293 110.299 399.293 116.342 399.293 117.042C400.843 115.44 401.498 115.041 401.984 113.04C402.469 111.04 403.68 99.0484 396.515 96.1305C382.491 90.4199 363.103 89.6352 322.428 86.0302C281.161 82.3729 197.98 81.6242 144.231 86.0302Z" fill={trimColor}/>
                <path d="M144.231 541.97C101.134 538.437 81.5359 535.855 76.5679 529.91C72.4983 525.04 73.5333 513.702 74.5018 512.1C75.2765 510.818 76.0836 511.091 76.5678 510.958C76.5678 515.16 78.537 516.907 79.8283 517.708C93.0686 523.116 128.251 524.861 144.231 526.063C240.061 532.068 292.337 528.257 322.383 526.066L322.428 526.063L323.529 525.983C363.098 523.098 376.619 522.112 393.958 518.739C399.293 517.701 399.293 511.658 399.293 510.958C400.843 512.56 401.498 512.959 401.984 514.96C402.469 516.96 403.68 528.952 396.515 531.869C382.491 537.58 363.103 538.365 322.428 541.97C281.161 545.627 197.98 546.376 144.231 541.97Z" fill={trimColor}/>
                <defs>
                    <filter id="filter0_f_12_120" x="58.0801" y="597.878" width="83.9648" height="16.9905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_12_120"/>
                    </filter>
                    <filter id="filter1_f_12_120" x="333.098" y="597.917" width="83.9639" height="16.9929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_12_120"/>
                    </filter>
                    <filter id="filter2_f_12_120" x="24" y="577" width="427" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_12_120"/>
                    </filter>
                    <filter id="filter3_f_12_120" x="90" y="579" width="295" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_12_120"/>
                    </filter>
                    <linearGradient id="paint0_linear_12_120" x1="49" y1="611" x2="426" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C1C1C1"/>
                        <stop offset="0.239583" stop-color="#CBCBCB"/>
                        <stop offset="0.5" stop-color="#C6C6C6"/>
                        <stop offset="0.703125" stop-color="#CDCCCC"/>
                        <stop offset="1" stop-color="#CECECE"/>
                        <stop offset="1" stop-color="#B9B9B9"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_12_120" x1="68.6587" y1="547.56" x2="376.331" y2="436.951" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#191718"/>
                        <stop offset="1" stop-color="#0F0D0F"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_12_120" x1="68.6587" y1="547.56" x2="376.331" y2="436.951" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#191718"/>
                        <stop offset="1" stop-color="#0F0D0F"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear_12_120" x1="237.5" y1="491" x2="237.5" y2="611" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint11_linear_12_120" x1="68.6587" y1="547.56" x2="376.331" y2="436.951" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#191718"/>
                        <stop offset="1" stop-color="#0F0D0F"/>
                    </linearGradient>
                    <linearGradient id="paint12_linear_12_120" x1="404.405" y1="587.529" x2="416.314" y2="610.433" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint13_linear_12_120" x1="76.542" y1="314.965" x2="399.306" y2="314.965" gradientUnits="userSpaceOnUse">
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
export default LampPreviewRight;
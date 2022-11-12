import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const LampPreview = () => {
    const images = useSelector(state => state.images)
    const trimColor = useSelector(state => state.trimColor)

    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>
            <svg width="250" height="240" viewBox="0 0 475 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="475" height="662" fill="white"/>
                <path d="M236.278 492.757L229.434 492.807L230.068 559.936L236.912 559.886L236.278 492.757Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M230.443 493.8L235.287 493.764L235.903 558.893L231.059 558.928L230.443 493.8ZM236.278 492.757L236.912 559.886L230.068 559.936L229.434 492.807L236.278 492.757Z" fill="url(#paint0_linear_7_190)"/>
                <path d="M236.278 492.757L232.453 492.785L233.087 559.834L236.911 559.806L236.278 492.757Z" fill="#ACAB97"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M233.463 493.778L235.287 493.764L235.902 558.813L234.077 558.826L233.463 493.778ZM236.278 492.757L236.911 559.806L233.087 559.834L232.453 492.785L236.278 492.757Z" fill="url(#paint1_linear_7_190)"/>
                <path d="M238.689 560.869C238.678 559.765 237.774 558.876 236.67 558.884L230.794 558.927C229.689 558.935 228.802 559.837 228.813 560.942L228.989 579.544C229.014 582.256 231.261 584.439 233.973 584.419C236.685 584.399 238.89 582.184 238.864 579.472L238.689 560.869Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M230.803 559.927L236.679 559.884C237.231 559.88 237.683 560.324 237.689 560.877L237.864 579.479C237.885 581.632 236.131 583.403 233.963 583.419C231.796 583.435 230.009 581.69 229.989 579.537L229.813 560.934C229.808 560.382 230.251 559.931 230.803 559.927ZM236.67 558.884C237.774 558.876 238.678 559.765 238.689 560.869L238.864 579.472C238.89 582.184 236.685 584.399 233.973 584.419C231.261 584.439 229.014 582.256 228.989 579.544L228.813 560.942C228.802 559.837 229.689 558.935 230.794 558.927L236.67 558.884Z" fill="black"/>
                <path d="M99.9552 528L105.995 531.15L75.1527 590.681L69.113 587.531L99.9552 528Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M104.648 531.576L100.382 529.35L70.4597 587.106L74.7261 589.331L104.648 531.576ZM99.9552 528L69.113 587.531L75.1527 590.681L105.995 531.15L99.9552 528Z" fill="url(#paint4_linear_7_190)"/>
                <path d="M99.9552 528L103.331 529.76L72.5251 589.221L69.1497 587.46L99.9552 528Z" fill="#ACAB97"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M101.984 530.186L100.382 529.35L70.4964 587.035L72.0985 587.871L101.984 530.186ZM99.9552 528L69.1497 587.46L72.5251 589.221L103.331 529.76L99.9552 528Z" fill="url(#paint5_linear_7_190)"/>
                <path d="M67.0944 587.604C67.6025 586.623 68.8083 586.242 69.7877 586.753L74.9565 589.449C75.9359 589.96 76.3179 591.169 75.8098 592.15L67.267 608.639C66.0192 611.048 63.055 611.981 60.65 610.727C58.245 609.473 57.3038 606.502 58.5515 604.093L67.0944 587.604Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M74.4965 590.337L69.3277 587.641C68.838 587.386 68.2351 587.576 67.981 588.067L59.4382 604.556C58.4449 606.473 59.1939 608.84 61.11 609.839C63.0261 610.839 65.3871 610.094 66.3803 608.177L74.9232 591.687C75.1772 591.197 74.9862 590.592 74.4965 590.337ZM69.7877 586.753C68.8083 586.242 67.6025 586.623 67.0944 587.604L58.5515 604.093C57.3038 606.502 58.245 609.473 60.65 610.727C63.055 611.981 66.0192 611.048 67.267 608.639L75.8098 592.15C76.3179 591.169 75.9359 589.96 74.9565 589.449L69.7877 586.753Z" fill="black"/>
                <path d="M375.368 528L369.292 531.15L400.319 590.681L406.395 587.531L375.368 528Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M370.642 531.577L374.943 529.347L405.045 587.105L400.745 589.334L370.642 531.577ZM375.368 528L406.395 587.531L400.319 590.681L369.292 531.15L375.368 528Z" fill="url(#paint8_linear_7_190)"/>
                <path d="M375.368 528L371.973 529.76L402.962 589.221L406.358 587.46L375.368 528Z" fill="#ACAB97"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M373.323 530.187L374.943 529.347L405.008 587.034L403.388 587.874L373.323 530.187ZM375.368 528L406.358 587.46L402.962 589.221L371.973 529.76L375.368 528Z" fill="url(#paint9_linear_7_190)"/>
                <path d="M408.424 587.602C407.914 586.622 406.705 586.24 405.725 586.749L400.508 589.453C399.527 589.962 399.146 591.168 399.657 592.148L408.255 608.645C409.508 611.05 412.5 611.976 414.909 610.727C417.317 609.479 418.276 606.504 417.022 604.099L408.424 587.602Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M400.97 590.34L406.187 587.636C406.677 587.381 407.281 587.572 407.537 588.062L416.135 604.559C417.13 606.469 416.37 608.843 414.446 609.84C412.522 610.838 410.138 610.094 409.143 608.184L400.545 591.687C400.289 591.198 400.48 590.594 400.97 590.34ZM405.725 586.749C406.705 586.24 407.914 586.622 408.424 587.602L417.022 604.099C418.276 606.504 417.317 609.479 414.909 610.727C412.5 611.976 409.508 611.05 408.255 608.645L399.657 592.148C399.146 591.168 399.527 589.962 400.508 589.453L405.725 586.749Z" fill="black"/>
                <image href={images.length ? images[0].url : ''} x="71" y="64" width="331" height="465" preserveAspectRatio="none"/>
                <path d="M140.422 53.801C96.0816 58.2323 78.6443 64.8544 69.6766 71.8884C65.6909 76.4102 67.6838 90.4782 68.6802 92.4879C69.4773 94.0956 70.673 94.8325 71.1712 95C70.3741 89.7748 72.8319 86.4587 74.1605 85.4539C87.7117 75.8073 123.981 70.3811 140.422 68.8738C239.067 61.3374 292.874 65.8592 323.763 68.8738C364.438 72.8434 397.663 81.4345 399.988 84.9515C402.313 88.4684 403.144 91.9854 402.978 93.9951C404.572 91.9854 404.97 90.4782 404.97 90.4782C405.768 82.0374 407.96 75.2193 403.974 72.3908C390.522 62.8447 365.612 58.3228 323.763 53.801C281.305 49.2134 195.723 48.2743 140.422 53.801Z" fill={trimColor}/>
                <path d="M334.519 541.199C351.792 539.477 393.133 532.149 402.124 525.114C407.619 520.815 406.446 507.527 405.447 505.517C404.648 503.91 403.449 503.173 402.95 503.005C402.95 507.527 401.458 509.537 400.126 510.542C388.638 518.582 351.002 522.602 334.519 524.109C235.618 531.647 181.672 528.632 150.703 525.617C109.922 521.647 77.2766 513.089 74.2796 511.045C71.2827 509 71.1161 504.01 71.2827 502C69.6843 504.01 68.3955 504.82 67.9594 506.02C67.5233 507.22 65.9614 522.285 69.9574 525.114C83.4439 534.661 108.745 537.676 150.703 542.199C195.292 547.005 283.792 546.256 334.519 541.199Z" fill={trimColor}/>
                <defs>
                    <linearGradient id="paint0_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_7_190" x1="70.5392" y1="548.623" x2="375.107" y2="438.816" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#191718"/>
                        <stop offset="1" stop-color="#0F0D0F"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_7_190" x1="70.5392" y1="548.623" x2="375.107" y2="438.816" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#191718"/>
                        <stop offset="1" stop-color="#0F0D0F"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear_7_190" x1="237.787" y1="492.757" x2="237.787" y2="611.284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear_7_190" x1="70.5392" y1="548.623" x2="375.107" y2="438.816" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#191718"/>
                        <stop offset="1" stop-color="#0F0D0F"/>
                    </linearGradient>
                    <linearGradient id="paint11_linear_7_190" x1="403.116" y1="588.101" x2="414.86" y2="610.752" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#050301"/>
                        <stop offset="1" stop-color="#10100F"/>
                    </linearGradient>
                    <linearGradient id="paint12_linear_7_190" x1="70.2922" y1="296.5" x2="403.292" y2="296.5" gradientUnits="userSpaceOnUse">
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
export default LampPreview;
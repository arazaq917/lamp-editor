import React, {useEffect} from 'react';
import lamp from '../../../assets/images/bg.png'

const LampPreview = (lampSvg)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="250px" height="180px" viewBox="0 0 1280 720">
            <defs>
                <pattern id="img1"   x="0" y="0" width="1" height="1" preserveAspectRatio="xMinYMin max">
                    <image href="https://www.allthingsdogs.com/wp-content/uploads/2019/12/Red-Husky-Feature-678x381.jpg" x="0" y="0" width="385" height="465" preserveAspectRatio="xMidYMin slice" />
                </pattern>
            </defs>
            <defs>
                <image id="lamp_jpg" x="0" y="0" width="1280" height="720" xlinkHref={lamp}/>

                <g id="Layer2_0_FILL">
                    <path fill="#FAFAFA" stroke="none" d="
                        M 800.7 584.3
                        L 805.2 147.9
                        Q 614.1609375 118.3099609375 424.85 144.3
                        L 422.4 578.9
                        Q 627.1767578125 611.8365234375 800.7 584.3 Z"/>
                </g>

                <g id="im_0_Layer1_0_FILL">
                    <path fill="url(#img1)" stroke="none" d="
                        M 0 455.7
                        Q 216.8 474.8 380.3 455.7
                        L 385.3 10.1
                        Q 204.05 -7.05 6.7 4.85
                        L 0 455.7 Z"/>
                </g>

                <g id="Layer0_0_FILL">
                    <path fill="#B7BABA" stroke="none" d="
                        M 800.7 584.3
                        Q 800.3060546875 585.0845703125 794.1 586.3
                        L 790 586.85
                        Q 782.7435546875 587.9408203125 767.05 588.55 597.7 592.9 428.8 580.2 423.6078125 580.0099609375 422.75 579.45 421.948828125 578.9439453125 422 579.5 422.0482421875 579.7357421875 421.95 580.5 421.8212890625 581.8439453125 421.35 584.9 421.185546875 585.9740234375 421.05 586.9 420.7349609375 590.111328125 421.15 591.55
                        L 421.15 595.8
                        Q 596.95 610.85 775.05 605.25 789.15 605.85 802.15 602.35 804.05 592.15 802.75 585.7
                        L 800.7 584.3
                        M 775.25 145.4
                        Q 791.6794921875 145.4943359375 800.1 146.75
                        L 805.5 147.3
                        Q 806.9626953125 140.8408203125 806.7 131.45 797.9244140625 128.78984375 783.8 128.95 605.9875 117.314453125 428.45 126.15 425.7013671875 127.2955078125 424.85 129.2 423.5056640625 136.75 424.85 144.3
                        L 428.5 144.3
                        Q 431.4392578125 142.259375 436.9 142.2 606.1625 135.2916015625 775.25 145.4 Z"/>
                </g>




                <path id="Layer0_0_1_STROKES" stroke="#B7BABA" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" fill="none" d="
                    M 428.45 126.15
                    Q 605.9875 117.314453125 783.8 128.95 797.9244140625 128.78984375 806.7 131.45 806.9626953125 140.8408203125 805.5 147.3
                    L 800.1 146.75
                    Q 791.6794921875 145.4943359375 775.25 145.4 606.1625 135.2916015625 436.9 142.2 431.4392578125 142.259375 428.5 144.3
                    L 424.85 144.3
                    Q 423.5056640625 136.75 424.85 129.2 425.7013671875 127.2955078125 428.45 126.15 Z
                    M 421.15 595.8
                    Q 596.95 610.85 775.05 605.25 789.15 605.85 802.15 602.35 804.05 592.15 802.75 585.7
                    L 800.7 584.3
                    Q 800.3060546875 585.0845703125 794.1 586.3
                    L 790 586.85
                    Q 782.7435546875 587.9408203125 767.05 588.55 597.7 592.9 428.8 580.2 423.6078125 580.0099609375 422.775 579.475 421.948828125 578.9439453125 422.025 579.525 422.0482421875 579.7357421875 421.975 580.5 421.8212890625 581.8439453125 421.35 584.9 421.185546875 585.9740234375 421.075 586.9 420.7349609375 590.111328125 421.15 591.55
                    L 421.15 595.8 Z"/>
            </defs>

            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlinkHref="#Layer2_0_FILL"/>

                <use xlinkHref="#Layer2_0_1_STROKES"/>
            </g>

            <g transform="matrix( 1, 0, 0, 1, 421.15,132.7) ">
                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                    <use xlinkHref="#im_0_Layer1_0_FILL"/>

                    <use xlinkHref="#im_0_Layer1_0_1_STROKES"/>
                </g>

                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                    <use xlinkHref="#im_0_Layer0_0_1_STROKES"/>
                </g>
            </g>

            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlinkHref="#Layer0_0_FILL"/>

                <use xlinkHref="#Layer0_0_1_STROKES"/>
            </g>
        </svg>

    )
}
export default LampPreview;
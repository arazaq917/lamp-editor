import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

let modifiedImages;
const TallLampPreviewRight = () => {
    const images = useSelector(state => state.images)
    useEffect(()=>{
        console.log('LampPreview',images)
    },[images])
    return (
        <>


            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" x="0px" y="0px" width="250px" height="180px" viewBox="0 0 1920 1080">
                <defs>
                    <pattern id="imgt3" x="0" y="0" width="1" height="1" preserveAspectRatio="xMinYMin max">
                        <image href={images.length?images[2].url:''} x="0" y="0" width="300" height="400"
                               preserveAspectRatio="none"/>
                    </pattern>
                    <radialGradient id="gradient_r1" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="105.05000000000001" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, -101.35,28.7) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r2" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="12.0875" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 0.9679420889348501, 0.05,75.95) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r3" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,63.95) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r4" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,57.35) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r5" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,44.25) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r6" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,50.25) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r7" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,31.1) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r8" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,37.5) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r9" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,17.75) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r10" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,23.75) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r11" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,10.8) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <radialGradient id="gradient_r12" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="2.5500000000000003" fx="0" fy="0" gradientTransform="matrix( 1, 0, 0, 1, 0.05,4.6) " spreadMethod="pad">
                        <stop  offset="0%" stop-color="#FFFFFF"/>

                        <stop  offset="100%" stop-color="#000000"/>
                    </radialGradient>

                    <g id="Layer0_0_FILL_T3">
                        <path fill="#FFFFFF" stroke="none" d="
M 984.2 909.6
L 984.2 925.3 987.55 925.3
Q 989.05 928.75 987.55 931.9
L 982.9 931.9 982.9 941.85
Q 976.7 943.15 969.95 941.85
L 969.95 931.9 966.2 931.9
Q 965.55 929.35 965.85 927.05
L 965.9 926.35 965.95 926.2 966 926.15 966 926.1
Q 966.1 925.7 966.2 925.3
L 966.3 925.3
Q 966.35 925.25 966.4 925.2 966.7 925 966.95 925.2 967 925.25 967.1 925.3
L 970.7 925.3 970.7 909.75
Q 944.11171875 910.53828125 916.8 915.65 898.7466796875 918.1033203125 884.75 922.3 877.8947265625 925.1 876.4 928.7 877.6185546875 929.683203125 882.4 933.15 885.201953125 932.6775390625 888.35 936.2 903.0076171875 937.29296875 930.95 943.9 978.4537109375 955.12109375 1061.9 937.25 1064.9927734375 934.138671875 1074.4 934.25 1077.5 929.3 1077.45 927.85
L 1077.45 926.25
Q 1064.593359375 921.1623046875 1056.1 918.9 1047.656640625 916.6376953125 1042.05 915.7 1013.5724609375 909.9904296875 984.2 909.6 Z"/>

                        <path fill="#B1ABAD" stroke="none" d="
M 984.2 542.7
L 970.7 542.6 970.7 909.75 970.7 925.3 967.1 925.3
Q 967 925.25 966.95 925.2 966.7 925 966.4 925.2 966.35 925.25 966.3 925.3 966.1 925.55 966.05 926.05
L 966 926.1 966 926.15 965.95 926.2 965.9 926.35 965.85 927.05
Q 965.55 929.35 966.2 931.9
L 969.95 931.9 969.95 941.85
Q 976.7 943.15 982.9 941.85
L 982.9 931.9 987.55 931.9
Q 989.05 928.75 987.55 925.3
L 984.2 925.3 984.2 909.6 984.2 542.7 Z"/>

                        <path fill="#9D9B98" stroke="none" d="
M 966.05 926.05
Q 966.1 925.55 966.3 925.3
L 966.2 925.3
Q 966.1 925.7 966 926.1
L 966.05 926.05 Z"/>

                        <path fill="#B4B7B7" stroke="none" d="
M 831.85 519
Q 831.4869140625 518.5013671875 831.15 518.1 828.3427734375 514.8986328125 827.05 519 826.5 526.05 827.05 532.75 829.25 535.7 833.7 535.7 976.95 549 1118.8 536.8 1124.25 533.65 1125.7 529.6 1126.7 523.1 1125.7 516.55 1123 512.4 1121.55 516.55
L 1121.2 517.2 1119.8 520
Q 1110.9 523.35 1094.95 523.95 1005.8 530.3 917.05 526.15 875.85 524.45 854.05 522.15 832.25 519.8 831.85 519 Z"/>

                        <path fill="url(#imgt3)" stroke="none" d="
M 1125.75 142.05
Q 1124.2962890625 143.449609375 1123.35 140.05 1123.1 139.4 1121.15 139.1 979.9 136.25 836.4 137.95 834.6630859375 137.996875 833.6 138.5
L 831.15 518.1
Q 831.4869140625 518.5013671875 831.85 519 832.25 519.8 854.05 522.15 875.85 524.45 917.05 526.15 1005.8 530.3 1094.95 523.95 1110.9 523.35 1119.8 520
L 1121.2 517.2 1125.75 142.05 Z"/>

                        <path fill="#B6B9B9" stroke="none" d="
M 1127.15 140.05
Q 1128.15 137.45 1127.15 124.95 981.4 116.7 830.1 124.95 828.2 133.2 830.1 138.6 831.4 141.3 833.45 138.6 833.5171875 138.56328125 833.6 138.5 834.6630859375 137.996875 836.4 137.95 979.9 136.25 1121.15 139.1 1123.1 139.4 1123.35 140.05 1124.2962890625 143.449609375 1125.75 142.05 1126.4173828125 141.500390625 1127.15 140.05 Z"/>
                    </g>

                    <g id="Symbol_6_0_Layer0_0_FILL_T3">
                        <path fill="url(#gradient_r1)" stroke="none" d="
M -23.1 50.9
Q -11.15 48.3 -0.3 43.9 0.35 21.95 -0.05 -0.1 -1.95 2.65 -7.9 5.55 -98.2 29.35 -190.15 6.3 -197.15 4.45 -202.85 1.35 -203.55 22.7 -201.85 43.9 -189.55 49 -175.8 51.65 -97.6 63.55 -23.1 50.9 Z"/>
                    </g>

                    <g id="Symbol_7_0_Layer0_0_FILL_T3">
                        <path fill="url(#gradient_r2)" stroke="none" d="
M 6.5 69.55
Q 3.9 67 0.1 67 -3.7 67 -6.55 69.55 -9.15 72.3 -9.15 75.95 -9.15 79.65 -6.55 82.15 -3.7 84.9 0.1 84.9 3.9 84.9 6.5 82.15 9.35 79.65 9.35 75.95 9.35 72.3 6.5 69.55 Z"/>

                        <path fill="url(#gradient_r3)" stroke="none" d="
M 2 63.95
Q 2 63.15 1.4 62.55 0.85 62 0.05 62 -0.75 62 -1.35 62.55 -1.9 63.15 -1.9 63.95 -1.9 64.75 -1.35 65.3 -0.75 65.9 0.05 65.9 0.85 65.9 1.4 65.3 2 64.75 2 63.95 Z"/>

                        <path fill="url(#gradient_r4)" stroke="none" d="
M 2 57.35
Q 2 56.55 1.4 55.95 0.85 55.4 0.05 55.4 -0.75 55.4 -1.35 55.95 -1.9 56.55 -1.9 57.35 -1.9 58.15 -1.35 58.7 -0.75 59.3 0.05 59.3 0.85 59.3 1.4 58.7 2 58.15 2 57.35 Z"/>

                        <path fill="url(#gradient_r5)" stroke="none" d="
M 2 44.25
Q 2 43.45 1.4 42.85 0.85 42.3 0.05 42.3 -0.75 42.3 -1.35 42.85 -1.9 43.45 -1.9 44.25 -1.9 45.05 -1.35 45.6 -0.75 46.2 0.05 46.2 0.85 46.2 1.4 45.6 2 45.05 2 44.25 Z"/>

                        <path fill="url(#gradient_r6)" stroke="none" d="
M 1.4 48.85
Q 0.85 48.3 0.05 48.3 -0.75 48.3 -1.35 48.85 -1.9 49.45 -1.9 50.25 -1.9 51.05 -1.35 51.6 -0.75 52.2 0.05 52.2 0.85 52.2 1.4 51.6 2 51.05 2 50.25 2 49.45 1.4 48.85 Z"/>

                        <path fill="url(#gradient_r7)" stroke="none" d="
M 1.4 32.45
Q 2 31.9 2 31.1 2 30.3 1.4 29.7 0.85 29.15 0.05 29.15 -0.75 29.15 -1.35 29.7 -1.9 30.3 -1.9 31.1 -1.9 31.9 -1.35 32.45 -0.75 33.05 0.05 33.05 0.85 33.05 1.4 32.45 Z"/>

                        <path fill="url(#gradient_r8)" stroke="none" d="
M 1.4 36.1
Q 0.85 35.55 0.05 35.55 -0.75 35.55 -1.35 36.1 -1.9 36.7 -1.9 37.5 -1.9 38.3 -1.35 38.85 -0.75 39.45 0.05 39.45 0.85 39.45 1.4 38.85 2 38.3 2 37.5 2 36.7 1.4 36.1 Z"/>

                        <path fill="url(#gradient_r9)" stroke="none" d="
M 2 17.75
Q 2 16.95 1.4 16.35 1.1373046875 16.0873046875 0.8 15.95 0.4677734375 15.8 0.05 15.8 -0.3677734375 15.8 -0.75 15.95 -1.06328125 16.0873046875 -1.35 16.35 -1.9 16.95 -1.9 17.75 -1.9 18.55 -1.35 19.1 -0.75 19.7 0.05 19.7 0.85 19.7 1.4 19.1 2 18.55 2 17.75 Z"/>

                        <path fill="url(#gradient_r10)" stroke="none" d="
M 2 23.75
Q 2 22.95 1.4 22.35 0.85 21.8 0.05 21.8 -0.75 21.8 -1.35 22.35 -1.9 22.95 -1.9 23.75 -1.9 24.55 -1.35 25.1 -0.75 25.7 0.05 25.7 0.85 25.7 1.4 25.1 2 24.55 2 23.75 Z"/>

                        <path fill="url(#gradient_r11)" stroke="none" d="
M 2 10.8
Q 2 10 1.4 9.4 0.85 8.85 0.05 8.85 -0.75 8.85 -1.35 9.4 -1.9 10 -1.9 10.8 -1.9 11.6 -1.35 12.15 -0.75 12.75 0.05 12.75 0.85 12.75 1.4 12.15 2 11.6 2 10.8 Z"/>

                        <path fill="url(#gradient_r12)" stroke="none" d="
M 2 4.6
Q 2 3.8 1.4 3.2 0.85 2.65 0.05 2.65 -0.75 2.65 -1.35 3.2 -1.9 3.8 -1.9 4.6 -1.9 5.4 -1.35 5.95 -0.75 6.55 0.05 6.55 0.85 6.55 1.4 5.95 2 5.4 2 4.6 Z"/>
                    </g>

                    <path id="Layer0_0_1_STROKES" stroke="#DFDFDF" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none" d="
M 984.2 909.625
Q 1013.5724609375 909.9904296875 1042.05 915.7 1047.656640625 916.6376953125 1056.125 918.9 1064.593359375 921.1623046875 1077.45 926.25
M 1077.45 927.85
Q 1077.5 929.3 1074.4 934.25 1064.9927734375 934.138671875 1061.9 937.25 978.4537109375 955.12109375 930.975 943.9 903.0076171875 937.29296875 888.35 936.2 885.201953125 932.6775390625 882.4 933.15 877.6185546875 929.683203125 876.4 928.7 877.8947265625 925.1 884.75 922.3 898.7466796875 918.1033203125 916.8 915.65 944.11171875 910.53828125 970.7 909.75"/>

                    <path id="Symbol_7_0_Layer1_0_1_STROKES" stroke="#DFDFDF" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" fill="none" d="
M 0 0
L 0 67.25"/>
                </defs>

                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                    <use xlinkHref="#Layer0_0_FILL_T3"/>

                    <use xlinkHref="#Layer0_0_1_STROKES"/>
                </g>

                <g transform="matrix( 1, 0, 0, 1, 1078.25,928.8) ">
                    <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                        <use xlinkHref="#Symbol_6_0_Layer0_0_FILL_T3"/>
                    </g>
                </g>

                <g transform="matrix( 1, 0, 0, 1, 1078.3,927.3) ">
                    <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                        <use xlinkHref="#Symbol_6_0_Layer0_0_FILL_T3"/>
                    </g>
                </g>

                <g transform="matrix( 1, 0, 0, 1, 971.6,542.8) ">
                    <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                        <use xlinkHref="#Symbol_7_0_Layer1_0_1_STROKES"/>
                    </g>

                    <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                        <use xlinkHref="#Symbol_7_0_Layer0_0_FILL_T3"/>
                    </g>
                </g>
            </svg>


        </>
    )
}
export default TallLampPreviewRight;
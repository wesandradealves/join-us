import React, { useEffect, useState, InputHTMLAttributes } from 'react';

import {
  Link,
} from "react-router-dom";

import {
  SVG,
} from './Logo.styles';

interface ILogo extends InputHTMLAttributes<HTMLInputElement> {
  wrapTag: string;
  fill?: string;
}

export const Logo: React.FC<ILogo> = ({ fill, wrapTag }) => {
  const CustomTag:any = wrapTag;

  return (
    <CustomTag className="logo">
      <SVG 
      fill={fill} 
      width="148" 
      height="34" 
      viewBox="0 0 148 34" 
      xmlns="http://www.w3.org/2000/svg">
        <path d="M130.533 11.7694H130.413C130.101 11.773 129.802 11.9025 129.583 12.1297C129.363 12.357 129.24 12.6636 129.24 12.9832V24.9842C129.24 25.3061 129.365 25.6149 129.587 25.8425C129.81 26.0701 130.112 26.198 130.427 26.198C130.741 26.198 131.043 26.0701 131.266 25.8425C131.488 25.6149 131.613 25.3061 131.613 24.9842V12.9696C131.611 12.668 131.499 12.3781 131.3 12.1563C131.1 11.9344 130.827 11.7965 130.533 11.7694ZM117.56 12.9696C117.557 12.7192 117.478 12.476 117.333 12.274C117.269 12.1726 117.182 12.0883 117.08 12.0286H116.987C116.807 11.9193 116.602 11.861 116.394 11.8597C116.185 11.8584 115.979 11.9142 115.799 12.0212C115.618 12.1282 115.468 12.2827 115.365 12.4686C115.262 12.6544 115.21 12.8651 115.213 13.0787V14.2378C114.747 13.4389 114.079 12.7838 113.278 12.342C112.478 11.9002 111.575 11.6882 110.667 11.7285C109.739 11.7083 108.819 11.8927 107.967 12.2692C107.116 12.6458 106.354 13.2056 105.733 13.9105C104.402 15.3948 103.689 17.352 103.747 19.3656C103.708 21.1493 104.354 22.8776 105.547 24.1796C106.137 24.8335 106.858 25.3497 107.661 25.6933C108.464 26.0368 109.33 26.1997 110.2 26.1707C111.188 26.2382 112.175 26.0177 113.046 25.535C113.917 25.0522 114.636 24.327 115.12 23.4432V23.7432V24.9297C115.123 25.2482 115.248 25.5528 115.467 25.7793C115.685 26.0058 115.982 26.1364 116.293 26.1434H116.373C116.679 26.1294 116.967 25.9953 117.178 25.7692C117.389 25.5431 117.507 25.2424 117.507 24.9297V13.5287C117.507 13.5287 117.507 13.5287 117.507 13.4332L117.56 12.9696ZM113.867 22.5158C113.439 22.9666 112.924 23.3208 112.354 23.5556C111.785 23.7905 111.174 23.9009 110.56 23.8796C109.996 23.8804 109.439 23.7593 108.924 23.5242C108.409 23.2892 107.949 22.9456 107.573 22.5158C107.163 22.0694 106.844 21.5443 106.633 20.9708C106.422 20.3973 106.325 19.7868 106.347 19.1746C106.296 17.7882 106.742 16.4306 107.6 15.3561C107.978 14.8797 108.456 14.4962 108.998 14.2342C109.54 13.9721 110.133 13.8382 110.733 13.8424C111.315 13.8404 111.89 13.9604 112.425 14.195C112.959 14.4295 113.441 14.7737 113.84 15.2061C114.295 15.6949 114.648 16.2735 114.878 16.9066C115.107 17.5397 115.207 18.214 115.173 18.8883C115.213 19.5607 115.117 20.2343 114.892 20.8676C114.668 21.5008 114.318 22.0803 113.867 22.5704V22.5158ZM141 11.7013C139.596 11.6824 138.218 12.0902 137.041 12.8728C135.864 13.6555 134.94 14.7778 134.387 16.0978C133.834 17.4177 133.676 18.8758 133.934 20.2875C134.192 21.6992 134.853 23.0009 135.835 24.0277C136.816 25.0546 138.074 25.7604 139.448 26.0558C140.822 26.3512 142.25 26.223 143.553 25.6872C144.856 25.1515 145.974 24.2324 146.765 23.0463C147.557 21.8603 147.987 20.4606 148 19.0246C148.005 18.0772 147.828 17.1381 147.478 16.2607C147.129 15.3834 146.614 14.5851 145.962 13.9114C145.311 13.2376 144.536 12.7017 143.683 12.3342C142.829 11.9667 141.913 11.7748 140.987 11.7694L141 11.7013ZM143.08 23.2386C142.437 23.5798 141.724 23.7575 141 23.7569C140.029 23.7501 139.085 23.43 138.302 22.8424C137.519 22.2547 136.937 21.4293 136.64 20.4838C136.429 19.7978 136.37 19.0724 136.467 18.3602C136.564 17.6479 136.814 16.9665 137.2 16.3653C137.648 15.6777 138.267 15.1242 138.992 14.7615C139.718 14.3987 140.525 14.2397 141.331 14.3008C142.137 14.3618 142.912 14.6407 143.578 15.1089C144.244 15.5771 144.776 16.2177 145.12 16.9654C145.661 18.0954 145.75 19.3965 145.37 20.593C144.989 21.7894 144.168 22.7872 143.08 23.375V23.2386ZM44.4933 11.7694C43.0871 11.7532 41.7079 12.1649 40.5309 12.9522C39.3539 13.7395 38.4323 14.8668 37.8832 16.191C37.334 17.5152 37.1821 18.9765 37.4467 20.3892C37.7113 21.8019 38.3804 23.1023 39.3692 24.1252C40.358 25.148 41.6217 25.8472 42.9998 26.1338C44.3779 26.4205 45.8082 26.2817 47.109 25.735C48.4098 25.1884 49.5224 24.2586 50.3054 23.0638C51.0884 21.8689 51.5065 20.463 51.5066 19.0246C51.5119 18.0772 51.3347 17.1381 50.9851 16.2607C50.6355 15.3834 50.1203 14.5851 49.4691 13.9114C48.8178 13.2376 48.0432 12.7017 47.1895 12.3342C46.3357 11.9667 45.4196 11.7748 44.4933 11.7694ZM46.5733 23.3068C45.9307 23.6479 45.2173 23.8257 44.4933 23.8251C43.5222 23.8183 42.5781 23.4982 41.7952 22.9106C41.0124 22.3229 40.4308 21.4975 40.1333 20.552C39.9141 19.8551 39.8517 19.1165 39.951 18.3915C40.0503 17.6665 40.3086 16.9738 40.7066 16.3653C41.1547 15.6777 41.7733 15.1242 42.4992 14.7615C43.2251 14.3987 44.0322 14.2397 44.8379 14.3008C45.6436 14.3618 46.4189 14.6407 47.0846 15.1089C47.7503 15.5771 48.2825 16.2177 48.6266 16.9654C49.1676 18.0954 49.2572 19.3965 48.8764 20.593C48.4956 21.7894 47.6743 22.7872 46.5866 23.375L46.5733 23.3068ZM60.3866 11.674C59.4844 11.6886 58.607 11.9782 57.8666 12.5059C57.0526 13.0821 56.4073 13.8741 56 14.797V12.9696C55.9978 12.668 55.8861 12.3781 55.6864 12.1563C55.4868 11.9344 55.2136 11.7965 54.92 11.7694H54.8C54.4875 11.773 54.1891 11.9025 53.9695 12.1297C53.7498 12.357 53.6266 12.6636 53.6266 12.9832V24.9842C53.6266 25.3061 53.7516 25.6149 53.9742 25.8425C54.1967 26.0701 54.4986 26.198 54.8133 26.198C55.128 26.198 55.4298 26.0701 55.6524 25.8425C55.8749 25.6149 56 25.3061 56 24.9842V19.5292C55.951 18.152 56.3756 16.8008 57.2 15.7107C57.5331 15.2448 57.9684 14.8652 58.4708 14.6023C58.9733 14.3395 59.5289 14.2006 60.0933 14.1969H60.6666C60.824 14.2088 60.9818 14.1829 61.1277 14.1214C61.2735 14.0598 61.4033 13.9643 61.5066 13.8424C61.7036 13.5915 61.8075 13.2775 61.7999 12.9559C61.7822 12.1013 61.3111 11.674 60.3866 11.674ZM96.3866 11.674C95.3574 11.6661 94.3449 11.9392 93.4533 12.465C92.6109 12.9423 91.9456 13.6899 91.5599 14.5924V12.9696C91.5578 12.668 91.446 12.3781 91.2464 12.1563C91.0468 11.9344 90.7735 11.7965 90.4799 11.7694H90.3199C90.0192 11.7867 89.7361 11.9204 89.5282 12.1432C89.3202 12.3661 89.2028 12.6615 89.1999 12.9696V24.9706C89.1999 25.2925 89.325 25.6012 89.5475 25.8289C89.77 26.0565 90.0719 26.1843 90.3866 26.1843C90.7013 26.1843 91.0032 26.0565 91.2257 25.8289C91.4482 25.6012 91.5733 25.2925 91.5733 24.9706V19.8292C91.5701 19.2369 91.6013 18.6449 91.6666 18.0564C91.7224 17.5184 91.8342 16.9881 91.9999 16.4744C92.1533 15.9745 92.4026 15.5109 92.7333 15.1106C93.0774 14.7283 93.5012 14.43 93.9733 14.2378C94.5624 13.998 95.1927 13.8821 95.8266 13.8969C97.951 13.8969 99.031 15.397 99.0666 18.3973C99.0666 19.1792 99.0666 20.3202 99.0666 21.8203C99.0666 23.3205 99.0666 24.0433 99.0666 24.5478C99.0666 25.5979 99.5466 26.1025 100.333 26.1025C101.12 26.1025 101.533 25.7752 101.667 24.5478V17.7291C101.761 16.1227 101.288 14.5352 100.333 13.2559C99.8516 12.6901 99.248 12.2465 98.57 11.9601C97.892 11.6737 97.1582 11.5524 96.4266 11.6058L96.3866 11.674ZM120.92 4.60973C120.605 4.60973 120.303 4.7376 120.081 4.96523C119.858 5.19285 119.733 5.50157 119.733 5.82347V24.9842C119.733 25.3061 119.858 25.6149 120.081 25.8425C120.303 26.0701 120.605 26.198 120.92 26.198C121.235 26.198 121.536 26.0701 121.759 25.8425C121.982 25.6149 122.107 25.3061 122.107 24.9842V5.76892C122.107 5.45625 121.989 5.15552 121.778 4.9294C121.567 4.70328 121.279 4.56923 120.973 4.55518L120.92 4.60973ZM85.8533 11.7694H85.7333C85.4209 11.773 85.1224 11.9025 84.9028 12.1297C84.6831 12.357 84.5599 12.6636 84.5599 12.9832V24.9842C84.5599 25.3061 84.685 25.6149 84.9075 25.8425C85.13 26.0701 85.4319 26.198 85.7466 26.198C86.0613 26.198 86.3632 26.0701 86.5857 25.8425C86.8082 25.6149 86.9333 25.3061 86.9333 24.9842V12.9696C86.9311 12.668 86.8194 12.3781 86.6197 12.1563C86.4201 11.9344 86.1469 11.7965 85.8533 11.7694ZM65.3333 11.7694H65.2133C64.9009 11.773 64.6025 11.9025 64.3828 12.1297C64.1631 12.357 64.0399 12.6636 64.0399 12.9832V24.9842C64.0399 25.3061 64.165 25.6149 64.3875 25.8425C64.6101 26.0701 64.9119 26.198 65.2266 26.198C65.5413 26.198 65.8432 26.0701 66.0657 25.8425C66.2883 25.6149 66.4133 25.3061 66.4133 24.9842V12.9696C66.4112 12.668 66.2994 12.3781 66.0998 12.1563C65.9001 11.9344 65.6269 11.7965 65.3333 11.7694ZM81.5333 11.8649C81.353 11.7834 81.1558 11.749 80.9593 11.765C80.7628 11.781 80.5733 11.8467 80.4079 11.9563C80.2425 12.066 80.1064 12.216 80.0119 12.3929C79.9174 12.5698 79.8675 12.768 79.8666 12.9696V14.0606C79.3939 13.3175 78.745 12.7089 77.9802 12.2916C77.2155 11.8743 76.3599 11.6618 75.4933 11.674C74.566 11.6537 73.6453 11.8381 72.7939 12.2147C71.9426 12.5912 71.1806 13.151 70.5599 13.856C69.2246 15.3379 68.5112 17.2967 68.5733 19.311C68.5503 21.1102 69.2153 22.8474 70.4266 24.1524C71.0103 24.8151 71.7271 25.3409 72.528 25.694C73.3288 26.0471 74.1948 26.219 75.0666 26.198C76.0336 26.2091 76.9876 25.9698 77.8399 25.5025C78.6621 25.0539 79.349 24.3843 79.8266 23.5659V25.7343C79.8526 26.4035 79.7481 27.0714 79.5192 27.6989C79.2903 28.3264 78.9415 28.901 78.4933 29.3892C78.0586 29.8417 77.5365 30.1967 76.9603 30.4314C76.3841 30.6662 75.7664 30.7757 75.1466 30.7529C74.1905 30.7587 73.243 30.5686 72.3599 30.1938C72.1991 30.1334 72.0431 30.0605 71.8933 29.9756C71.7399 29.8885 71.5793 29.8155 71.4133 29.7574C71.2895 29.7395 71.1638 29.7395 71.0399 29.7574C70.8893 29.7572 70.7405 29.7914 70.6045 29.8575C70.4684 29.9235 70.3484 30.0198 70.2533 30.1392C70.0419 30.3843 69.9236 30.6989 69.9199 31.0257C69.9199 31.5621 70.2622 32.0167 70.9466 32.3894C72.2493 33.0035 73.6728 33.3021 75.1066 33.2622C76.056 33.2949 77.0021 33.1319 77.8886 32.7828C78.775 32.4337 79.5838 31.9057 80.2666 31.2302C80.9455 30.5376 81.4726 29.7051 81.8128 28.7881C82.1531 27.8711 82.2987 26.8906 82.2399 25.9116V25.2024V22.9932C82.2399 21.3748 82.2399 18.6473 82.2399 14.8106V12.9696C82.2413 12.7383 82.178 12.5115 82.0575 12.3158C81.937 12.1201 81.7644 11.9636 81.5599 11.8649H81.5333ZM79.8933 19.7747C79.7727 20.8149 79.3012 21.7794 78.5599 22.5022C78.1396 22.9401 77.6372 23.2866 77.0827 23.521C76.5282 23.7553 75.9332 23.8727 75.3333 23.866C74.7651 23.8706 74.2025 23.7513 73.6829 23.5162C73.1634 23.281 72.6987 22.9354 72.3199 22.5022C71.9076 22.0546 71.5867 21.5273 71.3761 20.9512C71.1654 20.3752 71.0693 19.7619 71.0933 19.1474C71.0536 17.7485 71.5296 16.3855 72.4266 15.3288C72.8154 14.8551 73.3041 14.4776 73.8561 14.2248C74.408 13.9721 75.0088 13.8507 75.6133 13.8696C76.1935 13.8629 76.7686 13.9809 77.3014 14.2158C77.8343 14.4507 78.313 14.7974 78.7066 15.2334C79.4053 16.0138 79.8238 17.0141 79.8933 18.07C79.9094 18.3652 79.9094 18.6612 79.8933 18.9564C79.9096 19.2289 79.9096 19.5022 79.8933 19.7747ZM125.707 23.7978C125.475 23.7978 125.248 23.8682 125.055 24C124.862 24.1319 124.711 24.3193 124.623 24.5386C124.534 24.7579 124.511 24.9992 124.556 25.232C124.601 25.4648 124.713 25.6786 124.877 25.8465C125.041 26.0143 125.25 26.1286 125.478 26.1749C125.705 26.2212 125.941 26.1975 126.156 26.1066C126.37 26.0158 126.553 25.862 126.682 25.6646C126.811 25.4673 126.88 25.2352 126.88 24.9979C126.88 24.8391 126.849 24.6819 126.789 24.5354C126.73 24.389 126.642 24.256 126.532 24.1444C126.421 24.0328 126.29 23.9447 126.146 23.8852C126.002 23.8257 125.848 23.796 125.693 23.7978H125.707ZM31.5066 17.3472C31.396 16.9682 31.2199 16.6126 30.9866 16.2971C30.8671 16.1347 30.738 15.9798 30.6 15.8334C30.3671 15.6077 30.1124 15.4067 29.84 15.2334L5.65333 0.736662L5.09333 0.395723C4.61534 0.141352 4.08545 0.00585522 3.54666 0.000233369C3.08281 -0.00517886 2.62251 0.0835975 2.19243 0.26142C1.76236 0.439243 1.37105 0.702578 1.04118 1.03617C0.711307 1.36977 0.449425 1.76699 0.270703 2.20483C0.0919806 2.64268 -3.01731e-05 3.11244 7.42226e-09 3.58691C0.0282369 4.44863 0.32192 5.2792 0.839123 5.96005C1.35633 6.6409 2.07061 7.13722 2.88 7.37815L3.62666 7.59635V30.5075C3.61432 30.7255 3.61432 30.944 3.62666 31.1621C3.68163 31.4032 3.75291 31.6402 3.84 31.8712C3.91617 32.0686 4.01462 32.2563 4.13333 32.4304C4.2473 32.6057 4.37673 32.7701 4.52 32.9213C4.65693 33.0682 4.80398 33.205 4.96 33.3304C5.11327 33.4454 5.2736 33.5502 5.44 33.6441L5.89333 33.8487L6.41333 33.985H6.95999H7.03999C7.25734 34.005 7.47599 34.005 7.69333 33.985C7.96226 33.9277 8.22556 33.8455 8.47999 33.7396L8.83999 33.5623H8.91999L9.33333 33.3986L9.94666 33.044L29.3333 21.8203L29.9866 21.4248C30.2579 21.2559 30.5086 21.0544 30.7333 20.8248C30.9221 20.622 31.0876 20.3978 31.2266 20.1565C31.3739 19.9056 31.4861 19.6347 31.56 19.3519C31.6186 19.1331 31.6587 18.9095 31.68 18.6837C31.7003 18.466 31.7003 18.2468 31.68 18.0291C31.6394 17.7976 31.5815 17.5696 31.5066 17.3472ZM4 6.50535L3.70666 6.40989L3.25333 6.28715C2.66584 6.11359 2.14533 5.75819 1.76332 5.26979C1.38132 4.78139 1.15658 4.18397 1.12 3.55964C1.1235 2.92055 1.37327 2.30865 1.81509 1.85674C2.25692 1.40483 2.85517 1.14937 3.48 1.14579C3.84739 1.13155 4.21288 1.20632 4.54666 1.36399L4.90666 1.58219L5.09333 1.69129C9.81146 4.64402 13.6195 8.8982 16.08 13.9651L16 13.9515L15.8533 13.7742L15.56 13.4196L15.4267 13.2696L15.08 12.9014L14.9867 12.8059L14.5733 12.3968C11.5107 9.66834 7.90207 7.6576 4 6.50535ZM8.82666 32.4167L8.50666 32.6076L8.23999 32.7304C8.0544 32.8067 7.86253 32.8661 7.66666 32.9077C7.50265 32.9249 7.33734 32.9249 7.17333 32.9077H6.79999L6.43999 32.8122L6.10666 32.6622L5.81333 32.4713L5.50666 32.1849C5.40766 32.0799 5.31839 31.9658 5.24 31.8439C5.16964 31.7375 5.11148 31.6231 5.06666 31.503C5.00216 31.3341 4.94871 31.1609 4.90666 30.9848C4.89768 30.8212 4.89768 30.6573 4.90666 30.4938V7.99184C6.54185 8.59214 8.12513 9.33114 9.63999 10.2011L9.82666 10.3102L10.1867 10.5284L10.4667 10.7057L10.68 10.8421C11.1067 11.1148 11.5333 11.4012 12.0133 11.7149L12.4667 12.0695C13.098 12.5677 13.695 13.11 14.2533 13.6923C14.6497 14.1228 15.0194 14.5783 15.36 15.0561L15.4267 15.1516L15.6933 15.5334L15.84 15.7516L16.0533 16.1062L16.2133 16.4062L16.3867 16.7335C16.4844 16.9335 16.5778 17.1336 16.6667 17.3336L16.7733 17.5927L16.9467 18.0427L17.04 18.3155C17.0933 18.4791 17.1422 18.6473 17.1867 18.8201L17.3333 19.0928C17.3333 19.3247 17.44 19.5701 17.48 19.8156C17.48 20.0474 17.48 20.2793 17.48 20.5111C17.48 20.743 17.48 20.6884 17.48 20.7839C17.48 20.8793 17.48 21.193 17.48 21.3976C17.48 21.6021 17.48 21.6021 17.48 21.6976C17.48 21.7931 17.48 22.0794 17.3733 22.2567C17.2667 22.434 17.3733 22.4749 17.3067 22.584C17.24 22.6931 17.2133 22.925 17.1733 23.0886C17.1333 23.2523 17.1733 23.3341 17.0667 23.4568C16.96 23.5796 16.96 23.7569 16.9067 23.9069C16.8533 24.0569 16.8133 24.1796 16.7467 24.316L16.5867 24.6706C16.52 24.8342 16.44 24.9842 16.36 25.1479L16.2267 25.3797C14.4484 28.3656 11.8901 30.7839 8.83999 32.3622L8.82666 32.4167ZM30.44 19.0928C30.3932 19.275 30.3214 19.4495 30.2266 19.611C30.1329 19.7779 30.0211 19.9334 29.8933 20.0747C29.7223 20.2245 29.5342 20.3527 29.3333 20.4566L28.6933 20.8521L15.24 28.6391L15.4267 28.4073L15.8 27.9436L16.12 27.5208L16.3467 27.2072L16.7333 26.5935L16.9067 26.2798C17.0267 26.0616 17.1467 25.8434 17.2533 25.6252L17.3733 25.3661C17.4711 25.1661 17.56 24.9615 17.64 24.7524L17.7333 24.5206C17.8267 24.2887 17.9067 24.0433 17.9867 23.8114V23.6068C18.0667 23.3477 18.1333 23.075 18.2 22.8022V22.6386C18.2 22.3522 18.3067 22.0658 18.3467 21.7658V21.6976C18.414 21.1776 18.4496 20.6538 18.4533 20.1293C18.4533 20.0338 18.4533 19.9383 18.4533 19.8429C18.4533 19.7474 18.4533 19.7611 18.4533 19.7065C18.4533 19.652 18.4533 19.5429 18.4533 19.4474C18.4533 19.3519 18.4533 19.1065 18.4533 18.9428C18.4533 18.7792 18.4533 18.8064 18.4533 18.7382C18.4533 18.3109 18.3955 17.8836 18.28 17.4563V17.3608C18.28 17.129 18.1867 16.8835 18.1333 16.6517V16.5835C16.9499 12.4363 14.7303 8.67605 11.6933 5.67346L29.2533 16.188C29.4489 16.3151 29.632 16.4612 29.8 16.6244L30.08 16.9654C30.1544 17.0693 30.2213 17.1787 30.28 17.2927C30.337 17.4072 30.386 17.5257 30.4266 17.6472C30.4695 17.8083 30.5007 17.9724 30.52 18.1382C30.533 18.2788 30.533 18.4203 30.52 18.561C30.5105 18.7405 30.4837 18.9187 30.44 19.0928Z" fill="#DE8F75"/>
      </SVG>
    </CustomTag>
  );
};

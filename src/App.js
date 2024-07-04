import './App.css';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

import React from "react";

const Icon = (props) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className='svg-icon'
    {...props}
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1={10}
        y1={0}
        x2={10}
        y2={100}
        id="gradient-1"
        gradientTransform="matrix(0.703292, 0, 0, 0.703292, 0.000244, 0.000057)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "rgb(255, 255, 255)",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "rgb(216, 216, 216)",
          }}
        />
      </linearGradient>
    </defs>
    <path
      d="M 7.033 0 L 14.066 70.329 L 0 70.329 L 7.033 0 Z"
      style={{
        fill: "url('#gradient-1')",
        transformOrigin: "7.033px 70.329px",
      }}
      transform="matrix(0.707107007504, 0.707107007504, -0.707107007504, 0.707107007504, 30.502734757066, -8.554577152534)"
      bxShape="triangle 0 0 14.066 70.329 0.5 0 1@f7e1842e"
    />
    <path
      d="M 25 55 C 13.96 55 5 63.96 5 75 C 5 86.04 13.96 95 25 95 C 36.04 95 45 86.04 45 75 C 45 63.96 36.04 55 25 55 Z M 27 61.6 L 29.7 59.7 C 33.34 60.82 36.44 63.22 38.46 66.38 L 37.68 69.06 L 34.98 69.98 L 27 64.4 L 27 61.6 Z M 20.3 59.7 L 23 61.6 L 23 64.4 L 15.02 69.98 L 12.32 69.06 L 11.54 66.38 C 13.56 63.24 16.66 60.84 20.3 59.7 Z M 15.16 85.22 L 12.88 85.42 C 10.46 82.62 9 78.98 9 75 C 9 74.76 9.02 74.54 9.04 74.3 L 11.04 72.84 L 13.8 73.8 L 16.72 82.48 L 15.16 85.22 Z M 30 90.18 C 28.42 90.7 26.74 91 25 91 C 23.26 91 21.58 90.7 20 90.18 L 18.62 87.2 L 19.9 85 L 30.12 85 L 31.4 87.22 L 30 90.18 Z M 29.54 81 L 20.46 81 L 17.76 72.96 L 25 67.88 L 32.26 72.96 L 29.54 81 Z M 37.12 85.42 L 34.84 85.22 L 33.26 82.48 L 36.18 73.8 L 38.96 72.86 L 40.96 74.32 C 40.98 74.54 41 74.76 41 75 C 41 78.98 39.54 82.62 37.12 85.42 Z"
      style={{
        fill: "rgb(216, 216, 216)",
      }}
    />
  </svg>
);

function App() {
  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, {
      width: elementRef.current.offsetWidth,
      height: elementRef.current.offsetHeight,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='svg-container' ref={elementRef} onClick={htmlToImageConvert}>
      <Icon />
    </div>
  );
}

export default App;

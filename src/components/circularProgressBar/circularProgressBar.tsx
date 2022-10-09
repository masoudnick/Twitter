import "./circularProgressBar";

import React from "react";

interface Progress {
  viewBox: number;
  width: number;
  height: number;
  radius: number;
  strokeColor: string;
  percentage: number;
}

const CircularProgressBar = ({
  viewBox,
  width,
  height,
  radius,
  strokeColor,
  percentage,
}: Progress) => {
  const dashArray: number = radius * Math.PI * 2;
  const dashOffset: number = dashArray - (dashArray * percentage) / 100;

  return (
    <svg
      className="overflow-visible"
      height={height}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      width={width}
    >
      <circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r={radius}
        stroke="#EFF3F4"
      ></circle>
      <circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r={radius}
        stroke={strokeColor}
        strokeLinecap="round"
        style={{
          strokeDashoffset: dashOffset,
          strokeDasharray: dashArray,
        }}
      ></circle>
    </svg>
  );
};

export default CircularProgressBar;

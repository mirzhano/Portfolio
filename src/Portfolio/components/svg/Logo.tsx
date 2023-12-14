import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
    return (
        <img
            className={`w-${width} h-${height}`}
            src="/mlogo.png"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;

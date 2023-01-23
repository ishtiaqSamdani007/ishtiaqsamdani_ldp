import React from "react";
interface Props {
  text: string;
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
}

function Button({
  text,
  bgColor,
  color,
  width,
  height,
  border,
  borderRadius,
  padding,
  margin,
  fontSize,
  fontWeight,
  onClick,
}: Props) {
  const style = {
    backgroundColor: bgColor,
    color: color,
    width: width,
    height: height,
    border: border,
    borderRadius: borderRadius,
    padding: padding,
    margin: margin,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };

  return (
    <>
      <button onClick={onClick} style={style}>
        {text}
      </button>
    </>
  );
}

export default Button;

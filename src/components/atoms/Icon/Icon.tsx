import React from "react";
interface Props {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  margin?: string;
  onClick?: () => void;
}
function Icon({ src, alt, width, height, margin, onClick }: Props) {
  const style = {
    width: width,
    height: height,
    margin: margin,
    cursor: "pointer",
  };
  return (
    <>
      <img src={src} alt={alt} style={style} onClick={onClick} />
    </>
  );
}

export default Icon;

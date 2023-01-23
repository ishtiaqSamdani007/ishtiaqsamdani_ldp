import React from "react";
interface Props {
  text: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
}
function Typography({ text, fontWeight, fontSize, color, lineHeight }: Props) {
  const style = {
    fontWeight: fontWeight,
    fontSize: fontSize,
    color: color,
    lineHeight: lineHeight,
  };
  return (
    <>
      <p className="typo" style={style}>
        {text}
      </p>
    </>
  );
}

export default Typography;

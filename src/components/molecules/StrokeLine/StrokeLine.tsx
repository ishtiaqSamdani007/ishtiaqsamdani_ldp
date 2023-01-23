import React from "react";
interface Props {
  text: string;
  color?: string;
}

function StrokeLine({ text, color }: Props) {
  const style = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "16px 0",
  };
  const lineStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: color,
  };
  const textStyle = {
    width: "auto",
    height: "auto",
    margin: "0 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: `${color}` || "#333",
  };

  return (
    <>
      <div style={style}>
        <div style={lineStyle}></div>
        <p style={textStyle}>{text}</p>
        <div style={lineStyle}></div>
      </div>
    </>
  );
}

export default StrokeLine;

import React, { useState } from "react";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";
import eyeOpen from "../../../assets/eye-open.svg";
import eyeClose from "../../../assets/eye-close.svg";
import "../../../App.css";
interface Props {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  error?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  labelfontWeight?: string;
  labelfontSize?: string;
  labelLineHeight?: string;
  color?: string;
  bgColor?: string;
  required: boolean;
}

function TextField({
  placeholder,
  type,
  value,
  onChange,
  name,
  label,
  error,
  width,
  height,
  border,
  borderRadius,
  padding,
  margin,
  fontSize,
  labelfontWeight,
  labelfontSize,
  labelLineHeight,
  fontWeight,
  color,
  bgColor,
  required,
}: Props) {
  const style = {
    width: width,
    height: height,
    border: border,
    borderRadius: borderRadius,
    padding: padding,
    margin: margin,
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    backgroundColor: bgColor,
  };
  const [watchPassword, setWatchPassword] = useState(false);
  const setPass = () => {
    setWatchPassword(!watchPassword);
  };

  return (
    <>
      <label htmlFor={name}>
        <Typography
          text={label}
          fontSize={labelfontSize}
          fontWeight={labelfontWeight}
          lineHeight={labelLineHeight}
        />
      </label>
      {type === "password" ? (
        <div className="inp-pass">
          <Icon
            src={watchPassword ? eyeClose : eyeOpen}
            alt={watchPassword ? "eye-close" : "eye-open"}
            width="20px"
            margin="0 0 0 10px"
            onClick={setPass}
          />

          <input
            type={watchPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            style={style}
            autoComplete="off"
            required={required}
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          style={style}
          autoComplete="off"
          required={required}
        />
      )}
    </>
  );
}

export default TextField;

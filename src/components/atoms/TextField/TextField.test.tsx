import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from "./TextField";
describe("TextField component", () => {
  it("should render label and input", () => {
    const placeholder = "Email";
    const type = "email";
    const name = "email";
    const label = "Email";
    const { getByText, getByPlaceholderText } = render(
      <TextField
        placeholder={placeholder}
        type={type}
        name={name}
        label={label}
        required={false}
      />
    );

    const input = getByPlaceholderText(placeholder);
    const inputLabel = getByText(label);

    expect(input).toBeInTheDocument();
    expect(inputLabel).toBeInTheDocument();
  });

  it("should render with correct styles", () => {
    const placeholder = "Email";
    const type = "email";
    const name = "email";
    const label = "Email";
    const width = "100px";
    const height = "50px";
    const border = "1px solid #D0D5DD";
    const borderRadius = "10px";
    const padding = "5px";
    const margin = "10px";
    const fontSize = "20px";
    const fontWeight = "bold";
    const labelfontWeight = "normal";
    const labelfontSize = "14px";
    const labelLineHeight = "1.2";
    const color = "black";
    const bgColor = "white";
    const required = true;

    const { getByPlaceholderText } = render(
      <TextField
        placeholder={placeholder}
        type={type}
        name={name}
        label={label}
        width={width}
        height={height}
        border={border}
        borderRadius={borderRadius}
        padding={padding}
        margin={margin}
        fontSize={fontSize}
        fontWeight={fontWeight}
        labelfontWeight={labelfontWeight}
        labelfontSize={labelfontSize}
        labelLineHeight={labelLineHeight}
        color={color}
        bgColor={bgColor}
        required={required}
      />
    );

    const input = getByPlaceholderText(placeholder);

    expect(input).toHaveStyle(`width: ${width}`);
    expect(input).toHaveStyle(`height: ${height}`);
    expect(input).toHaveStyle(`border: ${border}`);
    expect(input).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(input).toHaveStyle(`padding: ${padding}`);
    expect(input).toHaveStyle(`margin: ${margin}`);
    expect(input).toHaveStyle(`font-size: ${fontSize}`);
    expect(input).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(input).toHaveStyle(`color: ${color}`);
    expect(input).toHaveStyle(`background-color: ${bgColor}`);
    expect(input).toHaveAttribute("required");
  });

  it("should toggle password visibility", () => {
    const placeholder = "Enter text";
    const type = "password";
    const name = "input-name";
    const label = "Input label";
    const { getByPlaceholderText, getByAltText } = render(
      <TextField
        placeholder={placeholder}
        type={type}
        name={name}
        label={label}
        required={false}
      />
    );

    const input = getByPlaceholderText(placeholder);
    const eyeOpenIcon = getByAltText("eye-open");

    expect(input).toHaveAttribute("type", "password");
    expect(eyeOpenIcon).toBeInTheDocument();
    fireEvent.click(eyeOpenIcon);

    expect(input).toHaveAttribute("type", "text");
    const eyeCloseIcon = getByAltText("eye-close");
    expect(eyeCloseIcon).toBeInTheDocument();

    fireEvent.click(eyeCloseIcon);

    expect(input).toHaveAttribute("type", "password");
    expect(eyeCloseIcon).toBeInTheDocument();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should render text and handle onClick", () => {
    const text = "Sign in";
    const onClick = jest.fn();
    const { getByText } = render(<Button text={text} onClick={onClick} />);

    const button = getByText(text);
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render with correct styles", () => {
    const bgColor = "#0052FF";
    const color = "white";
    const width = "100px";
    const height = "50px";
    const borderRadius = "10px";
    const padding = "12px 16px";
    const margin = "10px";
    const fontWeight = "bold";

    const { getByText } = render(
      <Button
        text="Styled button"
        bgColor={bgColor}
        color={color}
        width={width}
        height={height}
        borderRadius={borderRadius}
        padding={padding}
        margin={margin}
        fontWeight={fontWeight}
      />
    );

    const button = getByText("Styled button");

    expect(button).toHaveStyle(`background-color: ${bgColor}`);
    expect(button).toHaveStyle(`color: ${color}`);
    expect(button).toHaveStyle(`width: ${width}`);
    expect(button).toHaveStyle(`height: ${height}`);
    expect(button).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(button).toHaveStyle(`padding: ${padding}`);
    expect(button).toHaveStyle(`margin: ${margin}`);
    expect(button).toHaveStyle(`font-weight: ${fontWeight}`);
  });
});

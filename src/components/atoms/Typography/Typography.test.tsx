import React from "react";
import { render } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography component", () => {
  it("should render text with the correct styles", () => {
    const text = "Login to Minet";
    const fontWeight = "bold";
    const fontSize = "40px";
    const color = "#343446";
    const lineHeight = "1.5";
    const { getByText } = render(
      <Typography
        text={text}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        lineHeight={lineHeight}
      />
    );

    const element = getByText(text);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(element).toHaveStyle(`font-size: ${fontSize}`);
    expect(element).toHaveStyle(`color: ${color}`);
    expect(element).toHaveStyle(`line-height: ${lineHeight}`);
  });
});

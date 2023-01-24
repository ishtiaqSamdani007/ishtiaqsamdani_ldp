import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon component", () => {
  it("should render an image with the correct src and alt", () => {
    const src = "image.png";
    const alt = "image alt";
    const { getByAltText } = render(<Icon src={src} alt={alt} />);

    const image = getByAltText(alt);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", src);
  });

  it("should render with correct styles", () => {
    const src = "image.png";
    const alt = "image alt";
    const width = "20px";
    const height = "20px";
    const margin = "0px";

    const { getByAltText } = render(
      <Icon src={src} alt={alt} width={width} height={height} margin={margin} />
    );

    const image = getByAltText(alt);

    expect(image).toHaveStyle(`width: ${width}`);
    expect(image).toHaveStyle(`height: ${height}`);
    expect(image).toHaveStyle(`margin: ${margin}`);
    expect(image).toHaveStyle(`cursor: pointer`);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("CheckBox component", () => {
  it("should render label and checkbox", () => {
    const name = "rememberMe";
    const label = "Remember me";
    const { getByText, getByTestId } = render(
      <CheckBox name={name} label={label} />
    );

    const checkbox = getByTestId(name);
    const checkboxLabel = getByText(label);

    expect(checkbox).toBeInTheDocument();
    expect(checkboxLabel).toBeInTheDocument();
  });
});

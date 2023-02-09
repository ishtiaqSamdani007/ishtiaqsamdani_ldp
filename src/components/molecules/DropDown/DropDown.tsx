import React from "react";
import { Select, MenuItem, styled } from "@mui/material";
interface Props {
  arr: string[];
  dropDownWidth?: string;
}
function DropDown({ arr, dropDownWidth }: Props) {
  const StyledDropDown = styled(Select)({
    height: "40px",
    width: `${dropDownWidth}`,
    padding: "4px",
    borderRadius: "4px",
    color: "#000000",
    lableColor: "#ff0000",
    "&.Mui-focused": {
      labelColor: "#000000",
    },
  });
  return (
    <StyledDropDown
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={arr[0]}
      label={arr[0]}
    >
      {arr.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </StyledDropDown>
  );
}

export default DropDown;

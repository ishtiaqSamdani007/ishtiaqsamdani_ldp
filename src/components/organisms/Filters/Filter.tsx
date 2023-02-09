import React from "react";
import SearchInput from "../../molecules/SearchInput/SearchInput";
import DropDown from "../../molecules/DropDown/DropDown";
import { Stack } from "@mui/material";
function Filter() {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <SearchInput />
      <DropDown arr={["24h", "1h", "5h"]} dropDownWidth="85px" />
      <DropDown arr={["All assests"]} dropDownWidth="150px" />
    </Stack>
  );
}

export default Filter;

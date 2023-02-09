import React from "react";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const StyledOutlinedInput = styled(OutlinedInput)({
  padding: "0px 10px",
  height: "40px",
  width: "230px",
  borderRadius: "5px",
  border: "1px solid #E0E0E0",
  "&:hover": {
    border: "1px solid #E0E0E0",
  },
  "&.Mui-focused": {
    border: "1px solid #E0E0E0",
  },
});
function SearchInput() {
  return (
    <>
      <StyledOutlinedInput
        id="search"
        type="text"
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}

export default SearchInput;

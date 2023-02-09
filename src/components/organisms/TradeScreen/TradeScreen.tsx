import React from "react";
import TabSlider from "../../organisms/TabSlider/TabSlider";
import Typography from "../../atoms/Typography/Typography";
import SearchInput from "../../molecules/SearchInput/SearchInput";
import { Stack } from "@mui/system";
import Filter from "../Filters/Filter";
function TradeScreen() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" fontWeight="bold">
          Trade
        </Typography>
        <Filter />
      </Stack>
      <TabSlider />
    </>
  );
}

export default TradeScreen;

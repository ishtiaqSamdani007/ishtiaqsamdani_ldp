import React from "react";
import { Typography as TyporaphyMui, TypographyProps } from "@mui/material";

function Typography(props: TypographyProps) {
  return <TyporaphyMui {...props}>{props.children}</TyporaphyMui>;
}

export default Typography;

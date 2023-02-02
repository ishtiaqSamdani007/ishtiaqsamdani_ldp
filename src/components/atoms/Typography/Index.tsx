import React from "react";
import { Typography as TypographyMui, TypographyProps } from "@mui/material";

function Typography({ children, ...props }: TypographyProps) {
  return (
    <>
      <TypographyMui {...props}>{children}</TypographyMui>
    </>
  );
}
export default Typography;

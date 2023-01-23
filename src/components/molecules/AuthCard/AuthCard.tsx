import React from "react";
import Typography from "../../Atoms/Typography/Typography";
import Icon from "../../Atoms/Icon/Icon";
import "../../App.css";
interface Props {
  src: string;
  authProvider: string;
  width?: string;
}
function AuthCard({ src, authProvider, width }: Props) {
  return (
    <>
      <div className="auth-card" style={{ width: `${width}` || "100%" }}>
        <Icon
          src={src}
          alt="social-icon"
          width="20px"
          height="20px"
          margin="0 auto"
        />
        <Typography
          text={authProvider}
          fontWeight="500"
          fontSize="14px"
          color="#333"
          lineHeight="20px"
        />
      </div>
    </>
  );
}

export default AuthCard;

import React from "react";
import Button from "../../atoms/Button/Button";
import TextField from "../../atoms/TextField/TextField";
import Typography from "../../atoms/Typography/Typography";
import StrokeLine from "../../molecules/StrokeLine/StrokeLine";
import SocialAuth from "../SocialAuth/SocialAuth";

function LoginForm() {
  return (
    <>
      <Typography
        text="Login to Minet"
        fontWeight="bold"
        fontSize="40px"
        color="#343446"
      />
      <br />
      <form>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          onChange={() => {}}
          width="100%"
          padding="12px 16px"
          bgColor="#fff"
          border="1px solid #D0D5DD"
          margin="0 0 16px 0"
          labelfontSize="14px"
          labelfontWeight="500"
          labelLineHeight="20px"
          required
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          onChange={() => {}}
          width="100%"
          padding="12px 16px"
          bgColor="#fff"
          border="1px solid #D0D5DD"
          labelfontSize="14px"
          labelfontWeight="500"
          labelLineHeight="20px"
          required
        />
        {/* <CheckBox name="remember" label="Remember me" /> */}
        {/* <Button text="Login" /> */}
        {/* <Typography text="Forgot password?" />
        <Typography text="Don't have an account?" /> */}
        <br />
        <Button
          text="Sign in"
          width="100%"
          bgColor="#0052FF"
          color="#fff"
          border="none"
          borderRadius="4px"
          padding="12px 16px"
        />
        {/* <Icon /> */}
      </form>

      <StrokeLine text="Or" color="#E8E8F7" />
      <SocialAuth />
      <br />
      <div className="forget-pass">
        <Typography
          text="Don't have an account?"
          fontWeight="500"
          fontSize="16px"
          color="#7D7D89"
          lineHeight="20px"
        />
        <Button
          text="Sign up"
          bgColor="#fff"
          color="#0052FF"
          border="none"
          fontWeight="500"
          fontSize="16px"
          margin="0 0 0 8px"
        />
      </div>
    </>
  );
}

export default LoginForm;

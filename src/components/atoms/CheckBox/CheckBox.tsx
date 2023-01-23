import React from "react";
interface Props {
  name: string;
  label: string;
}
function CheckBox({ name, label }: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" name={name} />
    </>
  );
}

export default CheckBox;

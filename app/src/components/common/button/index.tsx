import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";
interface Props {
  label?: string;
  color?: string;
  sx?: SxProps;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  variant?: 'contained' | 'outlined';
  onclick?: () => void;
}
const CustomButton = (props: Props) => {
  const { label, color, sx, type, icon, variant, onclick } = props;
  return (
    <Button
      type={type}
      onClick = {onclick}
      variant = {variant}
      startIcon={icon}
      sx={{
        textTransform: "none",
        fontSize: "14px",
        color: color,
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

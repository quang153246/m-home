import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";
interface Props {
  label?: string;
  color?: string;
  sx?: SxProps;
  bgcolor?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
}
const CustomButton = (props: Props) => {
  const { label, color, sx, bgcolor, type, icon } = props;
  return (
    <Button
      type={type}
      variant="contained"
      startIcon={icon}
      sx={{
        textTransform: "none",
        fontSize: "14px",
        color: color,
        bgcolor: bgcolor,
        ...sx,
        "&:hover": {
          bgcolor: bgcolor,
          opacity: 0.8,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

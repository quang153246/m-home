import { Box, Typography,useTheme } from "@mui/material";
import { ReactNode } from "react";

interface FooterItemProps {
  label: string;
  icon?: ReactNode;
}

const FooterItem = (props: FooterItemProps) => {
  const theme = useTheme();
  const { label, icon } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {icon}
      <Typography color="GrayText">{label}</Typography>
    </Box>
  );
};

export default FooterItem;

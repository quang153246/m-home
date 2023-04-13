import React, { ReactNode } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const AvatarItem = (props: Props) => {
  const { icon, title, description } = props;
  return (
    <Box sx={{ display: "flex", align: "center", color: "inherit" }}>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{
          margin: 0,
          ".MuiTypography-root":{
            color:"inherit",
          }
        }}
        primary={title}
        secondary={description}
      />
    </Box>
  );
};

export default AvatarItem;

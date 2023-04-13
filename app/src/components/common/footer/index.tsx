import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { flexSpaceBetween, flexVertical } from "../../../theme/common";
import AvatarItem from "../../avatar-item";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...flexVertical,
        bgcolor: "info.dark",
        color: theme.palette.grey[500],
        pt: 2,
        gap: 1,
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "18px", mt: "10px", fontWeight: 600 }}
      >
        {/* LIÊN HỆ PHÒNG KINH DOANH */}
        Liên Hệ Phòng Kinh Doanh
      </Typography>
      <Typography variant="h2" sx={{ fontSize: "32px", fontWeight: 600 }}>
        035 647 8484
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "500px", textAlign: "center" }}
      >
        Vui lòng để lại thông tin, đội ngũ chuyên viên tư vấn của chúng tôi sẽ
        liên hệ, tư vấn và gửi thông tin cho Quý vị trong thời gian nhanh nhất.
      </Typography>
      <Box sx={{ ...flexSpaceBetween, gap: "100px" }}>
        <AvatarItem
          icon={<CallIcon />}
          title="Điện thoại"
          description="034 656 7777"
        />
        <AvatarItem
          icon={<LocationOnIcon />}
          title="Địa chỉ"
          description="Masteri Thảo Điền, Quận 2"
        />
        <AvatarItem
          icon={<EmailIcon />}
          title="Email"
          description="thtrung@gmail.com"
        />
      </Box>
      <Typography
        variant="body2"
        sx={{textAlign: "center",mb: 1 }}
      >
        © 2023 . All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

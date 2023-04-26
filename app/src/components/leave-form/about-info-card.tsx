import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
const AboutInfoCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "inherit",
        borderRadius: "8px",
        px: 4,
        pt: 2,
        pb: 4,
        border: "1px solid #ebebeb",
        height: "100%",
      }}
    >
      <Typography
        component="h4"
        sx={{ fontSize: "20px", fontWeight: 700, mb: "30px" }}
      >
        Thông tin liên hệ
      </Typography>
      <Typography component="h5" sx={{ fontSize: "16px", fontWeight: 600 }}>
        Địa chỉ
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "14px", fontWeight: 400, mb: "30px", mt: "5px" }}
      >
        Chung cư Mastery Thảo Điền, Thành phố Thủ Đức
      </Typography>

      <Typography component="h5" sx={{ fontSize: "16px", fontWeight: 600 }}>
        Điện thoại
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "14px", fontWeight: 400, mb: "30px", mt: "5px" }}
      >
        (84) 32-243-4444
      </Typography>

      <Typography component="h5" sx={{ fontSize: "16px", fontWeight: 600 }}>
        E-Mail
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "14px", fontWeight: 400, mb: "30px", mt: "5px" }}
      >
        tttrung@gmail.com
      </Typography>
      <Typography component="h5" sx={{ fontSize: "16px", fontWeight: 600 }}>
        Theo dõi
      </Typography>
      <Stack direction={"row"} mt= {"5px"}>
        <FacebookIcon
          sx={{
            mr: "12px",
            width: "24px",
            height: "24px",
            cursor: "pointer",
            color: "text.primary",
          }}
        />
        <InstagramIcon
          sx={{
            mr: "12px",
            width: "24px",
            height: "24px",
            cursor: "pointer",
            color: "text.primary",
          }}
        />
        <TwitterIcon
          sx={{
            mr: "12px",
            width: "24px",
            height: "24px",
            cursor: "pointer",
            color: "text.primary",
          }}
        />
        <TelegramIcon
          sx={{
            mr: "12px",
            width: "24px",
            height: "24px",
            cursor: "pointer",
            color: "text.primary",
          }}
        />
      </Stack>
    </Box>
  );
};

export default AboutInfoCard;

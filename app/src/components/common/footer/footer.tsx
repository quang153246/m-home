import { Box, useTheme, Typography, Stack } from "@mui/material";
import { flexCenter, flexSpaceBetween } from "../../../theme/common";
import FooterItem from "../../footer-item";
import logo from "../../../assets/logo/logo.svg";
import check1 from "../../../assets/check1.png";
import check2 from "../../../assets/check2.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
const MyFooter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 8,
        ...flexCenter,
        background: 'linear-gradient(2deg, #FFFFFF 80%, #ff5a5f 300%)'
      }}
    >
      <Box sx={{ width: "80%", display: 'flex', justifyContent: 'space-between' }}>
        <img src={logo} height={"32px"} />

        <Stack gap={2} maxWidth={300}>
          <Typography fontWeight={600}>Liên hệ</Typography>
          <FooterItem
            label={"180018293"}
            icon={
              <PhoneInTalkOutlinedIcon
                sx={{ color: "#FF692E", width: "18px", height: "18px" }}
              />
            }
          />
          <FooterItem
            label={"mhome@gmail.com"}
            icon={
              <MailOutlineIcon
                sx={{ color: "#FF692E", width: "18px", height: "18px" }}
              />
            }
          />
          <FooterItem
            label={"12 Hoàng Văn Thụ, Phường 8, Quận Tân Bình, HCM"}
            icon={
              <PlaceOutlinedIcon
                sx={{ color: "#FF692E", width: "18px", height: "18px" }}
              />
            }
          />
        </Stack>
        <Stack gap={2}>
          <Typography fontWeight={600}>Danh mục</Typography>
          <FooterItem label={"Trang chủ"} />
          <FooterItem label={"Căn hộ bán"} />
          <FooterItem label={"Căn hộ thuê"} />
          <FooterItem label={"Blog"} />
        </Stack>
        <Stack gap={2}>
          <Typography fontWeight={600}>Về chúng tôi</Typography>
          <FooterItem label={"Chính sách và Điều khoản"} />
          <FooterItem label={"Bảo mật thông tinv"} />
          <FooterItem label={"FAQs"} />
        </Stack>
        <Stack gap={1}>
          <Typography fontWeight={600}>Đăng kí</Typography>
          <Typography color="GrayText">Để không bỏ lỡ bất kì tin tức nào.</Typography>
          <Box display = "flex" gap = {1}>
            <Box component = "img" src = {check1} width = {100}/>
            <Box component = "img" src = {check2} width = {100}/>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyFooter;

import panel from "../../../assets/panel/panel0.jpg";
import {
  Box,
  Typography,
  useTheme,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CustomButton from "../button";
import { flexCenter } from "../../../theme/common";
const Panel = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 60px)",
        backgroundImage: `url(${panel})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          color: theme.palette.grey[200],
          textShadow: "0px 1px 1px rgba(255, 255, 255, 0.4)",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Stack alignItems={"center"}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {md: "40px", lg: "55px", xs: "30px"},
              maxWidth: "85%",
            }}
          >
            Tìm Kiếm Căn Hộ Tốt Nhất Cho Bạn
          </Typography>
          <Typography
            sx = {{
              fontSize : {md: "16px", lg: "18px", xs: "14px"},
              mt: 2,
              fontWeight: 600,
              maxWidth: "60%",
            }}
          >
            Chuyên cung cấp dịch vụ mua bán và cho thuê căn hộ. Lấy sự tận tâm
            và uy tín đặt lên hàng đầu. Sự hài lòng khách hàng là mục tiêu mà
            đội ngũ M Home luôn hướng tới.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            mt: 3,
            width: "60%",
            height: "70px",
            bgcolor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "0px 20px 20px 20px",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 30px 60px -15px rgba(143, 144, 188, 0.15)",
          }}
        >
          <TextField
            id="outlined-size-small"
            size="small"
            placeholder="Tìm kiếm..."
            sx={{ width: "85%" }}
            InputProps={{
              style: {
                borderRadius: "20px",
                backgroundColor: theme.palette.grey[100],
                color: theme.palette.info.dark,
              },
            }}
          />
          <CustomButton
            icon={<SearchOutlinedIcon />}
            sx={{
              borderRadius: "10px",
              padding: "10px 0px",
              "& .MuiButton-startIcon": {
                margin: 0,
                fontSize: "30px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Panel;

import panel from "../../../assets/panel/panel0.jpg";
import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CustomButton from "../button";
const Panel = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${panel})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          color: theme.palette.grey[300],
          textShadow: "0px 1px 1px rgba(255, 255, 255, 0.4)",
          pl: 5,
          width: "100%",
          height: "100%",
          zIndex: 10,
          bgcolor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box width={"50%"} mt={5}>
          <Typography variant="h3">
            MANG SỰ TÂN TÂM VÀ CHUYÊN NGHIỆP PHỤC VỤ KHÁCH HÀNG
          </Typography>
          <Typography variant="body1" mt={2}>
            Chuyên cung cấp dịch vụ mua bán và cho thuê căn hộ. Lấy sự tận tâm
            và uy tín đặt lên hàng đầu. Sự hài lòng khách hàng là mục tiêu mà
            đội ngũ M-home luôn hướng tới.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            mt: 3,
            width: "50%",
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
            sx={{width:"85%"}}
            InputProps={{
              style: {
                  borderRadius: "20px",
                  backgroundColor: theme.palette.grey[100],
                  color: theme.palette.info.dark
              }
          }}
          />
          <CustomButton
            icon = {<SearchOutlinedIcon/>}
            sx={{
              borderRadius: "10px",
              padding: "10px 0px",
              "& .MuiButton-startIcon": {
                margin : 0,
                fontSize: "30px",
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Panel;

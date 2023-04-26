import {
  Container,
  Paper,
  Stack,
  Box,
  CardMedia,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import img from "../../assets/404.png";
import CustomButton from "../../components/common/button";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const theme = useTheme();
    const navigate = useNavigate();
  return (
    <Paper
      sx={{ width: "100%", height: "calc(100vh - 60px)", display: "flex" }}
    >
      <Stack sx={{ m: "auto" }} alignItems={"center"}>
        <Box
          mb={"50px"}
          component="img"
          alt="404 image"
          src={img}
        //   width={400}
          sx={{
            mb: "50px",
            width: "400px",
            [theme.breakpoints.down('sm')]: {
                width: "300px"
            }
          }}
        />
        <Typography component="h1" sx={{ fontSize: "45px", fontWeight: 700, textAlign: "center" }}>
          Ohh! Không tìm thấy trang
        </Typography>
        <Typography mb="25px" variant="body1">
          Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm
        </Typography>
          <Link to={"/"}>
            <CustomButton
            variant="contained"
            label="Quay lại"
            sx={{
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "16px",
                height: "45px",
                width: "170px",
            }}
            />
          </Link>
      </Stack>
    </Paper>
  );
};

export default NotFound;

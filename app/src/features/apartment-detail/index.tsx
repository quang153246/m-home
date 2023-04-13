import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Slider from "../../components/preview-swiper";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ApartmentList from "../../components/apartment-list";
import LeaveInfoForm from "../../components/leave-form/leave-form";
import BrokerCard from "../../components/broker-card";

const ApartmentDetail = () => {
  const theme = useTheme();
  return (
    <Box mt={8}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontSize: "30px",
            mb: 5,
            [theme.breakpoints.down("md")]: {
              fontSize: "20px",
            },
          }}
        >
          Căn hộ E303, Tháp 1 Chung cư Mastery Thảo Điền
        </Typography>
        <Grid container columnSpacing={3}>
          <Grid item md={8}>
            <Slider />
            <Stack
              mt={2}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
              >
                <BusinessOutlinedIcon
                  sx={{ color: theme.palette.primary.light, fontSize: "30px" }}
                />
                <Typography
                  
                  fontWeight= {700}
                >
                  Tháp 1
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
              >
                <AspectRatioOutlinedIcon
                  sx={{ color: theme.palette.primary.light, fontSize: "30px" }}
                />
                <Typography
                  
                  fontWeight= {700}
                >
                  100m<sup>2</sup>
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
              >
                <LocationOnIcon
                  sx={{ color: theme.palette.primary.light, fontSize: "30px" }}
                />
                <Typography
                  
                  fontWeight= {700}
                >
                  Quận 2
                </Typography>
              </Stack>
            </Stack>
            <Box mt={5}>
              <Typography
                fontSize="18px"
                fontWeight= {700}
                sx={{mb: 2 }}
              >
                Thông tin cơ bản:
              </Typography>
              <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Loại hình:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      Căn hộ
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Phòng ngủ:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      2
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Phòng tắm:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      2
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Diện tích:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      100m<sup>2</sup>
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Tình trạng nội thất:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      Đầy đủ nội thất
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Loại chủ quyền:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      Sổ hồng
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Dự án:{" "}
                    </Box>{" "}
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      Mastery Thảo Điền
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Tháp:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      T5
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="body1">
                    <Box
                      component="span"
                    >
                      Giá bán:{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{fontWeight: 600 }}
                    >
                      4.2 tỷ
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box mt={5}>
              <Typography
                fontSize="18px"
                fontWeight="bold"
                sx={{mb: 2 }}
              >
                Ưu điểm ngôi nhà:
              </Typography>
              <Typography variant="body1">Vị trí đắc địa</Typography>
              <Typography variant="body1">View Landmark 81</Typography>
              <Typography variant="body1">Đỗ xe miễn phí</Typography>
              <Typography variant="body1">Vị trí đắc địa</Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <LeaveInfoForm/>
            <BrokerCard/>
          </Grid>
        </Grid>
        <Box mt={3}>
          <ApartmentList title="Căn hộ liên quan"/>
        </Box>
      </Container>
    </Box>
  );
};

export default ApartmentDetail;

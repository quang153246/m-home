import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Stack, Tooltip, useTheme } from "@mui/material";
import panel1 from "../../assets/panel/panel3.jpg";
import HotelIcon from "@mui/icons-material/Hotel";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { Box } from "@mui/system";
import { boxShadow1 } from "../../theme/common";
import { useNavigate } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function ProductCard() {
  const theme = useTheme()
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        borderRadius: 2,
        bgcolor: "background.default",
        p: 1,
        overflow: "hidden",
        "&:hover": {
          ...boxShadow1,
        },
      }}
      onClick={() => navigate("/apartments/1")}
    >
      <CardActionArea >
        <Box sx={{position: "relative"}}>
          <CardMedia
            sx={{borderRadius: 2}}
            component="img"
            height="210"
            image={panel1}
            alt="card image"
          />
          <Stack direction="row" spacing={1} sx={{position: "absolute", top: "12px", left: "12px"}}>
            <Chip sx = {{px: 1, height: "25px", borderRadius: "5px", fontSize: "13px"}} label="Nổi bật" color= "info" />
            <Chip sx = {{px: 1, height: "25px", borderRadius: "5px", fontSize: "13px"}} label="Cho thuê" color="primary" />
          </Stack>
          <Stack direction="row" sx={{position: "absolute", bottom: "12px", left: "12px",color: "common.white", fontWeight: 700, textShadow: "0px 1px 1px rgba(255, 255, 255, 0.4)"}}>
            <Typography
                variant="body1"
                sx={{ fontSize: "22px" }}
              >
                1,2 tỉ
                <Box
                component="small"
                sx={{ fontSize: "14px"}}
              >
                 /mo
              </Box>
              </Typography>
          </Stack>
        </Box>
        <CardContent>
          <Typography variant="body1" sx = {{color: "primary.main", mb: '6px'}}>
            Penhouse
          </Typography>
          <Typography
            gutterBottom
            component="div"
            className="ellipsis-2"
            sx = {{fontWeight: 700, fontSize: "18px", color: "text.primary"}}
          >
            Căn hộ 302, Tháp T2
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="ellipsis-1"
            sx={{ display: "flex", alignItems: "center", ml: "-5px" }}
          >
            <LocationOnOutlinedIcon />
            Chung cư Mastery Thảo Điền, quận 9
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              mt: "8px",
              color: "text.secondary",
            }}
          >
            <Tooltip title="Số phòng ngủ">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <HotelIcon />
                <Box>
                  2<sup></sup>
                </Box>
              </Box>
            </Tooltip>
            <Tooltip title="Diện tích">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <AspectRatioIcon />
                <Box>
                  100m<sup>2</sup>
                </Box>
              </Box>
            </Tooltip>
            <Box flexGrow={1} />
            {/* <Typography
              variant="body1"
              sx={{color: "#097dc0" }}
            >
              1.2 tỉ
            </Typography> */}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

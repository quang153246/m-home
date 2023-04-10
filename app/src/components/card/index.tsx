import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import panel1 from "../../assets/panel/panel3.jpg";
import HotelIcon from "@mui/icons-material/Hotel";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { Box } from "@mui/system";
import { boxShadow1 } from "../../theme/common";

export default function ProductCard() {
  return (
    <Card
      sx={{
        borderRadius:"20px",
        overflow: "hidden",
        "&:hover": {
          ...boxShadow1,
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={panel1}
          alt="card image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className="ellipsis-2">
            Bán căn hộ Mastery Thảo Điền T6/2021- LH em Trúc chuyên Mastery Thảo
            Điền
          </Typography>
          <Typography variant="body2" color="text.secondary" className = "ellipsis-1">
            T3/305 Mastery Thảo Điền - Quận 9, Thành phố Hồ Chí Minh
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mt: "5px",
            }}
          >
            <Tooltip title="Số phòng ngủ">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "text.secondary",
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
            <Typography
              variant="h5"
              sx={{ fontSize: "16px", color: "#097dc0" }}
            >
              1.2 tỉ
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

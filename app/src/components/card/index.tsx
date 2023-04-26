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

export interface CardProps {
  imageUrl: string;
  title: string;
  type: string;
  address?: string;
  bed?: number;
  square?: number;
  price?: number;
  currency?: string;
  cycle?: string;
  updated?: string;
}

export default function ProductCard(props: CardProps) {
  const {
    title,
    address,
    type,
    bed,
    square,
    price,
    currency,
    cycle,
    imageUrl,
    updated
  } = props;
  const theme = useTheme();
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
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            sx={{ borderRadius: 2, height: "210px" }}
            component="img"
            image={imageUrl}
            alt="card image"
          />
          <Stack
            direction="row"
            spacing={1}
            sx={{ position: "absolute", top: "12px", left: "12px" }}
          >
            <Chip
              sx={{
                px: 1,
                height: "25px",
                borderRadius: "5px",
                fontSize: "13px",
              }}
              label="Nổi bật"
              color="info"
            />
            <Chip
              sx={{
                px: 1,
                height: "25px",
                borderRadius: "5px",
                fontSize: "13px",
              }}
              label="Cho thuê"
              color="primary"
            />
          </Stack>
          {price && (
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                color: "common.white",
                fontWeight: 700,
                textShadow: "0px 1px 1px rgba(255, 255, 255, 0.4)",
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "22px" }}>
                {`${price} ${currency}`}
                <Box component="small" sx={{ fontSize: "14px" }}>
                  /{cycle}
                </Box>
              </Typography>
            </Stack>
          )}
        </Box>
        <CardContent>
          <Typography variant="body1" sx={{ color: "primary.main", mb: "6px" }}>
            {type}
          </Typography>
          <Typography
            gutterBottom
            component="h3"
            className="ellipsis-2"
            sx={{ fontWeight: 700, fontSize: "18px", color: "text.primary" }}
          >
            {title}
          </Typography>

          {address && (
            <Typography
              variant="body1"
              color="text.secondary"
              className="ellipsis-1"
              sx={{ display: "flex", alignItems: "center", ml: "-5px" }}
            >
              <LocationOnOutlinedIcon />
              {address}
            </Typography>
          )}
          {bed && (
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
                    {bed}
                    <sup></sup>
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
                    {square}m<sup>2</sup>
                  </Box>
                </Box>
              </Tooltip>
              <Box flexGrow={1} />
            </Box>
          )}
          {updated && (
            <Typography
            variant="body1"
            color="text.secondary"
            sx={{textAlign: "end", mt: "12px"}}
          >
            {updated}
          </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

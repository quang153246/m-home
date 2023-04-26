import { Box, Card, Container, Typography, useTheme } from "@mui/material";
import "./styles.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard, { CardProps } from "../card";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { apartments } from "../apartment-list/mock-data";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const SLIDE_PRIVEW_DESKTOP = 3;
const SLIDE_PRIVEW_TABLET = 2;
const SLIDE_PRIVEW_MOBILE = 1;

const CardListSwiper = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", pt: 5, pb: 8 }}>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Căn Hộ Nổi Bật
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "16px",
            }}
          >
            Những căn hộ được chọn lựa cẩn thận bởi đội ngũ của chúng tôi.
          </Typography>
        </Box>
        <Swiper
          style={{
            height: "100%",
            width: "100%",
          }}
          loop={true}
          spaceBetween={50}
          slidesPerView={SLIDE_PRIVEW_DESKTOP}
          slidesPerGroup={SLIDE_PRIVEW_DESKTOP}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: SLIDE_PRIVEW_MOBILE,
              slidesPerGroup: SLIDE_PRIVEW_MOBILE,
            },
            640: {
              slidesPerView: SLIDE_PRIVEW_TABLET,
              slidesPerGroup: SLIDE_PRIVEW_TABLET,
            },
            1024: {
              slidesPerView: SLIDE_PRIVEW_DESKTOP,
              slidesPerGroup: SLIDE_PRIVEW_DESKTOP,
            },
          }}
        >
          {apartments.map((apartment: CardProps) => (
            <SwiperSlide>
              <ProductCard
                title={apartment.title}
                address={apartment.address}
                type={apartment.type}
                price={apartment.price}
                currency={apartment.currency}
                cycle={apartment.cycle}
                bed={apartment.bed}
                square={apartment.square}
                imageUrl={apartment.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default CardListSwiper;

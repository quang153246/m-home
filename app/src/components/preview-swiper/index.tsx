import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "./styles.css"
import panel1 from "../../assets/panel/panel1.jpg";
import panel2 from "../../assets/panel/panel2.jpg";
import panel3 from "../../assets/panel/panel3.jpg";
import panel4 from "../../assets/panel/panel4.jpg";
import { CardMedia } from "@mui/material";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CardMedia
            component="img"
            height="350"
            image={panel1}
            alt="card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            component="img"
            height="350"
            image={panel2}
            alt="card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            component="img"
            height="350"
            image={panel3}
            alt="card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            component="img"
            height="350"
            image={panel4}
            alt="card image"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={(swiper:any) => setThumbsSwiper(swiper)}
        onSlideChange={(swiper:any) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardMedia
            component="img"
            height="80"
            image={panel1}
            alt="card image"
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            component="img"
            height="80"
            image={panel2}
            alt="card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            component="img"
            height="80"
            image={panel3}
            alt="card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            component="img"
            height="80"
            image={panel4}
            alt="card image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

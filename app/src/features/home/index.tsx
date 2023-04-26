import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, useTheme } from "@mui/material";
import logo from "../../assets/panel.png";
import ApartmentList from "../../components/apartment-list";
import Panel from "../../components/common/panel";
import Map from "../../components/map";
import { CardListSwiper } from "../../components/swiper";
import ArticelList from "../../components/apartment-list/article-list";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Panel />
      {/* <ApartmentList dark={true} title="Căn Hộ Nổi Bật" /> */}
      <CardListSwiper />
      <ApartmentList
        title="Căn Hộ Bán"
        description="Những căn hộ được chọn lựa cẩn thận bởi đội ngũ của chúng tôi."
      />
      <ApartmentList
        dark={true}
        title="Căn Hộ Cho Thuê"
        description="Những căn hộ được chọn lựa cẩn thận bởi đội ngũ của chúng tôi."
      />
      <ArticelList
        title="Tin tức & Mẹo"
        description="Những bài viết mới nhất và mẹo hay dành cho bạn."
      />
    </Box>
  );
};

export default Home;

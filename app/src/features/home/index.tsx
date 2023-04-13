import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, useTheme } from "@mui/material";
import logo from "../../assets/panel.png";
import ProductCard from "../../components/card";
import CustomButton from "../../components/common/button";
import { flexCenter } from "../../theme/common";
import LeaveForm from "../../components/leave-form";
import CartSkeleton from "../../components/skeleton/cart-skeleton";
import { Link } from "react-router-dom";
import ApartmentList from "../../components/apartment-list";
import Panel from "../../components/common/panel";

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
      {/* <Container> */}
        <ApartmentList dark={true} title="Căn Hộ Nổi Bật" />
        <ApartmentList title="Căn Hộ Bán" />
        <ApartmentList dark={true} title="Căn Hộ Cho Thuê" />
        <LeaveForm />
      {/* </Container> */}
    </Box>
  );
};

export default Home;

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

const Home = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Box sx={{ width: "100%" }}>
      {/* <Box sx={{ bgcolor: "#f6fbff", pt: "50px" }}>
        <Container>
          <Box sx={{ width: "100%" , display: "flex", justifyContent: "space-between", mb: 2, alignItems: "flex-end"}}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[900],
                fontWeight: 300
              }}
            >
              Căn hộ bán
            </Typography>
            <Link to="/about">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: theme.typography.fontWeightRegular,
                  color: theme.palette.primary.light,
                }}
              >
                Xem tất cả
              </Typography>
            </Link>
          </Box>
        
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2, md: 3 }}
            columnSpacing={{ sm: 2, md: 4 }}
          >
            {loading ? (
              <>
                <Grid item xs={12} md={4} sm={6}>
                  <CartSkeleton />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  <CartSkeleton />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  <CartSkeleton />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={4} sm={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  <ProductCard />
                </Grid>
              </>
            )}
          </Grid>
         
        </Container>
      </Box> */}
      <ApartmentList/>
      <LeaveForm />
    </Box>
  );
};

export default Home;

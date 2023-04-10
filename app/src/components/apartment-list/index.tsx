import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, useTheme } from "@mui/material";
import ProductCard from "../../components/card";
import CartSkeleton from "../../components/skeleton/cart-skeleton";
import { Link } from "react-router-dom";

const ApartmentList = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Box sx={{ bgcolor: "#f6fbff", pt: 3, pb: 5}}>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.grey[900],
            }}
          >
            CĂN HỘ BÁN
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
        {/* <Typography
            sx={{
              fontSize: "35px",
              fontWeight: 700,
              textAlign: "center",
              mb: "30px",
            }}
          >
            CĂN HỘ BÁN{" "}
            <Box component="span" color="#f9a61c">
              NỔI BẬT
            </Box>
          </Typography> */}
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
        {/* <Box sx={{ ...flexCenter, my: "30px" }}>
            <CustomButton
              label="XEM TẤT CẢ"
              bgcolor="#f9a61c"
              sx={{ fontSize: "18px", fontWeight: 600, px: "40px" }}
            />
          </Box> */}
      </Container>
    </Box>
  );
};

export default ApartmentList;

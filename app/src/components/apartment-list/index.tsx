import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, useTheme } from "@mui/material";
import ProductCard from "../../components/card";
import CartSkeleton from "../../components/skeleton/cart-skeleton";
import { Link } from "react-router-dom";



interface Props {
  title?: string
}

const ApartmentList = (props: Props) => {
  const {title} = props;
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <Box sx={{ bgcolor: "inherit", pt: 3, pb: 5}}>
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
            {title || "CĂN HỘ BÁN"}
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
    </Box>
  );
};

export default ApartmentList;

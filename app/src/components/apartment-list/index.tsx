import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, useTheme } from "@mui/material";
import ProductCard from "../../components/card";
import CartSkeleton from "../../components/skeleton/cart-skeleton";
import { Link } from "react-router-dom";



interface Props {
  title: string,
  dark?: boolean,
}

const ApartmentList = (props: Props) => {
  const {title, dark} = props;
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <Box sx={{ bgcolor: dark ? "background.paper" : "background.default", pt: 5, pb: 8}}>
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
              fontWeight: 700
            }}
          >
            {title}
          </Typography>
          <Link to="/about">
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "16px",
              }}
            >
              Những căn hộ được chọn lựa cẩn thận bởi đội ngũ của chúng tôi.
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
      </Container>
    </Box>
  );
};

export default ApartmentList;

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import ProductCard, { CardProps } from "../../components/card";
import CartSkeleton from "../../components/skeleton/cart-skeleton";
import { Link } from "react-router-dom";
import { apartments } from "./mock-data";

interface Props {
  title: string;
  description: string;
  dark?: boolean;
}

const ApartmentList = (props: Props) => {
  const { title, description, dark } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <Box
      sx={{
        bgcolor: dark ? "background.paper" : "background.default",
        pt: 5,
        pb: 8,
      }}
    >
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
            {title}
          </Typography>
          <Link to="/about">
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "16px",
              }}
            >
              {description}
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
              {apartments.map((apartment:CardProps) => (
                <Grid item xs={12} md={4} sm={6}>
                  <ProductCard
                    title={apartment.title}
                    address={apartment.address}
                    type={apartment.type}
                    price={apartment.price}
                    currency={apartment.currency}
                    cycle= {apartment.cycle}
                    bed={apartment.bed}
                    square={apartment.square}
                    imageUrl={apartment.imageUrl}
                  />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ApartmentList;

import { Box, Container } from "@mui/material";
import React from "react";
import Map from "../../components/map";
import { Grid } from "@mui/material";
import LeaveInfoForm from "../../components/leave-form/leave-form";
import AboutInfoCard from "../../components/leave-form/about-info-card";
import contact from "../../assets/contact.jpg";
const Contact = () => {
  return (
    <Box sx={{ bgcolor: "background.primary" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "60vh",
          backgroundImage: `url(${contact})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.3)",
        }}
      ></Box>
      </Box>

      <Container sx={{ my: 6 }}>
        <Grid container columnSpacing={3} spacing={3}>
          <Grid item xs={12} md={8}>
            <LeaveInfoForm />
          </Grid>
          <Grid item xs={12} md={4}>
            <AboutInfoCard />
          </Grid>
        </Grid>
      </Container>
      <Map />
    </Box>
  );
};

export default Contact;

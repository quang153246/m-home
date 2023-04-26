import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box sx = {{height: 0, position: "relative", overflow: "hidden", pb: "45%"}}>
      <Box
        component="iframe"
        sx={{
          border: 0,
          left: 0,
          top: 0,
          height: "100%",
        //   maxHeight: "100vh",
          width: "100%",
          position: "absolute",
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5552730354773!2d106.74140166536593!3d10.802844635182764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752795ca49761d%3A0x6482990173973b16!2zTWFzdGVyaSBUaOG6o28gxJBp4buBbiAtIFQ1!5e0!3m2!1svi!2s!4v1681660183747!5m2!1svi!2s"
        allowFullScreen
      />
    </Box>
  );
};

export default Map;

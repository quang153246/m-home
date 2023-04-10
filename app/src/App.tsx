import React from "react";
import { Box, CssBaseline } from "@mui/material";
import MainLayout from "./layout/main-layout";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './theme/theme';
import 'swiper/css';
import "./App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainLayout />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

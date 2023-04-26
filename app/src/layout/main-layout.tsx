import Header from "../components/common/header";
import { Routes, Route } from "react-router-dom";
import Home from "../features/home";
import About from "../features/about";
import News from "../features/news";
import Contact from "../features/contact";
import Sale from "../features/sale";
import Rent from "../features/rent";
import Project from "../features/project";
import Panel from "../components/common/panel";
import Footer from "../components/common/footer";
import ApartmentDetail from "../features/apartment-detail";
import { Box } from "@mui/material";
import NotFound from "../features/not-found";

const MainLayout = () => {
  const handleScroll = (event: any) => {
    console.log("scroll: ", scrollY)

  };
  return (
    <Box >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments/:id" element={<ApartmentDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default MainLayout;

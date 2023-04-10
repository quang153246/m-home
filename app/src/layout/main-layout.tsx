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

const MainLayout = () => {
  return (
    <>
      <Header />
      <Panel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default MainLayout;

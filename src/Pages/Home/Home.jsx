import { useEffect } from "react";
import About from "../../Components/AboutUs/About";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  //aos scroll effect initialize:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

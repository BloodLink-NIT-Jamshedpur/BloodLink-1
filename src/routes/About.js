import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import MyVideo from "../assets/homevideo1.mp4";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Button from "../components/Button";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroVideo={MyVideo} title="About" text="" />
      <AboutUs />
      <Button/>
      <Footer />
    </>
  );
}
export default About;

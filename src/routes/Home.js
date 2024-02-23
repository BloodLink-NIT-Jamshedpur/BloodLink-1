import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import News from "../components/News/News";
// import TestiMonials from "../components/Test/TestiMonials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1608094921578-23a6949d075a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Once a blood donor, always a lifesaver"
        text="A single drop of blood can make a huge difference"
        buttonText="Search for nearest Blood Bank"
        url="/Maps"
        btnClass="show"
        
      />
      <Button  
  
       />
      <Destination />
<News/>
      <Footer />
     
    </>
  );
}
export default Home;

import React from "react";
import "./AboutUsStyles.css";
import AboutData from "./AboutData";

import About2 from "../assets/image6.jpg";
import About3 from "../assets/image7.jpg";
function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>ABOUT US</h1>
        <p>Welcome to BloodLink, a dynamic initiative dedicated to increasing the frequency of blood donations. Our mission is to inspire both past donors and new generations to contribute regularly, fostering a culture of consistent participation. We bring fresh perspectives and innovative solutions to the challenges in the blood donation landscape. At BloodLink, we believe in the transformative power of collaboration, technology, and compassion. Join us in shaping a resilient blood donation ecosystem, ensuring a stable and sustainable blood supply for those in need. Together, let's make a significant impact on healthcare outcomes and build a healthier, more compassionate society.</p>
      </div>
      <div className="aboutcard">
        <AboutData
          image="https://plus.unsplash.com/premium_photo-1661670219639-2ea9af8e9d88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Eradicate shortage of blood"
          text="MISSION"
        />
        <AboutData
          image={About2}
          heading="Increase Frequency of Blood Donation"
          text="VISION "
        />
        <AboutData
          image={About3}
          heading="Portal for Blood Banks and Donors"
          text="SERVICE"
          
        />
        
      </div>
    </div>
  );
}

export default AboutUs;

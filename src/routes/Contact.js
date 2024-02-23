import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import ContactForm from "../components/ContactForm";
import "./Contact.css"; // Import your CSS file for styling

function Contact() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <Hero
          cName="hero-mid"
          heroImg="https://images.unsplash.com/photo-1542887800-faca0261c9e1?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title=""
          btnClass="hide"
        />
   
      </div>
      <div className="contact-container">
          {/* Add a container for styling */}
          <ContactForm />
        </div>
    </>
    
  );
}

export default Contact;

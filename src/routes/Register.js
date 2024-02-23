import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignUpUi from "../components/signupUI/signupUI";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "./Register.css";
function Register() {
  return (
    <>
      <Navbar />
        <Hero
          cName="hero-mid"
          heroImg="https://images.unsplash.com/photo-1585834015161-f7133c93d74b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title=""
          btnClass="hide"
        />
        <div className="register-container">
          {/* Add a container for styling */}
          <SignUpUi />
        </div>
        <Button/>
      <Footer />
    </>
  );
}
export default Register;

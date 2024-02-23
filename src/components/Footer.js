import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>BloodLink</h1>
          <p>Join us to save lives</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
         
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
           
          </ul>
        </div>

        <div>
          <h4>Community</h4>

          <ul>
            <li><a href="/forum">Community Forum</a></li>
            <li><a href="/events">Events</a></li>
        
          </ul>
        </div>

        <div>
          <h4>Contact</h4>

          <p>Phone: +1 (555) 123-4567</p>
          <p>Email: info@bloodlink.org</p>
          <p>Address: 123 Main Street, Cityville, India</p>
        </div>

        <div>
          <h4>Others</h4>

          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;


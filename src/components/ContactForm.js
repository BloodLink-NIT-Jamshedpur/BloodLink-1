import React from "react";
import "./ContactFormStyles.css";

function ContactForm() {
  return (
    
    <div className="container2">
      {/* FAQs Section */}
      <div className="bg-[#050816]">
  <div className="fixed faqs-header">
    <span className="rotate-90 text-white text-[40px] font-extrabold border-[2px] border-white80">
      FAQs
    </span>
  </div>
</div>
    <div className="parent-form">
      <div className="faqs-section">
      

        <ol>
          <li>
            <strong>What is the purpose of this form?</strong>
            <p>
              The purpose of this form is to provide users with a convenient
              way to send messages or inquiries to us. Whether you have
              questions, feedback, or any other concerns, feel free to reach
              out using this form.
            </p>
          </li>
          <li>
            <strong>How can I contact you?</strong>
            <p>
              You can contact us by using the provided contact form on this
              page. Simply fill in your name, email, and message, and we'll get
              back to you as soon as possible.
            </p>
          </li>

          {/* Add more FAQs as needed */}
          
        </ol>

        <ol>
          {/* Add the next four FAQ items similarly */}
          
          <li>
            <strong>What information should I include in my message?</strong>
            <p>
              When sending a message, please include your name, a valid email
              address, and provide as much detail as possible to help us
              address your inquiry or feedback accurately.
            </p>
          </li>
          <li>
            <strong>Is there a maximum length for the messages?</strong>
            <p>
              While there is no strict maximum length, it's recommended to keep
              your messages concise and to the point. If you have a detailed
              inquiry, you may consider breaking it into clear sections.
            </p>
          </li>
        </ol>
      </div>

      
      {/* <div className="separator"></div> */}

      
      <div className="from-container2">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" rows="3"></textarea>
          <button>Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;

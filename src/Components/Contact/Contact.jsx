import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa
          veritatis est laborum, iste aliquid accusantium illo aut repellendus
          rem laboriosam ipsam. Reprehenderit ullam nesciunt officiis nisi
          magnam accusamus quibusdam?
        </p>
        <div className="clientsImg">
          <img src="walmart.png" alt="" className="clientImg" />
          <img src="adobe.png" alt="" className="clientImg" />
          <img src="microsoft.png" alt="" className="clientImg" />
          <img src="facebook.png" alt="" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input
            type="email"
            className="email"
            placeholder="Enter Your Eamil"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submit">
            Submit
          </button>
          <div className="links">
            <img src="facebook-icon.png" alt="" className="link" />
            <img src="twitter.png" alt="" className="link" />
            <img src="youtube.png" alt="" className="link" />
            <img src="instagram.png" alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

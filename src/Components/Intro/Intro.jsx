import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ishanvi</span> <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I'm skiiled with the ReactJs and having a strong Portfolio. Now
          <br />
          looking for a role as Frontend Developer.
        </p>
        <Link>
          <button className="btn">
            <img src="hireme.png" alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src="image.png" alt="" className="bg" />
    </section>
  );
}

export default Intro;

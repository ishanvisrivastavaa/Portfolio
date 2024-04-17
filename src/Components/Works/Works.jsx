import React from "react";
import "./Works.css";

function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum inventore
        tempora cumque quis nesciunt beatae porro, dolor aut consequatur
        deleniti molestias aliquid consectetur a non. Veritatis, eos?
        Asperiores, voluptate adipisci.
      </span>
      <div className="worksImgs">
        <img src="portfolio-1.png" alt="" className="worksImg" />
        <img src="portfolio-2.png" alt="" className="worksImg" />
        <img src="portfolio-3.png" alt="" className="worksImg" />
        <img src="portfolio-4.png" alt="" className="worksImg" />
        <img src="portfolio-5.png" alt="" className="worksImg" />
        <img src="portfolio-6.png" alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works;

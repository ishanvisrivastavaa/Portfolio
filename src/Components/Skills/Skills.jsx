import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quod
        facere, dolore voluptas, aliquam temporibus sint ut necessitatibus
        doloribus ab nihil, odio ipsum iure! Eaque iusto laboriosam vero quidem
        fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        illo reiciendis quis expedita porro quos aperiam tempore voluptatibus
        aliquam quod cumque natus, debitis ipsum placeat sunt blanditiis eos,
        modi nihil.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src="ui-design.png" alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src="website-design.png"
            alt="WebDesign"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is a demo text, you can write your content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src="app-design.png" alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text, you can write your content here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

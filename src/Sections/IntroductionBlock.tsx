import React from "react";
import "./IntroductionBlock.css";

const IntroductionBlock = () => {
  return (
    <>
      <div className="Intro_wrapper">
        <h1 className="Title">Royce Kim.</h1>
        <div className="Description_Box">
          <div className="leftText">
            <p>
              I'm a developer. <br />
              A developer of: <br />
            </p>
            {/* TODO: Add links here */}
            Software. <br />
            Productivity workflows. <br />
            Mocktails. <br />
          </div>
          <img src="https://i.ibb.co/xSXyXHX/Self-Image.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default IntroductionBlock;

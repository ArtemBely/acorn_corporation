import React, { FC } from "react";

const Main: FC = () => {
  return (
    <div className="main">
      {/* Visual communications */}
      <div className="visual_communication">
        <div className="visual_communication-info">
          <p className="visual_communication-info-title">
            Visual communications <br /> for your business <br />
            without templates solutions
          </p>
          <p className="visual_communication-info-subtitle">
            We develop visual communications and web platforms <br /> for
            corporate projects, business events, and the entertainment industry
          </p>
          <button className="visual_communication-info-button">
            Let's discuss your project
          </button>
        </div>
        <div className="visual_communication-img">
          <img src="./images/main/visual_mini.svg" alt="visual_mini" />
          <p>What do the processes look like from the inside?</p>
        </div>
      </div>
      {/* A sample process */}
      <div className="sample-process">
        <p className="sample-process_title">
          A sample process for working on a project
        </p>
        <div className="sample-process_subtitle">
          <span></span>
          <p>Participation of the client in the project</p>
        </div>
        <div className="sample-process_visual">
          <img src="./images/main/visual_big.png" alt="visual-big" />
        </div>
      </div>
      {/* project */}
      <div className="projects">
        <p className="projects_title">Projects</p>
      </div>
    </div>
  );
};

export default Main;

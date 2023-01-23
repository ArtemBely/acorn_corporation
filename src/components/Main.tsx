import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";

import DiscussYourProject from "./ui/discussYourProject/DiscussYourProject";

const Main: FC = () => {
  const [processScroll, setProcessScroll] = useState(false);

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
          <p onClick={() => setProcessScroll(!processScroll)}>
            What do the processes look like from the inside?
          </p>
        </div>
      </div>
      {/* A sample process */}

      <CSSTransition
        in={processScroll}
        timeout={300}
        unmountOnExit
        classNames="alert"
      >
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
      </CSSTransition>

      {/* projects */}
      <div className="projects">
        <p className="projects_title">Projects</p>
        <div className="projects_items">
          <img src="./images/main/project.png" alt="project" />
          <img src="./images/main/project.png" alt="project" />
          <img src="./images/main/project.png" alt="project" />
          <img src="./images/main/project.png" alt="project" />
          <img src="./images/main/project.png" alt="project" />
          <img src="./images/main/project.png" alt="project" />
        </div>
      </div>
      {/* visual communications & servcies */}
      <div className="visualComm-services">
        <div className="visualComm-services-left">
          <div className="visual_comm">
            <p className="visual_comm-title">
              Visual communications for business and entertainment events
            </p>
            <p className="visual_comm-subtitle">
              We are a web studio. We have been creating brands and web projects
              since 2018 in Switzerland, Russia and the UAE. We help
              representatives of public events to develop visual communications
              of the event, we develop web pages and corporate websites.
            </p>
            <div className="visual_comm-links">
              <p>Our goal</p>
              <p>Who we work with</p>
              <p>OFeatures</p>
            </div>
          </div>
          <DiscussYourProject />
        </div>
        <div className="services">
          <div className="services_background">
            <div className="services-wrapper">
              <p className="services_title">Services</p>
              <div className="services_items">
                <div className="services_items-item">
                  <p>Web-site development</p>
                </div>
                <div className="services_items-item">
                  <p>WBranding</p>
                </div>
                <div className="services_items-item">
                  <p>Interactive web-movie</p>
                </div>
                <div className="services_items-item">
                  <p>Site created using neural networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import DiscussYourProject from "./ui/discussYourProject/DiscussYourProject";
const Main = () => {
    const [processScroll, setProcessScroll] = useState(false);
    return (React.createElement("div", { className: "main" },
        React.createElement("div", { className: "visual_communication" },
            React.createElement("div", { className: "visual_communication-info" },
                React.createElement("p", { className: "visual_communication-info-title" },
                    "Visual communications ",
                    React.createElement("br", null),
                    " for your business ",
                    React.createElement("br", null),
                    "without templates solutions"),
                React.createElement("p", { className: "visual_communication-info-subtitle" },
                    "We develop visual communications and web platforms ",
                    React.createElement("br", null),
                    " for corporate projects, business events, and the entertainment industry"),
                React.createElement(Link, { to: "/discuss" },
                    React.createElement("button", { className: "visual_communication-info-button" }, "Let's discuss your project"))),
            React.createElement("div", { className: "visual_communication-img" },
                React.createElement("img", { src: "./images/main/visual_mini.svg", alt: "visual_mini" }),
                React.createElement("p", { onClick: () => setProcessScroll(!processScroll) }, "What do the processes look like from the inside?"))),
        React.createElement(CSSTransition, { in: processScroll, timeout: 300, unmountOnExit: true, classNames: "alert" },
            React.createElement("div", { className: "sample-process" },
                React.createElement("p", { className: "sample-process_title" }, "A sample process for working on a project"),
                React.createElement("div", { className: "sample-process_subtitle" },
                    React.createElement("span", null),
                    React.createElement("p", null, "Participation of the client in the project")),
                React.createElement("div", { className: "sample-process_visual" },
                    React.createElement("img", { src: "./images/main/visual_big.png", alt: "visual-big" })))),
        React.createElement("div", { className: "projects" },
            React.createElement("p", { className: "projects_title" }, "Projects"),
            React.createElement("div", { className: "projects_items" },
                React.createElement("img", { src: "./images/main/project.png", alt: "project" }),
                React.createElement("img", { src: "./images/main/project.png", alt: "project" }),
                React.createElement("img", { src: "./images/main/project.png", alt: "project" }),
                React.createElement("img", { src: "./images/main/project.png", alt: "project" }),
                React.createElement("img", { src: "./images/main/project.png", alt: "project" }),
                React.createElement("img", { src: "./images/main/project.png", alt: "project" }))),
        React.createElement("div", { className: "visualComm-services" },
            React.createElement("div", { className: "visualComm-services-left" },
                React.createElement("div", { className: "visual_comm" },
                    React.createElement("p", { className: "visual_comm-title" }, "Visual communications for\u00A0business and entertainment events"),
                    React.createElement("p", { className: "visual_comm-subtitle" }, "We are a web studio. We have been creating brands and web projects since 2018 in Switzerland, Russia and the UAE. We help representatives of public events to develop visual communications of the event, we develop web pages and corporate websites."),
                    React.createElement("div", { className: "visual_comm-links" },
                        React.createElement("p", null, "Our goal"),
                        React.createElement("p", null, "Who we work with"),
                        React.createElement("p", null, "OFeatures"))),
                React.createElement(DiscussYourProject, null)),
            React.createElement("div", { className: "services" },
                React.createElement("div", { className: "services_background" },
                    React.createElement("div", { className: "services-wrapper" },
                        React.createElement("p", { className: "services_title" }, "Services"),
                        React.createElement("div", { className: "services_items" },
                            React.createElement("div", { className: "services_items-item" },
                                React.createElement("p", null, "Web-site development")),
                            React.createElement("div", { className: "services_items-item" },
                                React.createElement("p", null, "WBranding")),
                            React.createElement("div", { className: "services_items-item" },
                                React.createElement("p", null, "Interactive web-movie")),
                            React.createElement("div", { className: "services_items-item" },
                                React.createElement("p", null, "Site created using neural networks")))))))));
};
export default Main;

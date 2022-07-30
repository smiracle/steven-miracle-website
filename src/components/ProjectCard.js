import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "animate.css";
import bitbucketIcon from "../assets/img/svg-bitbucket.svg";
import youtubeIcon from "../assets/img/svg-youtube.svg";
import externalIcon from "../assets/img/svg-external.svg";

export const ProjectCard = ({ title, year, description, imgUrl, tools }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={
        isHovered
          ? "proj-card-inner animate__animated animate__pushup"
          : "proj-card-inner animate__animated animate__pushdown"
      }
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      <div
        className={"proj-card"}
        style={{ backgroundImage: "url(" + imgUrl + ")" }}
      >
        <div className="proj-top">
          <div className="proj-links">
            <img
              src={bitbucketIcon}
              style={{ width: "20px", height: "20px" }}
            />
            <img src={youtubeIcon} style={{ width: "20px", height: "20px" }} />
            <img src={externalIcon} style={{ width: "20px", height: "20px" }} />
          </div>
        </div>
        <h5>{title}</h5>
        <h5>({year})</h5>
        <span>{description}</span>
        <ul className="project-tech-list">
          {tools.map((tool) => {
            return <li>{tool}</li>;
          })}
        </ul>
      </div>
    </li>
  );
};

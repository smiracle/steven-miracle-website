import { useState } from "react";
import "animate.css";
import ProjectLink from "./ProjectLink.js";
import gitIcon from "../assets/img/svg-git.svg";
import youtubeIcon from "../assets/img/svg-youtube.svg";
import externalIcon from "../assets/img/svg-external.svg";
import itchIcon from "../assets/img/svg-itch.svg";

const ProjectCard = ({ title, year, description, imgUrl, tools, externalUrl, repoUrl, itchUrl, youtubeUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  function getClassName() {
    let className = "proj-card-inner animate__animated";
    className += isHovered ? " animate__pushup" : " animate__pushdown";
    return className;
  }
  const handleCardClick = (e) => {
    const url = externalUrl || itchUrl || youtubeUrl || repoUrl;
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <li
      className={getClassName()}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* <a href={externalUrl == null ? itchUrl : externalUrl} className="proj-card-outer-link"> */}
      <div className={"proj-card"} style={{ backgroundImage: "url(" + imgUrl + ")" }}>
        <div className="proj-top">
          <div className="proj-links">
            {externalUrl && <ProjectLink src={externalIcon} url={externalUrl} alt="external link" />}
            {itchUrl && <ProjectLink src={itchIcon} url={itchUrl} alt="itch.io link" />}
            {repoUrl && <ProjectLink src={gitIcon} url={repoUrl} alt="code repository link" data-id="git-link" />}
            {youtubeUrl && <ProjectLink src={youtubeIcon} url={youtubeUrl} alt="youtube link" />}
          </div>
        </div>
        <h5 className={isHovered ? "proj-card-orange" : "proj-card-white"}>{title}</h5>
        <div className="proj-year-and-desc">
          <h6>({year})</h6>

          <h6>{description}</h6>
        </div>
        <ul className="project-tech-list">
          {tools.map((tool, index) => {
            return <li key={index}>{tool}</li>;
          })}
        </ul>
      </div>
      {/* </a> */}
    </li>
  );
};

export default ProjectCard;

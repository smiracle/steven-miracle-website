import { useState } from "react";
import "animate.css";

const ProjectLink = ({ src, url, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={url} className="proj-link">
      <img
        alt={alt}
        src={src}
        className={isHovered ? "proj-svg-orange" : "proj-svg-white"}
        onMouseEnter={(e) => setIsHovered(true)}
        onMouseLeave={(e) => setIsHovered(false)}
      />
    </a>
  );
};

export default ProjectLink;

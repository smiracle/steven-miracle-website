import { useState } from "react";
const ProjectLink = ({ src, url, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    // Stop the click event from bubbling up to the parent
    e.stopPropagation();
    // Open the project link's url
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleClick} className="proj-link" style={{ cursor: "pointer" }}>
      <img
        alt={alt}
        src={src}
        className={isHovered ? "proj-svg-orange" : "proj-svg-white"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default ProjectLink;

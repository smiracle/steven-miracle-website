import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import pdf from "../StevenMiracleResume.pdf";
import logo from "../assets/img/SLogo.png";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/bitbucket-icon.svg";
import navIcon3 from "../assets/img/itchio-textless-black.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navIcons = [navIcon1, navIcon2, navIcon3];
  const socialUrls = [
    "https://www.linkedin.com/in/steven-miracle/",
    "https://bitbucket.org/smiracle/",
    "https://stemir.itch.io/",
  ];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <div style={{ display: "flex", maxWidth: "1000px" }}>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-margin">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about-me"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {navIcons.map((icon, index) => {
                  return (
                    <a key={index} href={socialUrls[index]}>
                      <img src={icon} alt="" />
                    </a>
                  );
                })}
              </div>{" "}
            </span>
            <HashLink to={pdf} target="_blank" className="navbar-text">
              <button className="vvd navbar-resume-button">
                <span>Resume</span>
              </button>
            </HashLink>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Router>
  );
}

export default NavBar;

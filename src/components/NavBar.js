import { useState, useEffect, useRef } from "react";
import pdf from "../StevenMiracleResume.pdf";
import logo from "../assets/img/s-logo.png";
import linkedInIcon from "../assets/img/svg-linkedin.svg";
import bitbucketIcon from "../assets/img/svg-bitbucket-white.svg";
import itchIcon from "../assets/img/svg-itch-white.svg";
import hamburgerIcon from "../assets/img/svg-hamburger.svg";
import closeIcon from "../assets/img/svg-close.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import UseOnClickOutside from "./UseOnClickOutside";
import UseScrollDirection from "./UseScrollDirection";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const scrollDirection = UseScrollDirection("down");
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const navIcons = [linkedInIcon, bitbucketIcon, itchIcon];
  const socialUrls = [
    "https://www.linkedin.com/in/steven-miracle/",
    "https://bitbucket.org/smiracle/",
    "https://stemir.itch.io/",
  ];
  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleScroll = () => {
    setIsScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const wrapperRef = useRef();
  UseOnClickOutside(wrapperRef, () => setIsSidebarOpen(false));

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsSidebarOpen(false);
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 849) {
      setIsSidebarOpen(false);
    }
  };

  const navLinks = [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#experience",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ];

  const getHeaderClassName = () => {
    let classname = "nav-header";
    if (!isScrolledToTop) {
      classname += " scrolled";
    }
    if (scrollDirection === "down") {
      classname += " scrolled-down";
    } else {
      classname += " scrolled-up";
    }
    return classname;
  };

  return (
    <Router>
      <div>
        <header className={getHeaderClassName()}>
          <nav className="navbar-constraint">
            <a href="#home">
              <div className="navbar-logo">
                <img src={logo} alt="Logo" />
              </div>
            </a>
            <div className="navbar-links">
              <ol>
                {navLinks.map((navLink) => {
                  return (
                    <li>
                      <a
                        href={navLink.url}
                        className={
                          activeLink === navLink.name
                            ? "active navbar-link"
                            : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink(navLink.name)}
                      >
                        {navLink.name}
                      </a>
                    </li>
                  );
                })}
              </ol>
              <div className="social-icon">
                {navIcons.map((icon, index) => {
                  return (
                    <a key={index} href={socialUrls[index]}>
                      <img src={icon} alt="" />
                    </a>
                  );
                })}
              </div>{" "}
              <HashLink to={pdf} target="_blank" className="navbar-text">
                <button className="navbar-resume-button">
                  <span>Resume</span>
                </button>
              </HashLink>
            </div>

            <div ref={wrapperRef}>
              <button className="navbar-toggler" onClick={handleHamburgerClick}>
                <img
                  src={isSidebarOpen ? closeIcon : hamburgerIcon}
                  className="hamburger"
                  alt="hamburger"
                />
              </button>
              <aside
                className={isSidebarOpen ? "nav-sidebar" : "nav-sidebar-hide"}
              >
                <nav className="nav-sidebar-inner">
                  <ol>
                    {navLinks.map((navLink) => {
                      return (
                        <li>
                          <a
                            href={navLink.url}
                            className={
                              activeLink === navLink.name
                                ? "active navbar-link"
                                : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink(navLink.name)}
                          >
                            {navLink.name}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                  <HashLink to={pdf} target="_blank" className="navbar-text">
                    <button
                      className="navbar-resume-button"
                      style={{ padding: "16px 32px", marginRight: "24px" }}
                    >
                      <span
                        className="sidebar-resume-link"
                        style={{ fontSize: "20px" }}
                      >
                        Resume
                      </span>
                    </button>
                  </HashLink>
                </nav>
              </aside>
            </div>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default NavBar;

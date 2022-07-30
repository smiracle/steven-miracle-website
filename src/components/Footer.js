import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/SLogo.png";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/bitbucket-icon.svg";
import navIcon3 from "../assets/img/itchio-textless-black.svg";

function Footer() {
  const navIcons = [navIcon1, navIcon2, navIcon3];
  const socialUrls = [
    "https://www.linkedin.com/in/steven-miracle/",
    "https://bitbucket.org/smiracle/",
    "https://stemir.itch.io/",
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <div className="social-icon">
              {navIcons.map((icon, index) => {
                return (
                  <a key={index} href={socialUrls[index]}>
                    <img src={icon} alt="" />
                  </a>
                );
              })}
            </div>
          </Col>
          <Col size={12} sm={6} className="text-sm-end">
            Designed & Built by Steven Miracle
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

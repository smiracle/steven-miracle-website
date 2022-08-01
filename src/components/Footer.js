import { Container, Row, Col } from "react-bootstrap";
import linkedInIcon from "../assets/img/svg-linkedin.svg";
import bitbucketIcon from "../assets/img/svg-bitbucket-white.svg";
import itchIcon from "../assets/img/svg-itch-white.svg";

function Footer() {
  const navIcons = [linkedInIcon, bitbucketIcon, itchIcon];
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

import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h3 id="contact">Get In Touch</h3>
                  <p>
                    I’m currently looking for new opportunities and my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I’ll try my best to get back to you!
                  </p>
                </div>
              )}
            </TrackVisibility>
            <a href="mailto:mail@stevenmiracle.com">
              <button className="navbar-resume-button">
                <span>Say Hello</span>
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

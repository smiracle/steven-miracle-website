import "react-multi-carousel/lib/styles.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import me from "../assets/img/me.jpg";
import TrackVisibility from "react-on-screen";

const AboutMe = () => {
  return (
    <section className="about">
      <TrackVisibility once={true} partialVisibility>
        {({ isVisible }) => {
          return (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <Row>
                <div className="about-bx wow zoomIn">
                  <Row>
                    <h3 id="about">About Me</h3>
                  </Row>
                  <Row>
                    <Col md={8} xs={12}>
                      <p>
                        Hello! My name is Steven and I have a passion for creating web applications. My interest in
                        programming started back in 2002 when I tried tinkering with code in BioWare's Aurora engine. It
                        turns out moving objects around a map is a good way to learn about object-oriented programming.
                      </p>
                      <p>
                        My experiences range from developing a cloud gaming platform at Pixelberry to enhancing
                        Tesla.com. I've contributed to software for solar panel energy cost calculations nationwide,
                        developed a content management system for a major HR and finance corporation, and built an
                        insurance agency web portal. My work has also extended to an enterprise-scale healthcare
                        application at a startup, technical documentation at an Apple subsidiary, and leading training
                        courses at a network hardware company.
                      </p>
                      <p>
                        Currently my focus is on refining and broadening my expertise, particularly with technologies I
                        find most compelling. In my spare time I enjoy game development and participating in game jams
                        for fun and challenge.
                      </p>
                      <p>Here are a few technologies I've been working with recently:</p>
                      <ul className="about-list">
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Postgres</li>
                        <li>Express</li>
                        <li>Elastic Beanstalk</li>
                        <li>Docker</li>
                      </ul>
                    </Col>

                    <Col md={4} xs={12}>
                      <img src={me} alt="me" className="img-me" />
                    </Col>
                  </Row>
                </div>
              </Row>
            </div>
          );
        }}
      </TrackVisibility>
    </section>
  );
};

export default AboutMe;

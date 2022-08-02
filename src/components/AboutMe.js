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
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <Row>
                <div className="about-bx wow zoomIn">
                  <Row>
                    <h3 id="about">About Me</h3>
                  </Row>
                  <Row>
                    <Col md={8} xs={12}>
                      <p>
                        Hello! My name is Steven and I enjoy creating web
                        applications. My interest in programming started back in
                        2002 when I tried tinkering with code in BioWare's
                        Aurora engine — turns out moving objects around a map is
                        a good way to learn about object oriented programming!
                      </p>
                      <p>
                        Since then I’ve had the privilege of working on
                        Tesla.com, solar panel software that can calculate
                        energy costs anywhere in the country, a CRM at a massive
                        cloud computing corporation, an insurance agency web
                        portal, an enterprise scale healthcare application at a
                        start-up, documentation at an Apple subsidiary, I even
                        led a training course at a network hardware company. My
                        main focus now is expanding and strengthening my skill
                        set when it comes to tools that I love working with.
                      </p>
                      <p>
                        I also love building my own games and submitting them to
                        various game jams just for fun.
                      </p>
                      <p>
                        Here are a few technologies I’ve been working with
                        recently:
                      </p>
                      <ul className="about-list">
                        <li>.NET Core and C#</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>MongoDB</li>
                        <li>Express JS</li>
                        <li>Node JS</li>
                        <li>Azure</li>
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

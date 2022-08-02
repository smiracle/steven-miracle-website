import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import experienceData from "../data/experience.json";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Experience = () => {
  return (
    <section className="experience">
      <TrackVisibility once={true} partialVisibility>
        {({ isVisible }) => {
          return (
            <Row>
              <div
                className={
                  isVisible
                    ? "experience-bx animate__animated animate__zoomIn"
                    : "experience-bx"
                }
              >
                <Row>
                  <div className="col-12">
                    <h3 id="experience">Where I've Worked</h3>
                  </div>
                </Row>
                <Row>
                  <div className="col-12"></div>
                  <Tab.Container
                    className="experience-tabs"
                    defaultActiveKey="index0"
                  >
                    <Row>
                      <Col sm={3} className="experience-tabs-column">
                        <Nav variant="pills" className="flex-column">
                          {experienceData.map((data, index) => {
                            return (
                              <Nav.Item key={index}>
                                <Nav.Link eventKey={"index" + index} href="#">
                                  {data.company}
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          {experienceData.map((data, index) => {
                            return (
                              <Tab.Pane key={index} eventKey={"index" + index}>
                                <h5>
                                  {" "}
                                  <span>{data.jobtitle}</span>{" "}
                                  <span className="experience-company">
                                    @ {data.company}
                                  </span>
                                </h5>
                                <p className="experience-time">{data.time}</p>
                                <ul className="experience-list">
                                  {data.bullets.map((bullet, index) => {
                                    return <li key={index}>{bullet}</li>;
                                  })}
                                </ul>
                              </Tab.Pane>
                            );
                          })}
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Row>
              </div>
            </Row>
          );
        }}
      </TrackVisibility>
    </section>
  );
};

export default Experience;

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectData from "../data/projects.json";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import _ from "lodash";

const Projects = () => {
  const webAppRows = _.chunk(
    projectData.filter((project) => {
      if (project.type === "webapp") {
        return true;
      }
      return false;
    }),
    3
  );
  const gameRows = _.chunk(
    projectData.filter((project) => {
      if (project.type === "game") {
        return true;
      }
      return false;
    }),
    3
  );
  const moreRows = _.chunk(
    projectData.filter((project) => {
      if (project.type === "more") {
        return true;
      }
      return false;
    }),
    3
  );

  return (
    <section className="project" id="projects">
      <Row>
        <Col>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h3>Projects</h3>
                <p>
                  Here's some of the projects I put together in my spare time to
                  help demonstrate what I'm capable of and what my interests
                  are.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5"
                    id="pills-tab"
                    defaultActiveKey="first"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">And More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content
                    id="fadeIn"
                    className="proj-width-limiter"
                    // className={
                    //   isVisible ? "animate__animated animate__fader" : ""
                    // }
                  >
                    <Tab.Pane eventKey="first">
                      <ul className="proj-grid">
                        {webAppRows.map((row, index) => {
                          return row.map((project) => {
                            return (
                              <ProjectCard
                                key={index}
                                tools={[project.tools]}
                                {...project}
                              />
                            );
                          });
                        })}
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ul className="proj-grid">
                        {gameRows.map((row, index) => {
                          return row.map((project) => {
                            return (
                              <ProjectCard
                                key={index}
                                tools={[project.tools]}
                                {...project}
                              />
                            );
                          });
                        })}
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ul className="proj-grid">
                        {moreRows.map((row, index) => {
                          return row.map((project) => {
                            return (
                              <ProjectCard
                                key={index}
                                tools={[project.tools]}
                                {...project}
                              />
                            );
                          });
                        })}
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

export default Projects;

import { Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const webAppCards = projectData.filter((project) => {
    if (project.type === "webapp") {
      return true;
    }
    return false;
  });

  const gameCards = projectData.filter((project) => {
    if (project.type === "game") {
      return true;
    }
    return false;
  });

  const moreCards = projectData.filter((project) => {
    if (project.type === "more") {
      return true;
    }
    return false;
  });

  return (
    <section className="project">
      <TrackVisibility once={true} partialVisibility>
        {({ isVisible }) => {
          return (
            <div
              className={isVisible ? "animate__animated animate__zoomIn" : ""}
            >
              <Row>
                <Col>
                  <h3 id="projects">Projects</h3>
                  <p>
                    Here's some of the projects I put together in my spare time
                    to help demonstrate what I'm capable of and what my
                    interests are.
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
                    <Tab.Content id="fadeIn" className="proj-width-limiter">
                      <Tab.Pane eventKey="first">
                        <ul className="proj-grid">
                          {webAppCards.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                tools={[project.tools]}
                                {...project}
                              />
                            );
                          })}
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <ul className="proj-grid">
                          {gameCards.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                tools={[project.tools]}
                                {...project}
                              />
                            );
                          })}
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <ul className="proj-grid">
                          {moreCards.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                tools={[project.tools]}
                                {...project}
                              />
                            );
                          })}
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Col>
              </Row>
            </div>
          );
        }}
      </TrackVisibility>
    </section>
  );
};

export default Projects;

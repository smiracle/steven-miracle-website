import { Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Row className="align-items-center">
        <Col xs={12} md={12} xl={12}>
          <TrackVisibility once={true} partialVisibility>
            {({ isVisible }) => {
              return (
                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                  <span className="tagline">Hi, my name is</span>
                  <h1>{`Steven Miracle.`}</h1>
                  <h1 className="txt-rotate-header">I'm a Full Stack Developer.</h1>
                  <p className="tagline-white">
                    I specialize in developing scalable web services. I recently accepted an offer from{" "}
                    <a className="link" href="https://goodleap.com/">
                      GoodLeap
                    </a>{" "}
                    to help accelerate the transition to sustainable energy use.
                  </p>
                </div>
              );
            }}
          </TrackVisibility>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;

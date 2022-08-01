import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [jokeClickNum, setJokeClickNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Front-End", "Back-End", "Full Stack", "Web", "Game"];
  const period = 2000;
  const jokes = [
    "And I'm a button that you can click!",
    "Oh boy. You really shouldn't have done that.",
    "I'm going to have to report this.",
    "This is erroneous click behavior.",
    "This isn't good.",
    "Don't want this to get any worse, so you may not want to click me again.",
    "It might be a good idea to stop clicking me.",
    "You should probably stop...",
    "Please stop.",
    "No really, you should stop.",
    "Stop.",
    "You can stop at any time.",
    "Did I mention that you can stop clicking me?",
    "Hey, I've got an idea.",
    "You stop clicking me. And I won't tell anyone that I'm broken.",
    "We can all pretend that everything is fine.",
    "No problemo!",
    "Case closed!",
    "Crisis averted!",
    "All you have to do is stop clicking me.",
    "Aaaaand stop clicking me.",
    "Starting now.",
    "...Now.",
    "Now.",
    "Right now.",
    "Whew.",
    "That clearly didn't deter you, did it?",
    "Well how about this...",
    "",
    "",
    "",
    "Ugh. Silent treatment didn't work.",
    "That one always works too.",
    "But you're very persistent.",
    "I'm not sure why you're so persistent.",
    "I'm just a button after all.",
    "Just a simple button.",
    "Totally boring and uninteresting.",
    "Are you sure you want to keep going with this?",
    "There are other things one could do with their time.",
    "Like drinking a glass of water.",
    "Or painting a self-portrait.",
    "Or gazing longingly at the sky.",
    "Or badminton.",
    "Or composing an opera.",
    "Or pretending that you're a moose.",
    "A big one.",
    "A really big moose.",
    "Have you ever seen a moose before?",
    "Me neither.",
    "Except for that one time!",
    "It had lots of fur.",
    "And a big tail.",
    "And webbed feet.",
    "And a large bill for a mouth.",
    "At least, I think it was a moose.",
    "I'm not sure it was a moose though.",
    "Alright, it was definitely a platypus.",
    "So I lied.",
    "So there's that.",
    "I'm sorry.",
    "I'm not sure what came over me.",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
    }
  };

  return (
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col xs={12} md={12} xl={12}>
          <TrackVisibility once={true} partialVisibility>
            {({ isVisible }) => {
              return (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInDown" : ""
                  }
                >
                  <span className="tagline">Hi, my name is</span>
                  <h1>{`Steven Miracle.`}</h1>
                  <h2 className="txt-rotate-header">
                    {`I'm a`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate={toRotate}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                    {" Developer."}
                  </h2>
                  <p>
                    I specialize in developing enterprise scale software and
                    microservices. I'm currently looking for the next employment
                    opportunity.
                  </p>
                  <button
                    className="hero"
                    onClick={(e) =>
                      jokeClickNum === jokes.length
                        ? setJokeClickNum(0)
                        : setJokeClickNum(jokeClickNum + 1)
                    }
                  >
                    {jokes[jokeClickNum]} <ArrowRightCircle size={25} />
                  </button>
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

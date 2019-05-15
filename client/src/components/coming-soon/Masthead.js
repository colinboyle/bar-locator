import { animated, useSpring } from "react-spring";
import TextFieldGroup from "../common/TextFieldGroup";
import React from "react";

const Masthead = props => {
  const appearLeft = useSpring({
    left: "0px",
    opacity: 0.9,
    from: { opacity: 0, left: "-350px" },
    config: { friction: 90 }
  });
  return (
    <animated.div
      className="masthead col-sm-12 col-md-7 col-lg-5"
      style={appearLeft}
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">THERE'S SOMETHING BREWING</h1>
              <p className="mb-5">
                Subscribe below to put your name at the top of list for the twin
                cities newest bar card. Cheers!
              </p>
              <form
                className="input-group-newsletter mr-5"
                onSubmit={props.onSubmit}
                noValidate
              >
                <TextFieldGroup
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={props.email}
                  onChange={props.onChange}
                  error={props.error}
                  info="Don't worry. We hate spam too."
                  append="fas fa-arrow-right"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="masthead-bg" />
    </animated.div>
  );
};

export default Masthead;

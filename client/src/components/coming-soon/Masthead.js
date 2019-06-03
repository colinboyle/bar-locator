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
  var subscribe = props.subscribed ? (
    <p>Thanks for subscribing! See you soon.</p>
  ) : (
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
  );
  return (
    <animated.div
      className="masthead col-sm-12 col-md-8 col-lg-7"
      style={appearLeft}
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="my-auto">
            <div className="masthead-content text-white">
              <h1 className="">SOMETHING'S BREWING</h1>
              <p className="">
                We're bringing exciting specials to your favorite bars.
                Subscribe below to hear more from the twin citites' bar card.
                Cheers!
              </p>
              {subscribe}
            </div>
          </div>
        </div>
      </div>
      <div className="masthead-bg" />
    </animated.div>
  );
};

export default Masthead;

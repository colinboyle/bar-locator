import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import { useSpring, animated } from "react-spring";

import { newsletterUser } from "../../actions/authActions";

//import TextFieldGroup from "../common/TextFieldGroup";
import Masthead from "./Masthead";
//import HowToCard from "./HowToCard";
//import { ReactComponent as Wallet } from "../../images/003-wallet.svg";
//import { ReactComponent as Card } from "../../images/001-gift.svg";
//import { ReactComponent as Beer } from "../../images/beer.svg";
//import { ReactComponent as Save } from "../../images/005-save.svg";
//import { ReactComponent as Puncher } from "../../images/003-puncher-1.svg";
//import CSFooter from "./CSFooter";

class ComingSoon extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.email) {
      this.setState({ errors: nextProps.errors.email });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.newsletterUser({ email: this.state.email });
  }

  render() {
    return (
      <div className="comingSoon d-flex flex-column container-fluid">
        <img id="logo" alt="The Bar Card" src="/assets/barLogo.png" />
        <div className="row mastheadrow">
          <Masthead
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            subscribed={this.props.auth.subscribed}
            email={this.state.email}
            error={this.state.errors}
          />
          {/*<animated.div
            style={{ translate: this.props.transform }}
            className="masthead  col-sm-12 col-md-5"
          >
            <div className="container h-100">
              <div className="row h-100">
                <div className="my-auto">
                  <div className="masthead-content text-white py-5 py-md-0">
                    <h1 className="mb-3">Coming Soon!</h1>
                    <p className="mb-5">
                      We're brewing up something you won't want to miss. Get
                      your card
                      <strong> May 2019</strong>! Sign up for an update when we
                      launch below!
                    </p>
                    <form
                      className="input-group-newsletter"
                      onSubmit={this.onSubmit}
                      noValidate
                    >
                      <TextFieldGroup
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.errors.email}
                        info="We hate spam too."
                        append="fas fa-arrow-right"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="masthead-bg" />
          </animated.div>*/}
          {/*<div className="col-md-5 col-sm-12 h-100 d-flex align-items-center justify-content-end secbg">
            <div className="row">
              <HowToCard
                header="Sign up for a card"
                info="Place your order here and we'll ship it to you. Get them while supplies last."
                image={<Card height="70px" width="100px" />}
              />
              <HowToCard
                header="Enjoy your favorite drinks."
                info="Visit the 40 bars to recieve your exclusive specials."
                image={<Beer height="70px" width="100px" />}
              />
              <HowToCard
                header="Have your card punched."
                info="Well hopefully not but your card will be."
                image={<Puncher height="60px" width="100px" />}
              />
    </div>
          </div>*/}
          <div className="social-icons col-md-2 col-sm-12 col-lg-7 d-flex justify-content-center align-items-center secbg">
            <ul className="list-unstyled text-center mb-0">
              <li className="list-unstyled-item">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-unstyled-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-unstyled-item">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ComingSoon.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newsletterUser }
)(ComingSoon);

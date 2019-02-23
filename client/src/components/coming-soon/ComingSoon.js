import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { newsletterUser } from "../../actions/authActions";

import TextFieldGroup from "../common/TextFieldGroup";
import CSFooter from "./CSFooter";

class ComingSoon extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("attempting submit");

    this.props.newsletterUser({ email: this.state.email });
  }

  render() {
    return (
      <div className="h-100">
        <div class="overlay" />
        <div className="row h-100">
          <div class="masthead col-5">
            <div class="container h-100">
              <div class="row h-100">
                <div class="my-auto">
                  <div class="masthead-content text-white py-5 py-md-0">
                    <h1 class="mb-3">Coming Soon!</h1>
                    <p class="mb-5">
                      We're brewing up something you won't want to miss. Get
                      your card
                      <strong> May 2019</strong>! Sign up for updates using the
                      form below!
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
                      />
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="submit">
                          Notify Me!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="masthead-bg" />
          </div>
          <div className="col-7 h-100 d-flex">
            <div className="bcard mx-auto my-auto">$100</div>
            <div className="bcardpsuedo" />
          </div>
        </div>

        <div class="social-icons">
          <ul class="list-unstyled text-center mb-0">
            <li class="list-unstyled-item">
              <a href="#">
                <i class="fab fa-twitter" />
              </a>
            </li>
            <li class="list-unstyled-item">
              <a href="#">
                <i class="fab fa-facebook-f" />
              </a>
            </li>
            <li class="list-unstyled-item">
              <a href="#">
                <i class="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ComingSoon.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { newsletterUser }
)(ComingSoon);

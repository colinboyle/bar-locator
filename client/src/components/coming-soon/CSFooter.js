import React, { Component } from "react";
import { Link } from "react-router-dom";

class CSFooter extends Component {
  render() {
    return (
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="fab fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="fab fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className=" far fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; 2019.</li>
          <li>See you spring 2019!</li>
        </ul>
      </footer>
    );
  }
}

export default CSFooter;

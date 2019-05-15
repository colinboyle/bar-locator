import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-secondary pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">
                The Card You're Missing
              </h5>
              <p>
                The bar card brings you the best deal at the twin cities
                favorite bars year round. Sign up. Snag a beer. Punch your card.
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                deserunt fuga perferendis modi earum commodi aperiam temporibus
                quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
                aspernatur id excepturi hic.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark text-center py-3">
          © 2018 Copyright:
          <Link to="">Twin City Bar Card</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;

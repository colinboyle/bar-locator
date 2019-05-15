import React from "react";
import PropTypes from "prop-types";

const HowToCard = ({ header, info, image }) => {
  return (
    <div className="col-md-12 mb-3">
      <div className="card how-to">
        <div className="row p-1">
          <div className="col-3 my-auto">{image}</div>
          <div className="col-9 my-aut0">
            <p className="text-center">
              <h3>{header}</h3>
            </p>
            <p className="text-center">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

HowToCard.propTypes = {
  header: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
};

export default HowToCard;

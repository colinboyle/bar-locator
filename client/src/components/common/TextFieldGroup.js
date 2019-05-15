import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  prepend,
  append
}) => {
  return (
    <div className="form-group">
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend">
            <label className="input-group-text">
              <i className={classnames(prepend)} />
            </label>
          </div>
        )}
        <input
          type={type}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {append && (
          <div className="input-group-append">
            <button className="input-group-text" type="submit">
              <i className={classnames(append)} />
            </button>
          </div>
        )}
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (
        <div style={{ display: "block" }} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  diabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;

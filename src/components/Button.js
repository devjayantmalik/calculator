import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, onClick, isOperator }) => {
  const btnClasses = isOperator ? "is-danger" : "is-info";
  return (
    <button
      className={`button ${btnClasses} is-fullwidth is-outlined is-large`}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isOperator: PropTypes.bool,
};

Button.defaultProps = {
  isOperator: false,
};

export default Button;

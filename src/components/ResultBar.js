import React from "react";
import PropTypes from "prop-types";

const ResultBar = ({ value }) => {
  return (
    <div className="control">
      <input
        disabled
        className="input is-info is-large has-text-right"
        value={value}
      />
    </div>
  );
};

ResultBar.propTypes = {
  value: PropTypes.string.isRequired,
};
export default ResultBar;

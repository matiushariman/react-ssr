import React from "react";
import PropTypes from "prop-types";

const User = props => {
  const { username, age } = props;

  return (
    <div>
      <p>Hi, my name is {username}</p>
      <p>And I'm {age}</p>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

// if the props are not passed
User.defaultProps = {
  username: "Matius",
  age: "25"
};

export default User;

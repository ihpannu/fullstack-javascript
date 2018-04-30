import React from 'react';
export const Header = ({ message }) => {
  return (
    <div className="text-center">
      <h2>{message}</h2>
    </div>
  );
};

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

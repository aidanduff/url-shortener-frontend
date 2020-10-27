import React from "react";

const BottomNav = () => {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <p className="font-weight-regular text-white">
        <a
          href="https://github.com/aidanduff/weather-data-ui"
          className="text-right"
        >
          <i className="fa fa-github fa-github-navbar fa-2x"> </i>
        </a>
        &nbsp; &copy;Aidan Duff 2020
      </p>
    </nav>
  );
};

export default BottomNav;

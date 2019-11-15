import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary" style={{ display: "flex" }}>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <Search />
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;

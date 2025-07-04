import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Header (props) {
  return (
    <div className="custom-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-3 custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-white" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white hover-underline" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover-underline"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {props.searchbar
              ? <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              : ''}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: 'Yours Title',
};

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired,
};

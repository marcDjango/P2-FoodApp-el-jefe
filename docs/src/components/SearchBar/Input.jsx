import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchStyle from "./SearchStyle";
import Close from "../../assets/images/CloseIcon.svg";
import Search from "../../assets/images/SearchIcon.svg";
import CloseMobile from "../../assets/images/CloseIcon1.svg";
import SearchMobile from "../../assets/images/SearchIcon(2).svg";

import "./Input.scss";

export default function Input({ placeholder, value, onChange, locationHome }) {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isFixed = SearchStyle(locationHome);
  const isSearchDisabled = !value;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleOnChange(e) {
    if (onChange) {
      onChange(e);
    }
  }

  function handleOnClick() {
    if (onChange) {
      onChange({ target: { value: "" } });
    }
    if (isSearchDisabled) {
      setIsActive(!isActive);
    }
  }

  function handleSearchButtonClick() {
    if (isActive) {
      setIsActive(!isActive);
    }
  }
  let navbarStyle = {};
  const styleInput = {
    top: "8px",
    padding: "0",
    width: "60px",
    transition: "width 0.3s ease-in-out",
  };

  if (isFixed && windowWidth >= 600) {
    navbarStyle = {
      position: "fixed",
      top: "3rem",
      backgroundColor: "#242323",
      marginTop: "15px",
    };
  } else if (!isFixed && windowWidth >= 600) {
    navbarStyle = {
      position: "absolute",
      top: "50%",
      backgroundColor: "transparent",
    };
  }
  const searchImage = windowWidth <= 600 ? SearchMobile : Search;
  const closeImage = windowWidth <= 600 ? CloseMobile : Close;

  return (
    <div className="navbar-search" style={navbarStyle}>
      <div className="navbar-search-container">
        <div className={`btn-search-position ${isActive ? "disable" : ""}`}>
          <button
            type="button"
            className="calltoaction"
            onClick={handleSearchButtonClick}
          >
            <Link
              className="btn"
              to={isSearchDisabled ? "/" : `/Search/${value}`}
            >
              <img src={searchImage} alt="button search" />
            </Link>
          </button>
        </div>
        <input
          type="text"
          style={isActive ? styleInput : { display: "block" }}
          value={value}
          placeholder={isActive ? "" : placeholder}
          onChange={handleOnChange}
        />
        <div className={`btn-close-position ${isActive ? "disabled" : ""}`}>
          <button
            type="button"
            className="calltoaction"
            onClick={handleOnClick}
          >
            <img src={closeImage} alt="button close" />
          </button>
        </div>
      </div>
    </div>
  );
}
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  locationHome: PropTypes.bool,
};

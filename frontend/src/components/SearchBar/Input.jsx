import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchStyle from "./SearchStyle";
import Close from "../../assets/images/CloseIcon.svg";
import Search from "../../assets/images/SearchIcon.svg";
import "./Input.scss";

export default function Input({ placeholder, value, onChange, locationHome }) {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const isFixed = SearchStyle(locationHome);
  const isSearchDisabled = !value;
  useEffect(() => {
    // Update window width on resize
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
    top: "5px",
    padding: "0",
    width: "60px",
    transition: "width 1s ease-in-out",
  };

  if (isFixed && windowWidth >= 600) {
    navbarStyle = {
      position: "fixed",
      top: "1.2rem",
      backgroundColor: "#242323",
      marginTop: "18px",
    };
  } else if (!isFixed && windowWidth >= 600) {
    navbarStyle = {
      position: "absolute",
      top: "50%",
      backgroundColor: "transparent",
    };
  } else if (isFixed && windowWidth <= 600) {
    navbarStyle = {
      position: "fixed",
      top: "2.6rem",
      backgroundColor: "#fff9f3",
    };
  } else if (!isFixed && windowWidth <= 600) {
    if (locationHome) {
      navbarStyle = {
        position: "absolute",
        top: "50%",
        backgroundColor: "transparent",
        marginTop: "0",
      };
    }
  }

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
              <img src={Search} alt="button search" />
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
            <img src={Close} alt="button close" />
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
  locationHome: PropTypes.bool.isRequired,
};

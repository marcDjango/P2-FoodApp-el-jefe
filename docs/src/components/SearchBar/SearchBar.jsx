import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function SearchBar(locationHome) {
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Input
      value={inputValue}
      onChange={handleOnchange}
      placeholder="Search...."
      locationHome={locationHome}
    />
  );
}
Input.propTypes = {
  locationHome: PropTypes.bool,
};
export default SearchBar;

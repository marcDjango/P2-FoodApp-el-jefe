// SearchStyle.js
import { useState } from "react";
import { useScrollEffect, useWindowWidth } from "../utils";

function SearchStyle({ locationHome }) {
  const windowWidth = useWindowWidth();
  const [isFixed, setIsFixed] = useState(false);

  useScrollEffect(() => {
    const scrollYWindow = window.scrollY;

    if (
      (scrollYWindow >= 190 && windowWidth > 600) ||
      (scrollYWindow >= 20 && windowWidth < 600 && locationHome) ||
      (scrollYWindow >= 180 && windowWidth < 600 && !locationHome)
    ) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return isFixed;
}

export default SearchStyle;

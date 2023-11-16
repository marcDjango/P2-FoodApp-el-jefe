import { useEffect, useState } from "react";

function SearchStyle({ locationHome }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYWindow = window.scrollY;
      const windowWidth = window.innerWidth;
      if (scrollYWindow >= 208 && windowWidth > 600) {
        setIsFixed(true);
      } else if (scrollYWindow >= 20 && windowWidth < 600 && locationHome) {
        setIsFixed(true);
      } else if (scrollYWindow >= 208 && windowWidth < 600 && !locationHome) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [locationHome]);
  return isFixed;
}

export default SearchStyle;

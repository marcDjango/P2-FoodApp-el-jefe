import { useEffect, useState } from "react";

function FilterStyle() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Change this threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    }, options);

    const footer = document.querySelector("#footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const navigationStyle = {
    // Modifier le style de la barre de navigation en fonction de l'état
    display: isFooterVisible ? "none" : "block",
    transition: "display 1s ease",
  };

  return navigationStyle;
}

export default FilterStyle;

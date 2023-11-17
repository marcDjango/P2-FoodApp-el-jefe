import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const toUpperCaseFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export default function RefactorTitle(inputString) {
  const result = inputString.replace("Recipe", "").replace("recipes", "");

  if (result.includes(":")) {
    const indexOfFirst = result.indexOf(":") + 2;
    return result.slice(indexOfFirst);
  }

  return result;
}

export function useScrollEffect(callback) {
  useEffect(() => {
    const handleScroll = () => {
      if (callback) {
        callback();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
}

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

export function useLocationEffect(initialPath, initialIsHome) {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [isHome, setIsHome] = useState(initialIsHome);
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return { currentPath, isHome };
}

import { useState } from "react";
import AllCards from "../components/AllCards/AllCards";
import FilterCategory from "../components/FilterCategory/FilterCategory";
import FilterIcon from "../components/FilterIcon/FilterIcon";
import Carousel from "../components/Carousel/Carousel";
import FilterImage from "../assets/filter-icon.svg";
import "./Home.scss";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-container">
      <Carousel />
      <FilterCategory />
      {isOpen ? (
        <FilterIcon setIsOpen={setIsOpen} isOpen={isOpen} />
      ) : (
        <button
          className="open-btn"
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={FilterImage} alt="filiter-icon" />
        </button>
      )}
      <AllCards />
    </div>
  );
}

export default Home;

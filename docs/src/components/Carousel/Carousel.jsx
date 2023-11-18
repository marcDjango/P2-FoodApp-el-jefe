import React from "react";
// import CarouselSelect from "./CarouselSelect";
import "./Carousel.scss";

function Carousel() {
  return (
    <>
      <h1 className="TitleCarousel">COMPOSE YOUR MENU</h1>
      <div className="CarouselGlobal">
        <div className="CarouselDesktop">
          {/* <CarouselSelect mealType="breakfast" /> */}
        </div>
        <div className="CarouselMobile">
          {/* <CarouselSelect mealType="lunch" /> */}
        </div>
        <div className="CarouselDesktop">
          {/* <CarouselSelect mealType="teatime" /> */}
        </div>
      </div>
    </>
  );
}

export default Carousel;

import React from "react";
import CarouselSelect from "./CarouselSelect";
import "./Carousel.scss";

function Carousel() {
  return (
    <>
      <div className="CarouselDesktop">
        {/* <CarouselSelect mealType="breakfast" />
        <CarouselSelect mealType="dinner" />
        <CarouselSelect mealType="teatime" /> */}
      </div>
      <div className="CarouselMobile">
        <CarouselSelect mealType="lunch" />
      </div>
    </>
  );
}

export default Carousel;

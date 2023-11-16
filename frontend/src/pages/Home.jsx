import AllCards from "../components/AllCards/AllCards";
import FilterCategory from "../components/FilterCategory/FilterCategory";
import FilterIcon from "../components/FilterIcon/FilterIcon";
import Carousel from "../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Carousel />
      <FilterCategory />
      <FilterIcon />
      <AllCards />
    </div>
  );
}

export default Home;

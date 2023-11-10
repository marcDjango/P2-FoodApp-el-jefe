import AllCards from "../components/AllCards/AllCards";
import FilterCategory from "../components/FilterCategory/FilterCategory";
import Carousel from "../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Carousel />

      <FilterCategory />
      <AllCards />
    </div>
  );
}

export default Home;

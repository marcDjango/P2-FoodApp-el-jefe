import AllCards from "../components/AllCards/AllCards";
import FilterCategory from "../components/FilterCategory/FilterCategory";

function Home() {
  return (
    <div>
      <FilterCategory />
      <AllCards />
    </div>
  );
}

export default Home;

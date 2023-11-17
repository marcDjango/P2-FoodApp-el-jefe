import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/SelectCategory/SelectCategory.css";
import SearchUI from "../components/Search/SearchUI";

function Search() {
  const { query } = useParams();
  const [categoryParams, setCategoryParams] = useState(query);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setCategoryParams(query);
  }, [query]);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [categoryParams]);

  return (
    <div key={query + key}>
      <SearchUI query={query} />;
    </div>
  );
}

export default Search;

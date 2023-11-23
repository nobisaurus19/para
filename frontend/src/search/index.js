import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import "./index.css";
import { ResultComponent } from "./component";

function Search() {
  const [query, setQuery] = useState("");
  const [criteria, setCriteria] = useState("all");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);

    let url = "http://localhost:4000/cowork/search?";
    switch (criteria) {
      case "all":
        url += `placeName=${query}&rating=${query}&locate=${query}`;
        break;
      case "name":
        url += `placeName=${query}`;
        break;
      case "location":
        url += `locate=${query}`;
        break;
      case "rating":
        url += `rating=${query}`;
        break;
      default:
        break;
    }

    fetch(
     url,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.list);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <DefaultLayout>
      <img
        src={`${process.env.PUBLIC_URL}/wave2.png`}
        alt="wave2"
        className="wave2"
      />
      <div className="search">
        <div className="searchbar">
          <select
            value={criteria}
            onChange={(e) => {
              setCriteria(e.target.value)
            }}
          >
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="rating">Rating</option>
          </select>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            {" "}
            Search{" "}
          </button>
        </div>
        <div className="resulttable">
          {isLoading ? (
            <p> now loading.. </p>
          ) : (
            searchResults.map((result) => (
              <ResultComponent
                name={result.placeName}
                location={result.locate}
                rating={result.rating}
                placeId={result.placeId}
              />
            ))
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Search;

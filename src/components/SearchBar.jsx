import { useState } from "react";
import searchIcon from "../assets/icons/search.svg";

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          className="search-input"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button type="submit">
          <img src={searchIcon} alt="search product" className="search-icon" />
        </button>
      </form>
    </div>
  );
}

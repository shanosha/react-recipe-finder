import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>Search</button>
    </form>
  );
}

export default SearchForm;

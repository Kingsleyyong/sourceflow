"use client";

import React, { useState } from "react";

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "E.g. networking",
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(query.trim());
  };

  return (
    <div className="flex w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="text-foreground bg-background placeholder:text-dark-grey grow rounded-l-full px-4 py-3 font-extrabold focus:outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-yellow cursor-pointer rounded-r-full px-6 py-3 text-lg font-semibold text-black hover:grayscale-20 active:opacity-80"
      >
        Search jobs
      </button>
    </div>
  );
};

export default SearchInput;

import React, { useState } from "react";

type SearchInputProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "E.g. networking",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim());
  };

  return (
    <div className="flex w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="border-light-grey flex-grow rounded-l-full border border-r-0 px-4 py-3 text-black focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow rounded-r-full px-6 py-3 font-semibold text-black"
      >
        Search jobs
      </button>
    </div>
  );
};

export default SearchInput;

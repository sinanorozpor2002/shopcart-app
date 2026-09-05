import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="cursor-pointer" title="Search">
      <Search className="w-5 h-5 text-gray-700 hover:text-shop_light_green hoverEffect" strokeWidth={2} />
    </div>
  );
};

export default SearchBar;

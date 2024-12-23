import {
  ArrowUpLeft,
  Flame,
  LoaderCircle,
  Search,
  TrendingUp,
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SearchResult from "./SearchResult";
import { productCardsData } from "@/utils/productCardsData";

const SearchBarComp = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLoading(true); // Start loading immediately

    // Clear previous timeout to avoid multiple loads
    if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);

    // Set a new timeout for debouncing
    debounceTimeoutRef.current = setTimeout(() => {
      setSearchValue(value); // Update searchValue state
      setStartSearch(value.trim().length > 0); // Set startSearch to true if there's text, false if not

      setLoading(false); // Stop loading after updating state
    }, 500); // Adjust delay as needed (500ms in this example)
  };

  // Filter products based on the search value
  const filteredProducts = productCardsData.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // useEffect to listen for clicks outside the search box
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the search box when path changes
  useEffect(() => {
    if (showSearchBox) setShowSearchBox(false);
  }, [path]);

  return (
    <>
      <div
        ref={searchBoxRef}
        className={`relative flex items-center border-b gap-2 px-2 pb-2 ${
          hasScrolled ? "border-black" : "border-white"
        }`}
      >
        <Search
          size={15}
          strokeWidth={2}
          className={hasScrolled ? "text-black" : "text-white"}
        />
        <input
          onClick={() => setShowSearchBox(true)}
          type="text"
          // value={searchValue}
          onChange={handleInputChange}
          className={`text-xs w-36 focus:outline-none bg-transparent ${
            hasScrolled ? "text-black" : "text-white"
          }`}
          placeholder="Search for products"
        />

        <div
          className={`absolute right-0 z-200 top-[160%] min-w-[750px] max-w-[750px] min-h-40 rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center bg-[#fff] transition-all duration-300 transform ${
            showSearchBox
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <LoaderCircle
                size={18}
                strokeWidth={1.5}
                className="text-templatePrimary animate-spin"
              />
              <h2 className="text-sm tracking-wider font-medium text-templatePrimary">
                Searching...
              </h2>
            </div>
          ) : (
            <SearchResult
              searchValue={searchValue}
              products={filteredProducts}
              startSearch={startSearch}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBarComp;

"use client";
import { ArrowLeft, LoaderCircle, Search } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import SearchResult from "./SearchResult";
import { allProducts } from "@/utils/allProducts";
import { productCardsData } from "@/utils/productCardsData";

const MobileSearch = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // To track the input value
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);

  // Effect to add/remove no-scroll class on the body when search is opened/closed
  useEffect(() => {
    if (showMobileSearch) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class when the component is unmounted or search is closed
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMobileSearch]);

  // Handle input change to toggle startSearch based on the input value
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

  return (
    <>
      <div className="cursor-pointer">
        <HiOutlineSearch
          onClick={() => setShowMobileSearch(true)}
          className={hasScrolled ? "text-black " : "text-white"}
          strokeWidth={2}
          size={24}
        />
      </div>
      {/* ---------- */}
      {showMobileSearch && (
        <div className={`fixed top-0 left-0 z-50 h-screen w-full bg-white`}>
          <div className="flex items-center gap-5 bg-white p-4 ">
            <ArrowLeft
              onClick={() => setShowMobileSearch(false)}
              size={24}
              className="text-templateText cursor-pointer"
              strokeWidth={2}
            />
            <div className="flex items-center gap-2 border border-gray-600 w-full p-2">
              <Search
                size={20}
                strokeWidth={1.5}
                className="text-templateText"
              />
              <input
                type="text"
                // value={searchValue} // Bind the input value to searchValue state
                onChange={handleInputChange} // Handle input changes
                className="text-xs w-full bg-white text-templateText focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-500"></div>
          {/* ------------- */}
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-10 lg:py-0 w-full">
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
          {/* ------------- */}
        </div>
      )}
    </>
  );
};

export default MobileSearch;

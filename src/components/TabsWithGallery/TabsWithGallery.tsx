"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import Wrapper from "../Wrapper/Wrapper";
import GalleryCarousalSaif from "./GalleryCarousalSaif";
import { X } from "lucide-react";

interface MasonryGalleryProps {
  images: { id: number; src: string; category: string }[];
  categories: string[];
}

const categories = ["All", "CRGO", "Stainless Steel", "HMS 1&2"];

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const openModal = useCallback((index: any) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Wrapper>
      <div className="py-8 px-4">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto sticky md:top-[78px] top-[72px] bg-white py-2  mb-8 justify-start   scrollbar-height-saif whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` md:py-2 py-2  text-nowrap  px-4 rounded-none text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-mainColor4 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid overflow-hidden rounded-none shadow bg-bgMain cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                width={800}
                height={800}
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-auto object-cover "
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="relative flex justify-center items-center w-full max-w-4xl p-4   bg-transpaernt">
            <GalleryCarousalSaif
              slides={filteredImages}
              initialIndex={selectedIndex}
              options={{ loop: true }}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default MasonryGallery;

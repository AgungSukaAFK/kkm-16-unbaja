import React from "react";

interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, caption }) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 group">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <p className="text-white font-semibold text-center">{caption}</p>
      </div>
    </div>
  );
};

export default GalleryItem;

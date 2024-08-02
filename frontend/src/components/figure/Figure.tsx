import React from "react";

interface FigureProps {
  imageUrl: string;
  title?: string;
  page?: string;
}

const Figure: React.FC<FigureProps> = ({ imageUrl, title, page }) => {
  return (
    <figure>
      <img src={imageUrl} alt={title ? title : `Page ${page}`} />
      <figcaption>{title ? title : `Page ${page}`}</figcaption>
    </figure>
  );
};

export default Figure;

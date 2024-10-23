"use client";
import React, { useEffect, useState } from "react";
interface Image {
  id: number;
  url: string;
  description: string;
}

const Welcome = () => {
  const [images, setImages] = useState<Image[]>([]);



  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.description} />
      ))}
    </div>
  );
};

export default Welcome;

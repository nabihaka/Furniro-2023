// src/components/Gallery.tsx
// import Image from "next/image";
import PortfolioImage1 from "@/assets/png/portfolio_image1.png";
import PortfolioImage2 from "@/assets/png/portfolio_image2.png";
import PortfolioImage3 from "@/assets/png/portfolio_image3.png";
import PortfolioImage4 from "@/assets/png/portfolio_image4.png";
import PortfolioImage5 from "@/assets/png/portfolio_image5.png";

const images = [
  PortfolioImage1,
  PortfolioImage1,
  PortfolioImage1,
  PortfolioImage1,
];

export const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-gray-800 text-lg">Share your setup with</h2>
        <h1 className="text-3xl font-bold text-gray-900">#FuniroFurniture</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src={src.src}
              alt={`Funiro furniture ${index + 1}`}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const images = [
  {
    src: "/image-slider/Foto1.jpeg",
    caption: "Tambang Emas",
    captionlink: "lihat Tambang Emas",
    link: "/Tambang/Emas",
  },
  {
    src: "/image-slider/Foto2.jpeg",
    caption: "Tambang Emas",
    captionlink: "lihat Tambang Emas",
    link: "/Tambang/Emas",
  },
  {
    src: "/image-slider/Foto3.jpeg",
    caption: "Tambang Nikel",
    captionlink: "lihat Tambang Nikel",
    link: "/Tambang/Nikel",
  },
  {
    src: "/image-slider/Foto4.jpeg",
    caption: "Tambang Nikel",
    captionlink: "lihat Tambang Nikel",
    link: "/Tambang/Nikel",
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={img.src}
            alt={img.caption}
            fill
            quality={100}
            unoptimized
            className="object-cover object-center w-full h-full"
            priority={i === 0}
          />

          {/* Overlay hitam transparan */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Text Tengah */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            {/* Logo */}
            <img
              src="/logo/logoick1.png"
              alt="Logo PT Indo Cipta Kontraktor"
              className="w-32 md:w-40 lg:w-56 xl:w-64 mb-4 drop-shadow-xl"
            />

            {/* Company Name */}
            <h2
              className="text-white font-bold tracking-widest drop-shadow-lg
                 text-lg md:text-2xl lg:text-3xl xl:text-4xl"
            >
              PT INDO CIPTA KONTRAKTOR
            </h2>

            {/* Tagline */}
            <p
              className="mt-2 text-white/80 tracking-wide
                text-xs md:text-sm lg:text-base"
            >
            <span className="text-green-600">  Mining</span> • Energy • <span className="text-blue-600">Resources</span>
            </p>
          </div>

          {/* Overlay hitam bawah */}
        </div>
      ))}
    </section>
  );
}

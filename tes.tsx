"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "/image-slider/emas.jpg",
    caption: "Tambang Emas",
    captionlink: "lihat Tambang Emas",
    link: "/Tambang/emas",
  },
  {
    src: "/image-slider/emas2.jpg",
    caption: "Tambang Emas",
    captionlink: "lihat Tambang Emas",
    link: "/Tambang/emas",
  },
  {
    src: "/image-slider/nikel2.jpg",
    caption: "Tambang Nikel",
    captionlink: "lihat Tambang Nikel",
    link: "/Tambang/nikel",
  },
  {
    src: "/image-slider/nikel.jpg",
    caption: "Tambang Nikel",
    captionlink: "lihat Tambang Nikel",
    link: "/Tambang/nikel",
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
          <div className="absolute inset-0 bg-black/40" />

          {/* Caption */}
          <div className="absolute bottom-24 left-0 right-0 px-6 z-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold text-left drop-shadow-lg animate-fadeInUp">
              {img.caption}
            </h1>

            <Link
              href={img.link}
              className="mt-4 inline-flex items-center gap-2 text-white text-sm md:text-base font-semibold group relative transition-all duration-300 hover:text-red-500"
            >
              {img.captionlink}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

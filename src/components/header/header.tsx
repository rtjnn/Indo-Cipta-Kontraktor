"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;

    const updateHeaderVisibility = () => {
      if (window.scrollY >= 10) {
        header.classList.remove("-translate-y-full");
        header.classList.add("translate-y-0");
      } else {
        header.classList.remove("translate-y-0");
        header.classList.add("-translate-y-full");
      }
    };

    window.addEventListener("scroll", updateHeaderVisibility);
    return () => window.removeEventListener("scroll", updateHeaderVisibility);
  }, []);

  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-50 w-full -translate-y-full bg-gray-800 text-white shadow transition-transform duration-300"
    >
      {/* NAV */}
      <nav className="flex items-center px-4 py-4 md:grid md:grid-cols-3">
        {/* KIRI */}
        <div className="hidden justify-end space-x-2 md:flex">
          {/* Tentang Kami */}
          <div
            className="hs-dropdown relative"
            data-hs-dropdown-trigger="hover"
            data-hs-dropdown-auto-close="inside"
          >
            <button className="hs-dropdown-toggle flex items-center rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
              Tentang Kami
              <ChevronDown className="ms-2 size-4 transition-transform hs-dropdown-open:-rotate-180" />
            </button>

            <div className="hs-dropdown-menu hidden z-10 mt-2 min-w-48 rounded-lg bg-gray-700 py-2 shadow-lg">
              <Link href="#Profil" className="block px-3 py-2 text-sm hover:bg-gray-600">
                Profil Perusahaan
              </Link>
              <Link href="#Visi-misi" className="block px-3 py-2 text-sm hover:bg-gray-600">
                Visi Misi
              </Link>
              <Link href="#Sejarah" className="block px-3 py-2 text-sm hover:bg-gray-600">
                Sejarah Perusahaan
              </Link>
            </div>
          </div>

          {/* Bisnis Kami */}
          <div
            className="hs-dropdown relative"
            data-hs-dropdown-trigger="hover"
            data-hs-dropdown-auto-close="inside"
          >
            <button className="hs-dropdown-toggle flex items-center rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
              Bisnis Kami
              <ChevronDown className="ms-2 size-4 transition-transform hs-dropdown-open:-rotate-180" />
            </button>

            <div className="hs-dropdown-menu hidden z-10 mt-2 min-w-48 rounded-lg bg-gray-700 py-2 shadow-lg">
              <Link href="#Produk" className="block px-3 py-2 text-sm hover:bg-gray-600">
                Tambang Nikel
              </Link>
            </div>
          </div>
        </div>

        {/* TENGAH – LOGO */}
        <div className="flex justify-center">
          <Link href="/">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full  md:h-14 md:w-14 shadow-lg shadow-gray-800 bg-white">
              <Image
                src="/logo/logoick.png"
                alt="Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* KANAN */}
        <div className="hidden justify-start space-x-4 md:flex">
          <Link href="#hubungi" className="text-sm font-medium hover:text-blue-400">
            Hubungi Kami
          </Link>
          <Link
            href="#login"
            className="cursor-not-allowed text-sm font-medium text-gray-400"
            aria-disabled
          >
            Login
          </Link>
        </div>

        {/* HAMBURGER */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-gray-700 bg-gray-800 md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="#tim" className="rounded px-3 py-2 hover:bg-gray-700">
              Tim Kami
            </Link>
            <Link href="#hubungi" className="rounded px-3 py-2 hover:bg-gray-700">
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

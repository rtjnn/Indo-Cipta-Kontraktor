"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Lowongan = {
  id: string;
  posisi: string;
  status: string;
};

export default function Career() {
  const [data, setData] = useState<Lowongan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyEEquMfML7yXsxh3iSVNHglOxUbnwK3f6Ra6Ph7avOSamrr0IuRsQRrcEN8PwOC7rTIw/exec"
    )
      .then((res) => res.json())
      .then((result) => {
        const aktif = result.filter(
          (item: Lowongan) => item.status === "aktif"
        );
        setData(aktif);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-center text-gray-500 animate-pulse">
          Memuat lowongan...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Lowongan Pekerjaan
          </h1>
          <p className="text-gray-500 mt-2">
            Temukan posisi yang sesuai dengan keahlianmu
          </p>
        </div>

        {/* Empty State */}
        {data.length === 0 && (
          <div className="text-center text-gray-500">
            Belum ada lowongan aktif saat ini
          </div>
        )}

        {/* List */}
        <div className="grid gap-6">
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/carrer/${item.id}`}
              className="group bg-white rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {item.posisi}
                </h2>

                <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                  Aktif
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Klik untuk melihat detail & melamar posisi ini
              </p>
            </Link>
          ))}
        </div>
         <a
  href="/"
  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition"
>
  ← Kembali
</a>
      </div>
     

    </section>
    
  );
}

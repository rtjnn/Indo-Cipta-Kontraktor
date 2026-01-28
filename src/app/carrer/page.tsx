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
        // 🔥 FILTER YANG AKTIF SAJA
        const aktif = result.filter(
          (item: Lowongan) => item.status === "aktif"
        );
        setData(aktif);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading lowongan...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Lowongan Pekerjaan
      </h1>

      {data.length === 0 && (
        <p className="text-center text-gray-500">
          Belum ada lowongan aktif
        </p>
      )}

      <div className="space-y-4">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/carrer/${item.id}`}
            className="block border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{item.posisi}</h2>
            <p className="text-sm text-green-600 mt-1">Status: Aktif</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

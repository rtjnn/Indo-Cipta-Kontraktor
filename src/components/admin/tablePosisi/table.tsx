"use client";

import { useEffect, useState } from "react";

type Lowongan = {
  id: string;
  posisi: string;
  status: string;
};

const API_URL =
  "https://script.google.com/macros/s/AKfycbx007QReXNzuWK3NwjbLfiLx27fDZH3P_ygBi7gMklzVey57MbxJmRzQOtkbjCNuYg53A/exec";

export default function AdminTable() {
  const [data, setData] = useState<Lowongan[]>([]);
  const [loading, setLoading] = useState(true);

  // =====================
  // READ
  // =====================
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Gagal ambil data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // =====================
  // UPDATE
  // =====================
  const handleUpdate = async (item: Lowongan) => {
    const posisi = prompt("Edit Posisi", item.posisi);
    if (!posisi) return;

    const status = confirm("Klik OK = Aktif\nKlik Cancel = Nonaktif")
      ? "aktif"
      : "nonaktif";

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors", // 🔥 WAJIB
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "update",
          id: item.id,
          posisi,
          status,
        }),
      });

      fetchData();
    } catch (err) {
      console.error("Gagal update", err);
    }
  };

  // =====================
  // DELETE
  // =====================
  const handleDelete = async (id: string) => {
    if (!confirm("Yakin hapus data ini?")) return;

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors", // 🔥 WAJIB
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "delete",
          id,
        }),
      });

      fetchData();
    } catch (err) {
      console.error("Gagal hapus", err);
    }
  };

  if (loading) {
    return <p className="text-center py-4">Loading...</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden rounded-lg border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Posisi
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                  <th>
                    <a href="/admin/posisi" className="text-blue-600 hover:underline">Input</a>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.id} className="odd:bg-white even:bg-gray-100">
                    <td className="px-6 py-4 text-sm">
                      {item.posisi}
                    </td>

                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          item.status === "aktif"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-end space-x-2">
                      <button
                        onClick={() => handleUpdate(item)}
                        className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}

                {data.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center py-4 text-gray-500">
                      Data kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

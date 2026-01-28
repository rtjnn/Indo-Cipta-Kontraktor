"use client";

import { useState } from "react";

export default function AdminPosisi() {
  const [id, setId] = useState("");
  const [posisi, setPosisi] = useState("");
  const [status, setStatus] = useState("aktif");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyEEquMfML7yXsxh3iSVNHglOxUbnwK3f6Ra6Ph7avOSamrr0IuRsQRrcEN8PwOC7rTIw/exec",
        {
          method: "POST",
          mode: "no-cors", // 🔥 WAJIB
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "create",
            id,
            posisi,
            status,
          }),
        }
      );

      // ❌ JANGAN baca response
      setMessage("✅ Posisi berhasil ditambahkan");
      setId("");
      setPosisi("");
      setStatus("aktif");

    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menyimpan data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Posisi Lowongan</h1>

      <form onSubmit={submitData} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">ID Posisi</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="POS-001"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Nama Posisi</label>
          <input
            type="text"
            value={posisi}
            onChange={(e) => setPosisi(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Admin HR"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="aktif">Aktif</option>
            <option value="nonaktif">Nonaktif</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Menyimpan..." : "Simpan Posisi"}
        </button>

        <a href="/admin" className="block text-center mt-2 text-sm text-blue-600 hover:underline">batal</a>

        {message && (
          <p className="text-center text-sm mt-2">{message}</p>
        )}
      </form>
    </div>
  );
}

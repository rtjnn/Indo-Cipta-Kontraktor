"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function LamarPage() {
  const searchParams = useSearchParams();
  const posisiFromUrl = searchParams.get("id"); // ambil ID dari URL

  // FORM STATE
  const [form, setForm] = useState({
    email: "",
    source: "",
    nama: "",
    nik: "",
    jenisKelamin: "",
    alamat: "",
    wa: "",
    masaKerja: "",
    jurusan: "",
    asalSekolah: "",
    tahunLulus: "",
    pendidikan: "",
    pengalaman: "",
    posisi: "", // kosong dulu, nanti isi dari URL
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbz-xm-YtO_f77GIuyf9GKQcj-qA7d1TQT8Z3vDGrBmKjDCZtygiH8MDtdjSKNnGUKA/exec";

  // 🔥 SET POSISI DARI URL SAAT COMPONENT MOUNT
  useEffect(() => {
    if (posisiFromUrl) {
      setForm((prev) => ({
        ...prev,
        posisi: posisiFromUrl,
      }));
    }
  }, [posisiFromUrl]);

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      // kirim form apa adanya, termasuk posisi
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setMessage("✅ Lamaran berhasil dikirim!");

      // reset semua field kecuali posisi
      setForm((prev) => ({
        ...prev,
        email: "",
        source: "",
        nama: "",
        nik: "",
        jenisKelamin: "",
        alamat: "",
        wa: "",
        masaKerja: "",
        jurusan: "",
        asalSekolah: "",
        tahunLulus: "",
        pendidikan: "",
        pengalaman: "",
        posisi: prev.posisi, // posisi tetap
      }));
    } catch (err) {
      console.error(err);
      setMessage("❌ Terjadi kesalahan, silakan coba lagi");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Form Lamaran</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* POSISI (AUTO DARI ID, READONLY) */}
        <input
          type="text"
          name="posisi"
          value={form.posisi}
          readOnly
          className="w-full border px-3 py-2 rounded bg-gray-100 text-gray-950"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <label>Darimana Anda mengetahui lowongan kerja ini?</label>
        <select
          name="source"
          value={form.source}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="">--Pilih Sumber--</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">LinkedIn</option>
          <option value="website_perusahaan">Website resmi perusahaan</option>
          <option value="job_portal">Job portal</option>
          <option value="teman_keluarga">Teman / Keluarga / Relasi</option>
          <option value="sekolah_kampus">Sekolah / Kampus / Alumni</option>
          <option value="koran">Koran / Media cetak</option>
          <option value="job_fair">Event Job Fair</option>
          <option value="lainnya">Lainnya</option>
        </select>

        <input
          type="text"
          name="nama"
          placeholder="Nama Lengkap"
          value={form.nama}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="nik"
          placeholder="NIK"
          value={form.nik}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <select
          name="jenisKelamin"
          value={form.jenisKelamin}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="">Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <input
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={form.alamat}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="wa"
          placeholder="Nomor WA"
          value={form.wa}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <select
          name="masaKerja"
          value={form.masaKerja}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Pilih Masa Kerja</option>
          <option value="0">Fresh Graduate</option>
          <option value="0-1 tahun">0-1 tahun</option>
          <option value="1-3 tahun">1-3 tahun</option>
          <option value="3-5 tahun">3-5 tahun</option>
          <option value="5+ tahun">5+ tahun</option>
        </select>

        <input
          type="text"
          name="jurusan"
          placeholder="Jurusan"
          value={form.jurusan}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="asalSekolah"
          placeholder="Asal Kampus/Sekolah"
          value={form.asalSekolah}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="tahunLulus"
          placeholder="Tahun Lulus"
          value={form.tahunLulus}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <select
          name="pendidikan"
          value={form.pendidikan}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Pendidikan Terakhir</option>
          <option value="SD">SD</option>
          <option value="SMP">SMP</option>
          <option value="SMA">SMA</option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="S1">S1</option>
          <option value="S2">S2</option>
          <option value="S3">S3</option>
        </select>

        <input
          type="text"
          name="pengalaman"
          placeholder="Pengalaman Kerja"
          value={form.pengalaman}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          disabled={submitting}
          className="bg-black text-white w-full py-2 rounded"
        >
          {submitting ? "Mengirim..." : "Kirim Lamaran"}
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}

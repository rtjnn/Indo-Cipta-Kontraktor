export default function AboutUs() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Profil Perusahaan
        </h2>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">
          PT INDO CIPTA KONTRAKTOR merupakan suatu perusahaan yang bergerak
          dalam bidang industri penambangan nikel. Perusahaan kami telah
          mendapatkan Izin Usaha Jasa Pertambangan (IUJP) dari pemerintah
          Indonesia untuk melakukan jasa konstruksi pada pertambangan mineral.
        </p>
      </div>
      {/* End Title */}

      {/* Left - Right Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Lokasi Site
          </h3>
          <p className="mt-2 text-gray-600 dark:text-neutral-400">
             Desa Powisoa Jaya, Kecamatan Tanggetada, Kabupaten Kolaka, Sulawesi Tenggara, Indonesia.
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Kantor Pusat
          </h3>
          <p className="mt-2 text-gray-600 dark:text-neutral-400">
            Gold Coast Office Tower Liberty, Lantai 21 Unit Kamal Muara,
            Penjaringan, Kota ADM. Jakarta Utara, DKI Jakarta.
          </p>
        </div>
      </div>
      {/* End Content */}
    </section>
  );
}

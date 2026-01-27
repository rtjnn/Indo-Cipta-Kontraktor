export default function Visimisi() {
  return (
    <>
      {/* Visi & Misi */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14 text-center">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
            Visi & Misi Perusahaan
          </h2>
          <p className="mt-3 text-gray-500">
            PT Indo Cipta Kontraktor
          </p>
        </div>
        {/* End Title */}

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {/* Visi */}
          <div className="py-8 first:pt-0">
            <div className="flex gap-x-5">
              <div className="shrink-0 mt-1 size-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                V
              </div>

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Visi
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Menjadi perusahaan tambang nikel terkemuka di Indonesia dan
                  berdaya saing global dengan mengedepankan keberlanjutan,
                  inovasi, serta kontribusi positif bagi masyarakat dan
                  lingkungan.
                </p>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="py-8 last:pb-0">
            <div className="flex gap-x-5">
              <div className="shrink-0 mt-1 size-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                M
              </div>

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Misi
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
                  <li>
                    Mengelola sumber daya nikel secara efisien, profesional, dan
                    bertanggung jawab dengan dukungan teknologi modern.
                  </li>
                  <li>
                    Menjadikan keselamatan dan kesehatan kerja karyawan sebagai
                    prioritas utama dalam seluruh kegiatan operasional.
                  </li>
                  <li>
                    Menerapkan praktik pertambangan yang ramah lingkungan serta
                    mendukung upaya konservasi alam.
                  </li>
                  <li>
                    Memberikan nilai tambah dan manfaat ekonomi bagi seluruh
                    pemangku kepentingan, khususnya masyarakat lokal.
                  </li>
                  <li>
                    Mengembangkan inovasi berkelanjutan dalam proses pengolahan
                    dan distribusi nikel untuk meningkatkan daya saing global.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Visi & Misi */}
    </>
  );
}

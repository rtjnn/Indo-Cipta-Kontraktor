import AnimatedContent from "../AnimatedContent";

export default function Sejarah() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Title */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight">
            Sejarah Perusahaan
          </h2>
        </div>
      </AnimatedContent>
      {/* End Title */}

      {/* Item */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
      <div className="relative border-l border-gray-200 pb-10 pl-10">
        <span className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-gray-800" />

        <h3 className="text-sm text-gray-500">2023 – Sekarang</h3>
        <h4 className="font-semibold text-gray-800">
          PT Indo Cipta Kontraktor
        </h4>
        <p className="mt-2 text-sm text-gray-600">
          Fokus pada pengembangan usaha pertambangan nikel dengan mengedepankan
          keberlanjutan, keselamatan kerja, dan inovasi teknologi.
        </p>
      </div>
      </AnimatedContent>

      {/* Item */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
      <div className="relative border-l border-gray-200 pb-10 pl-10">
        <span className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-gray-800" />

        <h3 className="text-sm text-gray-500">2021 – 2022</h3>
        <h4 className="font-semibold text-gray-800">
          Tahap Persiapan & Legalitas
        </h4>
        <p className="mt-2 text-sm text-gray-600">
          Penyusunan perizinan, pembentukan tim inti, serta studi kelayakan
          wilayah tambang dan rantai distribusi.
        </p>
      </div>
      </AnimatedContent>

      {/* Item terakhir */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
      <div className="relative pl-10">
        <span className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-gray-800" />

        <h3 className="text-sm text-gray-500">2020</h3>
        <h4 className="font-semibold text-gray-800">Awal Berdiri</h4>
        <p className="mt-2 text-sm text-gray-600">
          Perusahaan didirikan dengan visi menjadi pemain utama di industri
          pertambangan nikel nasional.
        </p>
      </div>
      </AnimatedContent>
    </div>
  );
}

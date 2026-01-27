import AnimatedContent from "../AnimatedContent";

export default function Visimisi() {
  return (
    <>
      {/* Visi & Misi */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
          <div className="max-w-2xl mx-auto mb-10 lg:mb-14 text-center">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
              Visi & Misi Perusahaan
            </h2>
            <p className="mt-3 text-gray-500">PT Indo Cipta Kontraktor</p>
          </div>
        </AnimatedContent>
        {/* End Title */}

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {/* Visi */}
          <div className="py-8 first:pt-0">
            <div className="flex gap-x-5">
              <div className="grow">
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <h3 className="shrink-0 mt-1 size-6 flex items-center justify-center rounded-e-sm bg-blue-100 text-blue-600 font-bold">
                    Visi
                  </h3>
                </AnimatedContent>{" "}
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={false}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Menjadi perusahaan yang berpengalaman, profesional, dan
                    andal di bidang pertambangan, dengan mengutamakan
                    keselamatan kerja.
                  </p>
                </AnimatedContent>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="py-8 last:pb-0">
            <div className="flex gap-x-5">
              <div className="grow">
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                <h3 className="shrink-0 mt-1 size-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  Misi
                </h3>
                </AnimatedContent>
                <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
                    <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <li>
                    Mengoptimalkan sumber daya dengan mengutamakan
                    keberlanjutan, keselamatan kerja, dan kelestarian
                    lingkungan.
                  </li>
                  </AnimatedContent>
                     <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={false}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <li>
                    Menjaga kualitas pekerjaan dan lingkungan kerja secara
                    konsisten.
                  </li>
                  </AnimatedContent>
                  <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <li>
                    Meningkatkan kinerja dan produktivitas melalui perbaikan
                    berkelanjutan. Mengelola sumber daya nikel secara efisien
                    dan bertanggung jawab
                  </li>
                  </AnimatedContent>
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

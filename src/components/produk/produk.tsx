import AnimatedContent from "../AnimatedContent";

export default function Produk() {
  return (
    <>
      {/* Blog Article */}
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Content */}
            <div className="py-8 text-center lg:px-8">
              <div className="space-y-5 lg:space-y-8">
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
                  <h2 className="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight">
                    Produk Perusahaan Kami
                  </h2>
                </AnimatedContent>

                {/* Badge */}
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <div className="flex items-center justify-center gap-x-5">
                    <h2 className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-200 sm:text-xl">
                      Nikel
                    </h2>
                  </div>
                </AnimatedContent>

                {/* Description */}
                <AnimatedContent
                  distance={50}
                  direction="vertical"
                  reverse={false}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <p className="text-lg text-gray-800">
                    Kualitas tinggi dan konsisten, diproduksi dengan standar
                    keselamatan dan ramah lingkungan, siap untuk distribusi
                    nasional maupun global.
                  </p>
                </AnimatedContent>

                {/* Images (tidak diubah) */}
                <div>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                      <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={true}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.3}
                        delay={0}
                      >
                        <figure className="relative h-60 w-full">
                          <img
                            className="absolute inset-0 size-full rounded-xl object-cover"
                            src="/hasiltambang/nikel1.jpg"
                            alt="Blog Image"
                          />
                        </figure>
                      </AnimatedContent>
                      <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={0}
                      >
                        <figure className="relative h-60 w-full">
                          <img
                            className="absolute inset-0 size-full rounded-xl object-cover"
                            src="/hasiltambang/nikel4.jpg"
                            alt="Blog Image"
                          />
                        </figure>
                      </AnimatedContent>
                    </div>
                    <AnimatedContent
                      distance={100}
                      direction="horizontal"
                      reverse={false}
                      duration={1}
                      ease="power3.out"
                      initialOpacity={0}
                      animateOpacity
                      scale={1}
                      threshold={0.3}
                      delay={0}
                    >
                      <figure className="relative h-72 w-full sm:h-96 lg:h-full">
                        <img
                          className="absolute inset-0 size-full rounded-xl object-cover"
                          src="/hasiltambang/nikel3.jpg"
                          alt="Blog Image"
                        />
                      </figure>
                    </AnimatedContent>
                  </div>
<AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                      >
                  <span className="mt-3 block text-sm text-gray-500">
                    Foto Nikel
                  </span>
                  </AnimatedContent>
                </div>
              </div>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
}

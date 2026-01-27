import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ImageSlider from "@/components/image-slider/Slider";
import Produk from "@/components/produk/produk";
import Sejarah from "@/components/sejarah/sejarah";
import AboutUs from "@/components/tentang-kami/aboutus";
import Visimisi from "@/components/visi-misi/visimisi";

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <section>
          <ImageSlider />
        </section>

        <section id="Profil" className=" pt-10">
          <AboutUs />
        </section>

        <section id="Visi-misi" className=" bg-gray-100 pt-10">
          <Visimisi />
        </section>
        
        <section id="Sejarah" className=" bg-white p-20">
          <Sejarah />
        </section>

        <section id="Produk" className=" bg-gray-100 pt-20"><Produk/></section>

        <section id="hubungi" className=" bg-gray-800"> <Footer /></section>
        
      </main>

     
    </>
  );
}

import { Footer } from "@/components/layouts/Footer";
import { Navigation } from "@/components/layouts/Navbar";
import { HerosSection } from "@/components/pages/home/Heros";
import { HomeGallery } from "@/components/pages/home/HomeGallery";
import { SummarySection } from "@/components/pages/home/Summary";

// TODO : add about dan contact page

export default function Home() {
  return (
    <>
      <Navigation />
      <HerosSection />
      <SummarySection />
      <HomeGallery />
      <Footer />
    </>
  );
}

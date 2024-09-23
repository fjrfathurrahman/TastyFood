import { Footer } from "@/components/layouts/Footer";
import { HerosSection } from "@/components/pages/home/Heros";
import { HomeGallery } from "@/components/pages/home/HomeGallery";
import { SummarySection } from "@/components/pages/home/Summary";

export default function Home() {
  return (
    <>
      <HerosSection />
      <SummarySection />
      <HomeGallery/>
      <Footer/>
    </>
  );
}

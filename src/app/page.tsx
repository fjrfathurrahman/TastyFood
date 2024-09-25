import { Footer } from "@/components/layouts/Footer";
import { Navigation } from "@/components/layouts/Navbar";
import { HerosSection } from "@/components/pages/home/Heros";
import { HomeGallery } from "@/components/pages/home/HomeGallery";
import { SummarySection } from "@/components/pages/home/Summary";

export default function Home(): JSX.Element {
  return (
    <>
      <Navigation gap="gap-20" />
      <HerosSection />
      <SummarySection />
      <HomeGallery />
      <Footer />
    </>
  );
}

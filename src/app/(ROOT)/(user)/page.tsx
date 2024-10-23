import { Hero } from "@/components/pages/home/Hero";
import { HighlightGallery } from "@/components/pages/home/HighlightGallery";
import { Summary } from "@/components/pages/home/Summary";

export default function Home() {
  return (
    <>
      <Hero />
      <Summary />
      <HighlightGallery />
    </>
  );
}

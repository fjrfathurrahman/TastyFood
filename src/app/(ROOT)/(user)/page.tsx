import { BestMenu } from "@/components/pages/home/BestMenu";
import { Hero } from "@/components/pages/home/Hero";
import { HighlightGallery } from "@/components/pages/home/HighlightGallery";
import { HighlightNews } from "@/components/pages/home/HighlightNews";
import { Summary } from "@/components/pages/home/Summary";

export default function Home() {
  return (
    <>
      <Hero />
      <Summary />
      <BestMenu />
      <HighlightNews />
      <HighlightGallery />
    </>
  );
}

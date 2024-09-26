import { AllGallery } from "@/components/pages/galeri/AllGallery";
import dynamic from "next/dynamic";

const SwiperImageComponent: React.ElementType = dynamic(
  () => import("@/components/pages/galeri/SwiperImage").then((module) => module.SwiperImage), { loading: () => null }
);

export default function GaleriPage(): JSX.Element {
  return (
    <>
      <SwiperImageComponent />
      <AllGallery />
    </>
  );
}

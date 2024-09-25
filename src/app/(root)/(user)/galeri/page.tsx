import { AllGallery } from "@/components/pages/galeri/AllGallery";
import dynamic from "next/dynamic";

export const SwiperImageComponent = dynamic(() => import("@/components/pages/galeri/SwiperImage").then((module) => module.SwiperImage), {
  ssr: false,
  loading: () => null
})

export default function GaleriPage(): JSX.Element {
  return (
    <>
      <SwiperImageComponent />
      <AllGallery />
    </>
  );
}

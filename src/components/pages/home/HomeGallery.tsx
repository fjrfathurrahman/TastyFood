import { ButtonEl, TittleEl } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import useGetData from "@/lib/hook/useGetData";
import { ApiResponse, ResponseGallery } from "@/lib/types/types";
import dynamic from "next/dynamic";

const GalleryList = dynamic(
  () =>
    import("@/components/layouts/GalleryList").then(
      (module) => module.GalleryList
    ),
  { loading: () => null }
);

export const HomeGallery = async (): Promise<JSX.Element> => {
  const result: ApiResponse<ResponseGallery> = await useGetData(
    "http://localhost:8000/api/gallery"
  );

  return (
    <MainContainer>
      <TittleEl text="Galeri Kami" textAlign="text-center" />
      {result.data ? <GalleryList data={result.data.data} /> : null}
      <div className="mt-8 flex justify-center">
        <ButtonEl text="LIHAT LEBIH BANYAK" variant="primary" />
      </div>
    </MainContainer>
  );
};

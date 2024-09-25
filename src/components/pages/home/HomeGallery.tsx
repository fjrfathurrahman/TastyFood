import { ButtonEl, TittleEl } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { ApiResponse, ResponseGallery } from "@/lib/types/types";
import useGetData from "@/lib/hook/useGetData";
import dynamic from "next/dynamic";

const GalleryListComponent = dynamic(
  () =>
    import("@/components/layouts/GalleryList").then(
      (module) => module.GalleryList
    ),
  { loading: () => null }
);

export const HomeGallery = async (): Promise<JSX.Element> => {
  const result: ApiResponse<ResponseGallery> = await useGetData({
    url: "http://localhost:8000/api/gallery",
  });

  if (result.data === undefined) {
    return <div>Sepertinya ada kesalahan pada server</div>;
  }

  return (
    <MainContainer>
      <TittleEl text="Galeri Kami" textAlign="text-center" />
      <GalleryListComponent data={result.data} />
      {result.data.length > 0 && (
        <div className="mt-8 flex justify-center">
          <ButtonEl text="LIHAT LEBIH BANYAK" variant="primary" />
        </div>
      )}
    </MainContainer>
  );
};

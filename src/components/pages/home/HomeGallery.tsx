import { ButtonEl, TittleEl } from "@/components/common";
import { MainContainer } from "@/components/containers";
import { useGetData } from "@/lib/hook/useGetData";
import { ApiResponse, ResponseGallery } from "@/lib/types/types";
import dynamic from "next/dynamic";

const GalleryListComponent = dynamic(() => import("@/components/ui/GalleryList").then((module) => module.GalleryList),
  { loading: () => null }
);

export const HomeGallery = async (): Promise<JSX.Element> => {
  const result: ApiResponse<ResponseGallery> = await useGetData({
    url: process.env.NEXT_PUBLIC_GALLERY_URL || "",
  });

  if (result.data === undefined) return <div className="text-center">Sepertinya ada kesalahan pada server</div>;
  

  return (
    <MainContainer>
      <TittleEl text="Galeri Kami" textAlign="text-center" />
      <GalleryListComponent data={result.data} url='http://localhost:3000/galeri' />
      {result.data.length > 0 && (
        <div className="mt-8 flex justify-center">
          <ButtonEl text="LIHAT LEBIH BANYAK" variant="primary" />
        </div>
      )}
    </MainContainer>
  );
};

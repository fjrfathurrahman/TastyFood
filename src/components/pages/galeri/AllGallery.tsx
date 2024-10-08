import { MainContainer } from "@/components/containers";
import { useGetData } from "@/lib/hook/useGetData";
import { ApiResponse, ResponseGallery } from "@/lib/types/types";
import dynamic from "next/dynamic";

const GalleryListComponent = dynamic(
  () =>
    import("@/components/ui/GalleryList").then(
      (module) => module.GalleryList
    ),
  { loading: () => null }
);

export const AllGallery = async (): Promise<JSX.Element> => {
  const result: ApiResponse<ResponseGallery> = await useGetData({
    url: process.env.NEXT_PUBLIC_GALLERY_URL ||''
  });

  if (result.data === undefined) {
    return <div className="text-center">Sepertinya ada kesalahan pada server</div>;
  }

  return (
    <MainContainer>
      <GalleryListComponent data={result.data} />
    </MainContainer>
  );
};

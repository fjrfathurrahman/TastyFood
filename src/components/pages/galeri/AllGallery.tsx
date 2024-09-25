import { MainContainer } from "@/components/containers/MainContainer";
import useGetData from "@/lib/hook/useGetData";
import { ApiResponse, ResponseGallery } from "@/lib/types/types";
import dynamic from "next/dynamic";

const GalleryListComponent = dynamic(
  () =>
    import("@/components/layouts/GalleryList").then(
      (module) => module.GalleryList
    ),
  { loading: () => null }
);

export const AllGallery = async (): Promise<JSX.Element> => {
  const result: ApiResponse<ResponseGallery> = await useGetData({
    url: "http://localhost:8000/api/gallery",
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

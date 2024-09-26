import { useGetDataNoStore } from "@/lib/hook/useGetData";
import { ApiResponse, ResponseGallery } from "@/lib/types/types";

export default async function HeaderComponent(): Promise<JSX.Element> {
  const result: ApiResponse<ResponseGallery> = await useGetDataNoStore({
    url: "http://localhost:8000/api/gallery",
  });

  return (
    <div>
      {/* Welcome Admin */}
      <span className="text-2xl font-semibold">
        {result.data && result.data.length} Total Image Gallery
      </span>
      {/* Total News */}
    </div>
  );
}

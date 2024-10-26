import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export default function useGetGallery (id?: string) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: id ? ["gallery", id] : ["gallery"],
    queryFn: async () => {
      const endpoint = id ? `/gallery/${id}` : "/gallery";
      const galleryResponse = await axiosInstance.get(endpoint);
      await new Promise((resolve) => setTimeout(resolve, 2500));
      
      return galleryResponse;
    },
  });

  return {
    refetch,
    result: data,
    data: id ? data?.data?.data || null : data?.data?.data || [], 
    isLoading,
    isError,
  }
};

import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export default function useGetNews(id? : string) {

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: id ? ["news", id] : ["news"],
    queryFn: async () => {
      const endpoint = id ? `/news/${id}` : "/news";
      const newsResponse = await axiosInstance.get(endpoint);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return newsResponse;
    }
  }) 

  return {
    refetch,
    result: data,
    data: id ? data?.data?.data || null : data?.data?.data || [],
    isLoading,
    isError
  }

}
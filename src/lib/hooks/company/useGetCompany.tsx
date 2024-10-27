import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export default function useGetCompany() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      const companyResponse = axiosInstance("company/1");
      await new Promise((resolve) => setTimeout(resolve, 2500));

      return (await companyResponse).data.data;
    },
    staleTime: 5 * 60 * 1000, // Data dianggap fresh selama 5 menit
    cacheTime: 30 * 60 * 1000, // Data tetap di cache selama 30 menit
  });

  return {
    data,
    isLoading,
    isError,
  };
}

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
  });

  return {
    data,
    isLoading,
    isError,
  };
}

import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "react-query";

export default function usePutCompany() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ formData }: { formData: FormData }) => {
      const companyResponse = await axiosInstance.post("/company/1", formData);
      await new Promise((resolve) => setTimeout(resolve, 2500));

      return companyResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company"] });
      Toast.Success("Berhasil menggubah data perusahaan");
    },
    onError: () => {
      Toast.Error("Gagal mengubah data perusahaan");
    },
  });
}

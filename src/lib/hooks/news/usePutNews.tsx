import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

export default function usePutNews({ onSuccess }: PostProps) {
  return useMutation({
    mutationFn: async ({ formData, id }: { formData: FormData, id: string | number }) => {
      const newsResponse = await axiosInstance.post('/news/' + id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(newsResponse);
      await new Promise((resolve) => setTimeout(resolve, 2500));
      return newsResponse
    },
    onSuccess,
    onError: () => {
      Toast.Error("Gagal mengubah berita");
    }
  })
}
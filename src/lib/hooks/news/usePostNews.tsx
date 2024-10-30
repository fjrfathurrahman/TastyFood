import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

export default function usePostNews({ onSuccess }: PostProps) {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const NewsResponse = await axiosInstance.post('/news', formData)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log(NewsResponse);
      return NewsResponse
    },
    onSuccess,
    onError: () => {
      Toast.Error("Gagal menambahkan berita")
    }
  })
}
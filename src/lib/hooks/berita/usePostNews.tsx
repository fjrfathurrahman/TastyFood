import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

export default function usePostNews({ onSuccess, onError }: PostProps) {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const NewsResponse = await axiosInstance.post('/news', formData)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      return NewsResponse
    },
    onSuccess,
    onError
  })
}
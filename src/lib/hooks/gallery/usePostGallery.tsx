import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

export default function usePostGallery({ onSuccess, onError }: PostProps) {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const GalleryResponse = axiosInstance.post('/gallery', formData)
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      return GalleryResponse
    },
    onSuccess,
    onError
  })
}
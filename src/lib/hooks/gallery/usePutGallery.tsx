import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

export default function usePutGallery({ onSuccess, onError }: PostProps) {

  return useMutation({
    mutationFn: async ({ formData, id }: { formData: FormData, id: string | number }) => {
      const GalleryResponse = await axiosInstance.post('/gallery/' + id, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return GalleryResponse
    },
    onSuccess,
    onError
  })
}
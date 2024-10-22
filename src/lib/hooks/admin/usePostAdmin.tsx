import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

export default function usePostAdmin({ onSuccess, onError }: PostProps) {
  
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const AdminResponse = axiosInstance.post('/login', formData)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return AdminResponse
    },
    onSuccess,
    onError
  })

}
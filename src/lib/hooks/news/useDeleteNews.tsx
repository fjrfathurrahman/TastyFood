import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "react-query";

export default function useDeleteNews() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: number) => {
      const galleryResponse = await axiosInstance.delete("/news/" + id);
      return galleryResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      Toast.Success("Berita Berhasil dihapus");
    },
    onError: () => {
      Toast.Error("Terjadi kesalahan, silahkan coba lagi");
    },
  });
}

import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "react-query";

export default function useDeleteGallery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const galleryResponse = await axiosInstance.delete("/gallery/" + id);
      return galleryResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      Toast.Success("Galeri Berhasil dihapus");
    },
    onError: () => {
      Toast.Error("Terjadi kesalahan, silahkan coba lagi");
    },
  });
}
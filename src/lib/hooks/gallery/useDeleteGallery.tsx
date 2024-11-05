import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "react-query";

/**
 * Fungsi untuk menghapus galeri dari server berdasarkan id yang diberikan.
 *
 * @returns {Object} - objek yang mengandung fungsi mutation
 */
export default function useDeleteGallery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const galleryResponse = await axiosInstance.delete("/gallery/" + id);
      await new Promise((resolve) => setTimeout(resolve, 2500)); // delay hanya 2.5 detik

      return galleryResponse;
    },
    onSuccess: () => { // Jika berhasil, akan menjalankan fungsi onSuccess
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      Toast.Success("Galeri Berhasil dihapus");
    },
    onError: () => { // Jika gagal, akan menampilkan Toast Pesan Error
      Toast.Error("Terjadi kesalahan, silahkan coba lagi"); 
    },
  });
}
import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

/**
 * Fungsi untuk mengirim request POST ke endpoint gallery
 *
 * @param {Object} PostProps - Objek dengan properti onSuccess.
 * @returns {Object} - Objek yang mengandung fungsi mutation
 */
export default function usePostGallery({ onSuccess }: PostProps) {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const GalleryResponse = axiosInstance.post("/gallery", formData);
      await new Promise((resolve) => setTimeout(resolve, 2500)); // delay hanya 2.5 detik

      return GalleryResponse;
    },
    onSuccess, // Jika berhasil, akan menjalankan fungsi onSuccess
    onError: () => { // Jika gagal, akan menampilkan Toast Pesan Error
      Toast.Error("Gagal menambahkan galeri");
    },
  });
}

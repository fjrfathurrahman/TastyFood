import { Toast } from "@/components/common";
import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/lib/types/response";
import { useMutation } from "react-query";

/**
 * * Fungsi untuk mengubah data galeri di server.
 *
 * @param {PostProps} { onSuccess } - objek dengan properti onSuccess.
 * @returns {Object} - objek yang mengandung fungsi mutation
 */
export default function usePutGallery({ onSuccess }: PostProps) {

  return useMutation({
    mutationFn: async ({ formData, id }: { formData: FormData, id: string | number }) => {
      const GalleryResponse = await axiosInstance.post('/gallery/' + id, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      await new Promise((resolve) => setTimeout(resolve, 2500)); // delay hanya 2.5 detik
      
      return GalleryResponse
    },
    onSuccess, // Jika berhasil, akan menjalankan fungsi onSuccess
    onError: () =>  { // Jika gagal, akan menampilkan Toast Pesan Error
      Toast.Error("Gagal mengubah galeri"); 
    }
  })
}
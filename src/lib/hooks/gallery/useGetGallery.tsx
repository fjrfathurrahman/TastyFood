import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

/**
 * * Fungsi untuk mengambil data galeri dari server.
 * Jika id tidak disediakan maka akan mengambil semua data galeri.
 * Jika id disediakan maka akan mengambil data galeri berdasarkan id.
 *
 * @param {string} id - id galeri yang akan diambil.
 * @returns {Object} - object yang mengandung data galeri, status, isLoading, isError, dan refetch.
 */
export default function useGetGallery (id?: string) {
  const { data, refetch, status } = useQuery({
    queryKey: id ? ["gallery", id] : ["gallery"],
    queryFn: async () => {
      const endpoint = id ? `/gallery/${id}` : "/gallery";
      const galleryResponse = await axiosInstance.get(endpoint);
      await new Promise((resolve) => setTimeout(resolve, 2500)); // delay hanya 2.5 detik
      
      return galleryResponse;
    },
  });

  return {
    status, // status dari query
    refetch, // untuk refresh data
    result: data, // data dari query
    data: id ? data?.data?.data || null : data?.data?.data || [], // data berdasarkan id atau semua
  }
};

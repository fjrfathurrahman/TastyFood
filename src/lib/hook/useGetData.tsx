
/**
 * * Mengambil data dari server atau cache Next.js.
 * Jika data tidak ditemukan di cache, maka akan diambil dari server.
 * Jika data ditemukan di cache, maka akan diambil dari cache.
 * Opsi revalidate berfungsi untuk memperbarui cache. Jika tidak disediakan, maka defaultnya adalah 60 detik.
 * @param {{url: string | URL, revalidate?: number}} - objek dengan properti url dan revalidate.
 * @returns {Promise<ApiResponse | Error>} - Promise yang berisi data atau error.
 */
async function useGetData({url, revalidate = 60, }: { url: string | URL; revalidate?: number;}) {
  try {
    const response = await fetch(url, {
      next: { revalidate }, // revalidate: Menentukan waktu (detik) kapan cache akan diperbarui.
    }).then((res) => res.json());

    return response;
  } catch (error: unknown) {
    return error as Error;
  }
}

/**
 * * Mengambil data dari cache tanpa mengecek pembaruan di server. Opsi ini
 * sangat berguna untuk konten yang jarang berubah.
 *
 * @param {Object} obj - objek yang berisi url
 * @param {string|URL} obj.url - url yang akan diambil datanya
 * @returns {Promise<Object|Error>} - data yang diambil dari cache atau error jika gagal
 */
async function useGetDataForceCache({ url }: { url: string| URL }) {
  try {
    const response = await fetch(url, {
      cache: "force-cache", // cache: "force-cache": Opsi ini memaksa pengambilan data dari cache, tanpa mengecek pembaruan di server.
    }).then((res) => res.json());

    return response;
  } catch (error: unknown) {
    return error as Error;
  }
}

/**
 * * Mengambil data dari server tanpa menggunakan cache.
 * Jika data tidak ditemukan, maka akan diambil dari server.
 * Jika data ditemukan, maka akan diambil dari server, bukan dari cache.
 * Opsi ini sangat berguna untuk data yang sering berubah.
 *
 * @param {Object} obj - objek yang berisi url
 * @param {string|URL} obj.url - url yang akan diambil datanya
 * @returns {Promise<Object|Error>} - data yang diambil dari server atau error jika gagal
 */
async function useGetDataNoStore({ url }: { url: string| URL }) {
  try {
    const response = await fetch(url, {
      cache: "no-store", // cache: "no-store": Ini memastikan fetch selalu mengambil data terbaru dari server, tanpa menggunakan cache.
    }).then((res) => res.json());

    return response;
  } catch (error: unknown) {
    return error as Error;
  }
}

export { useGetDataForceCache, useGetData, useGetDataNoStore };

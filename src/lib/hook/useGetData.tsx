async function useGetData({url, revalidate = 60, }: { url: string | URL; revalidate?: number;}) {
  try {
    const response = await fetch(url, {
      next: { revalidate }, // revalidate: Menentukan waktu (detik) kapan cache akan diperbarui. Misalnya, jika revalidate: 60, maka data akan diambil ulang setelah 60 detik.
    }).then((res) => res.json());

    return response;
  } catch (error: unknown) {
    return error as Error;
  }
}

async function useGetDataForceCache({ url }: { url: string| URL }) {
  try {
    const response = await fetch(url, {
      cache: "force-cache", // cache: "force-cache": Opsi ini memaksa pengambilan data dari cache, tanpa mengecek pembaruan di server. Sangat berguna untuk konten yang jarang berubah.
    }).then((res) => res.json());

    return response;
  } catch (error: unknown) {
    return error as Error;
  }
}

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

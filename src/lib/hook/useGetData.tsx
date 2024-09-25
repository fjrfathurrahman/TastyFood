async function useGetData({ url, revalidate = 60, }: { url: string; revalidate?: number;}) {
  try {
    const response = await fetch(url, {
      next: { revalidate: revalidate },
      cache: "force-cache",
    }).then((res) => res.json());

    return response;
  } catch (error: unknown) {
    return error as Error;
  }
}

export default useGetData;

async function useGetData({
  url,
  revalidate = 60,
}: {
  url: string;
  revalidate?: number;
}) {
  const response = await fetch(url, {
    next: { revalidate: revalidate },
    cache: "force-cache",
  }).then((res) => res.json());

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
}

export default useGetData;

async function useGetData(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 120},
    cache: "force-cache",
  }).then((res) => res.json());

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
}

export default useGetData;

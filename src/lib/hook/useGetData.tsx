async function useGetData(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 30},
  }).then((res) => res.json());

  return response;
}

export default useGetData;

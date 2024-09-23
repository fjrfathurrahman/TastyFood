async function useGetData(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!response) {
    return null;
  }

  const result = await response.json();
  return result;
}

export default useGetData;

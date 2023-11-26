import useSWR from "swr";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  });

  return { data, error };
}

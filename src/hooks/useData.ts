import apiClient from "@/components/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Genre } from "./useGenres";

interface FetchedDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, selectedGenre?: Genre | null) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchedDataResponse<T>>(endpoint, {
        signal: controller.signal,
        params: {
          genres: selectedGenre?.id,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre]);

  return { data, error, isLoading };
};

export default useData;

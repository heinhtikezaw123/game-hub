import apiClient from "@/components/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<FetGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return ;
        setError(err.message);
      });

      return () => controller.abort();
  }, []);

  return { games, error  ,  };
};

export default useGames;

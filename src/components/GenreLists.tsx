import useGenres from "@/hooks/useGenres";
import useGenre, { Genre } from "@/hooks/useGenres";

const GenreLists = () => {
  const { data : genres , error, isLoading } = useGenres();

  return <ul>{genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}</ul>
};

export default GenreLists;

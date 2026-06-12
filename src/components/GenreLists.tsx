import useGenres from "@/hooks/useGenres";
import useGenre, { Genre } from "@/hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreLists = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
            onClick={() => onSelectGenre(genre)}
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreLists;

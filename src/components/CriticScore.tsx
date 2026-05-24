import { Game } from "@/hooks/useGames";
import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const getColor = (score: number) => {
  if (score > 75) return "green";
  if (score > 60) return "yellow";
  return "red";
};

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={getColor(score)}
      fontSize="16px"
      paddingX={3}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

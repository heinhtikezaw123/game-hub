import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
      <Input
        borderRadius={20}
        placeholder="Search games...."
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(e.currentTarget.value);
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;

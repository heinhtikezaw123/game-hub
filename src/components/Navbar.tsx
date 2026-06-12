import { HStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { GameQuery } from '@/hooks/useGames'

interface Props {
  gameQuery : GameQuery;
  setGameQuery : (query : GameQuery) => void;
}

const Navbar = ({setGameQuery , gameQuery} : Props) => {
  return (
    <HStack padding="10px">
      
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch = {(searchValue) => 
            setGameQuery({...gameQuery , searchValue})
          } />
      <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
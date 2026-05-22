import { HStack } from '@chakra-ui/react'
import { Image , Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import React from 'react'

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  )
}

export default Navbar
import { HStack, Input, Text } from 'native-base'
import React from 'react'
import Colors from '../color'

function HomeSearch() {
  return (
    <HStack
    space={3}
    w='full'
    px={6}
    bg={Colors.main}
    py={4}
    alignItems='center'
    safeAreaTop
    >
      <Input>
      </Input>
    </HStack>
  )
}

export default HomeSearch
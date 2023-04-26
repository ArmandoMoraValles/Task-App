import React from 'react'
import { Text, Center, Image, Heading } from 'native-base'
import Colors from '../color'
import Tabs from '../Components/Profile/Tabs'


function ProfileScreen() {
  return (
        <>
            {/* The code is rendering a profile screen with a centered container that has a background
            color set to `Colors.main`, a padding top of 10 and a padding bottom of 6. Inside the
            container, there is an image of a profile, a heading with the text "user@gmail.com" in
            white color, and a text with the word "Information" in white color and italic style. The
            `Center` component is a layout component from the `native-base` library that centers its
            children horizontally and vertically. */}
            <Center
              bg={Colors.main}
              pt={10}
              pb={6}
            >
              <Image
                source={{uri:'http://cdn.onlinewebfonts.com/svg/img_266351.png'}}
                alt='profile'
                w={24}
                h={24}
                resizeMode='cover'
              />
              <Heading
                bold
                fontSize='15'
                isTruncated
                my={2}
                color={Colors.white}
                >user@gmail.com
              </Heading>
              <Text
                italic
                fontSize={10}
                color={Colors.white}
              >
                Information
              </Text>
            </Center>
            {/* TABS */}
            <Tabs/>
        </>
  )
}

export default ProfileScreen
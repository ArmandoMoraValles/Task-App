import React from 'react'
import { Text, Box, Heading, VStack, Input, Button, Pressable } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


function RegisterScreen() {
  return (
    /* `<LinearGradient` is a component from the Expo library that creates a linear gradient background
    with the specified colors. In this code, it is used to create a background with a gradient of
    blue colors. */
    <LinearGradient
      colors={['#08268c', '#00d4ff']}
      style={{ height: '100%' }}>
      <Box
        w='full'
        h='full'
        position='absolute'
        top='150'
        px='10'
        justifyContent='center'
        alignItems='center'
      >
        <Heading
          color='white'
          textAlign='center'
          fontWeight='extrabold'
          fontSize='50'
        >SING UP</Heading>
        <VStack space={5} pt={8}>

          {/* /* This is a component from the NativeBase library that creates an input field for the user
          to enter email. */}
          <Input
            InputLeftElement={<MaterialIcons name="email" size={20} color="#ffffff" />}
            variant='underlined'
            placeholder='User@gmail.com'
            placeholderTextColor='#ffffff'
            w='90%'
            color='#ffffff'
            fontSize='15'
            textAlign='center'
          />
          {/* This is a component from the NativeBase library that creates an input field for the user
          to enter a password.*/}
          <Input
            InputLeftElement={<MaterialCommunityIcons
              name="form-textbox-password"
              size={20}
              color="white"
            />}
            variant='underlined'
            placeholder='**********'
            type='password'
            placeholderTextColor='#ffffff'
            w='90%'
            color='#ffffff'
            fontSize='15'
            textAlign='center'
          />
        </VStack>
        {/* This code is creating a button component with the text "Sing Up" inside it. */}
        <Button
          _pressed={{
            bg: '#2980b9'
          }}
          w='90%'
          my={10}
          rounded={50}
          fontSize='20'
          bg='#15408f'
          onPress={() => console.log('Botón presionado')}
        >SING UP</Button>
          <Pressable
            _pressed={{
              bg: '#2980b9'
            }}
            mt={4}
            onPress={() => console.log('Link presionado')}
          >
            <Text
              color='#ffffff'
              fontSize='20'
              fontWeight='bold'
            >I have account
            <Text
              color='#15408f'
              fontSize='20'
              fontWeight='bold'
            > Login</Text>
            </Text>
          </Pressable>
      </Box>
    </LinearGradient>
  )
}

export default RegisterScreen
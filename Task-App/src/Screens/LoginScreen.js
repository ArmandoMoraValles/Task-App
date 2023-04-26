import React from 'react'
import { Text, Box, Heading, VStack, Input, Button, Pressable } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'


function LoginScreen() {
  return (
    // `<LinearGradient` is a component from the Expo library that creates a linear gradient background
    // with the specified colors. In this code, it is used to create a background with a gradient of
    // blue colors.
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
          fontWeight='bold'
          fontSize='50'
        >LOGIN</Heading>
        <VStack space={5} pt={8}>

          {/* /* This is a component from the NativeBase library that creates an input field for the user
          to enter email. */}
          <Input
            InputLeftElement={<MaterialIcons name="email" size={20} color="#ffffff" />}
            variant='underlined'
            placeholder='User@gmail.com'
            placeholderTextColor='#ffffff'
            w='90%'
            type='text'
            color='#ffffff'
            fontSize='15'
            fontFamily='heading'
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
        {/* This code is creating a button component with the text "Log In" inside it. */}
        <Button
          _pressed={{
            bg: '#15408f'
          }}
          w='90%'
          my={20}
          rounded={50}
          fontSize='20'
          bg='#2980B9'
          onPress={() => console.log('Botón presionado')}
        >Log In</Button>
        {/* This code is creating a text component with the message "You don´t have account?" and a
        clickable link "Sing Up" that changes color when pressed. When the link is pressed, it logs
        a message to the console. */}
        <Text
          color='#ffffff'
        >You don´t have account?
          <Pressable
            _pressed={{
              bg: '#2980b9'
            }}
            mt={4}
            onPress={() => console.log('Link presionado')}
          >
            <Text
              color='#15408f'
            > Sing Up</Text>
          </Pressable>
        </Text>
      </Box>
    </LinearGradient>

  )
}

/* `export default LoginScreen` is exporting the `LoginScreen` component as the default export of the
module. This means that when another module imports this module, they can import it using `import
LoginScreen from './LoginScreen'` and `LoginScreen` will refer to the exported component. */
export default LoginScreen
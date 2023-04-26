import React from 'react';
import { Box, Center, Image, VStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Buttone from '../Components/Buttone';
import Colors from '../color';


function NotVerfiyScreen() {
  return (
        /* `<LinearGradient>` is a component from the Expo library that is used to create a linear
        gradient background. In this code, it is creating a linear gradient background with two
        colors - `#08268c` and `#00d4ff` - that transition from top to bottom. The `style` prop is
        setting the height of the gradient to 100% of the available space. */
        <LinearGradient
        colors={['#08268c', '#00d4ff']}
        style={{ height: '100%' }}
        >
            <Box
            flex={1}
            safeAreaTop
            >
                <Center
                w='full'
                h={250}
                >
                    <Image
                        source={require('../../assets/favicon.png')} /*reducir el tamaño de las imagenes*/
                        alt='Logo'
                        size='lg'
                    />
                </Center>
                {/* `<VStack>` is a component from the NativeBase library that is used to create a
                vertical stack of components. It arranges its child components in a vertical column,
                with each component stacked on top of the previous one. In this code, it is being
                used to create a vertical stack of buttons with some spacing between them. */}
                <VStack
                space={6}
                px={5}
                alignItems='center'
                >
                    {/*`<Buttone>` is a custom component that is being imported from the
                    "../Components/Buttone" file.*/}
                    <Buttone 
                    bg={Colors.black}
                    color={Colors.white}
                    >REGISTER</Buttone>
                    {/* `<Buttone>` is a custom component that is being used to render a button with a
                    white background color and black text color, with the text "LOGIN" inside the
                    button.*/}
                    <Buttone 
                    bg={Colors.white}
                    color={Colors.black}
                    >LOGIN</Buttone>
                </VStack>
            </Box>
        </LinearGradient>  
  )
}

export default NotVerfiyScreen;
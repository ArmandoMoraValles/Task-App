import React from 'react'
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import Colors from '../../color'

const Profile = () => {
  return (
    <Box>
        <ScrollView>
            <VStack
                space={10}
                mt={5}
                pb={10}
            >
                <FormControl>
                    <FormControl.Label
                        _text={{
                            fontSize:'12px',
                            fontWeight: 'bold',
                        }}
                    >E-MAIL</FormControl.Label>
                    <Input
                        borderWidth={0}
                        bg={Colors.blue}
                        py={3}
                        color={Colors.main}
                        fontSize={20}
                    ></Input>
                </FormControl>
            </VStack>
        </ScrollView>
    </Box>
  )
}

export default Profile
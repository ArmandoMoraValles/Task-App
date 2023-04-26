import React from 'react';
import { View, Text, Box } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../color';
import HomeSearch from '../Components/HomeSearch';


function HomeScreen() {
  return (
        <LinearGradient
        flex={1}
        colors={['#08268c', '#00d4ff']}
        style={{ height: '100%' }}
        >
          <Box

          >
            <HomeSearch/>
          </Box>
        </LinearGradient>
  )
}

export default HomeScreen;
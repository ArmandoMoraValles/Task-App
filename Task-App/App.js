import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotVerfiyScreen from "./src/Screens/NotVerfiyScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <NativeBaseProvider>
          <NotVerfiyScreen />
        </NativeBaseProvider>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// LoginScreen
// RegisterScreen
// HomeScreen
// NotVerfiyScreen
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import Users from './Screens/Users';
import UserSignUP from './Screens/UserSignUp';
import Pro from './Screens/Pro';
import ProSignUp from './Screens/ProSignUp';
import HomeScreen from './Screens/HomeScreen';
import { DetailScreen, DetailTabNavigator } from './Screens/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="UserSignUp" component={UserSignUP} />
        <Stack.Screen name="Pro" component={Pro} />
        <Stack.Screen name="ProSignUp" component={ProSignUp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

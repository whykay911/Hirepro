
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import Users from './Screens/Users';
import UserSignUP from './Screens/UserSignUp';
import Pro from './Screens/Pro';
import ProSignUp from './Screens/ProSignUp';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import ProHome from './Screens/ProHome';
import ProList from './Screens/ProList';
import ProHome2 from './Screens/ProHome2';
import ProProfile from './Screens/ProProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="UserSignUp" component={UserSignUP} />
        <Stack.Screen name="Pro" component={Pro} />
        <Stack.Screen name="ProSignUp" component={ProSignUp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ProHome" component={ProHome} />
        <Stack.Screen name="ProList" component={ProList} />
        <Stack.Screen name="ProHome2" component={ProHome2} />
        <Stack.Screen name="ProProfile" component={ProProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

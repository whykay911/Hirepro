import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const { professional } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{professional.email}</Text>
      <Text style={styles.details}>Profession: {professional.profession}</Text>
      <Text style={styles.details}>Hourly rate: {professional.hourly}</Text>
    </View>
  );
};

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Appointment Screen</Text>
    </View>
  );
};

const DetailScreen = ({ route }) => {
  const { professional } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ professional }} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export {DetailScreen};

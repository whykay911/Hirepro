import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProHomeScreen = ({ route }) => {
  const { email, profession, hourly } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {email}!</Text>
      <Text style={styles.text}>Profession: {profession}</Text>
      <Text style={styles.text}>Hourly Charge: ${hourly}</Text>
    </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ProHomeScreen;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProHome() {
  const navigation = useNavigation();

  const handleHomePress = () => {
    console.log('Navigate to ProList');
    navigation.navigate('ProList');
  };

  const handleProfilePress = () => {
    console.log('Navigate to Profile');
    navigation.navigate('ProProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={handleHomePress}>
          <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfilePress}>
          <Text style={styles.menuItem}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>Screen content goes here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#f5f5f5',
    height: 50,
    marginTop: 30,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProHome;
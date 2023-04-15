import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { professional } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{professional.email}</Text>
      <Text style={styles.details}>Profession: {professional.profession}</Text>
      <Text style={styles.details}>Hourly rate: {professional.hourly}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DetailScreen;

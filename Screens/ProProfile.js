import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProProfile = ({ email, navigation }) => {
  const [professional, setProfessional] = useState(null);

  useEffect(() => {
    const fetchProfessional = async () => {
      const response = await fetch(`http://192.168.206.155:3000/professionals?filter={"where": {"email": "${email}"}}`);
      try {
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setProfessional(data[0]); // assuming username is unique, so we take the first item from the array
        } else {
          console.log('Error: ', response.status);
          alert('An error occurred while retrieving the professional. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while retrieving the professional. Please try again later.');
      }
    };
    fetchProfessional();
  }, [email]);

  if (!professional) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleUpdateButtonPress = () => {
    navigation.navigate('UpdateProfileScreen', { professional });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{professional.email}</Text>
      <Text style={styles.details}>Profession: {professional.profession}</Text>
      <Text style={styles.details}>Hourly rate: {professional.hourly}</Text>
      <Button title="Update" onPress={handleUpdateButtonPress} />
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

export default ProProfile;
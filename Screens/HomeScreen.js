import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, alert, TouchableOpacity } from 'react-native';

const Welcome = ({ username }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
    </View>
  );
};

const ProfessionalsList = ({navigation}) => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
        const response = await fetch('http://192.168.2.13:3000/professionals');
        try {
          if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            setProfessionals(data);
          } else {
            console.log('Error: ', response.status);
            alert('An error occurred while retrieving professionals. Please try again later.');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred while retrieving professionals. Please try again later.');
        }
    };
    fetchProfessionals();
  }, []);
  

  const renderItem = ({ item }) => {
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { professional: item })}>
        <View style={styles.professionalContainer}>
          <Text style={styles.professionalName}>{item.email}</Text>
          <Text style={styles.professionalProfession}>{item.profession}</Text>
          <Text style={styles.professionalHourly}>Hourly rate: {item.hourly}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
    return (
    <View style={styles.professionalsListContainer}>
      <Text style={styles.professionalsListTitle}>List of professionals</Text>
      <FlatList
        data={professionals}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Welcome username={username} />
      <ProfessionalsList navigation={navigation}  />
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
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  professionalsListContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  professionalsListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  professionalContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  professionalName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  professionalProfession: {
    fontSize: 14,
    marginBottom: 5,
  },
  professionalHourly: {
    fontSize: 14,
  },
});

export default HomeScreen;

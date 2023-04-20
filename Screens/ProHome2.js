import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Welcome = ({ email }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome, {email}!</Text>
    </View>
  );
};

const ProfessionalsList = ({ navigation, email }) => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch(`http://192.168.206.155:3000/professionals?filter={"where": {"email": "${email}"}}`);
        if (response.status === 200) {
          const data = await response.json();
          setProfessionals(data);
        } else {
          console.log('Error: ', response.status);
          Alert.alert('An error occurred while retrieving professionals. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('An error occurred while retrieving professionals. Please try again later.');
      }
    };
    fetchProfessionals();
  }, [email]);

  const filteredProfessionals = professionals.filter((item) => item.email === email);

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
      <Text style={styles.professionalsListTitle}>List of Postings</Text>
      <FlatList
        data={filteredProfessionals}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const ProHome2 = ({ navigation, route }) => {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Welcome email={email} />
      <ProfessionalsList navigation={navigation} email={email} />
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('AddList')}>
          <Ionicons name="add-circle" size={32} color="#4F8EF7" />
          <Text style={styles.menuButtonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ProProfile', { email: email })}>
          <Ionicons name="person-circle-outline" size={32} color="#4F8EF7" />
          <Text style={styles.menuButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  menuBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
  },
  menuBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBarText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProHome2;

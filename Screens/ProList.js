import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ProList({ route }) {
  const { name } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from database based on email
    // Example using mock data
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.206.155:3000/professionals?email=${name}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ProList</Text>
      <View style={styles.content}>
        {data.map(item => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  item: {
    width: '100%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
  },
});

export default ProList;

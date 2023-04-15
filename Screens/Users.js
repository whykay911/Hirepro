import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Users = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await fetch('http://192.168.192.1:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        console.log(data);

        if (response.status === 200) {
          navigation.navigate('HomeScreen', { username: username });
        } else {
          alert('Invalid username or password. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while logging in. Please try again later.');
      }
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text>If you are not registered click here to <TouchableOpacity onPress={() => navigation.navigate('UserSignUp')}>
      <Text style={styles.text}>Signup</Text>
    </TouchableOpacity>
      </Text>
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
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    minWidth: 250,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Users;

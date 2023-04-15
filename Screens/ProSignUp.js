import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const ProSignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [hourly, setHourly] = useState('');

  const handleSignUp = async () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await fetch('http://192.168.192.1:3000/prosignup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, password, profession, hourly }),
          });

          const data = await response.json();
          console.log(data);

          navigation.navigate('Pro');
        } catch (error) {
          console.log(error);
        }
      } else {
        alert('Passwords do not match. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Professional Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Profession"
        onChangeText={(text) => setProfession(text)}
        value={profession}
      />
      <TextInput
        style={styles.input}
        placeholder="Hourly Rate"
        onChangeText={(text) => setHourly(text)}
        value={hourly}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ProSignUp;

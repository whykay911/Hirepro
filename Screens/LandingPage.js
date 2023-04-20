import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground source={require('./pexels-pavel-chernonogov-4025501.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>HirePro </Text>
      <Text style={styles.subtitle}> Your One-Stop Solution for Skilled Professionals  </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pro')}
      >
        <Text style={styles.buttonText}>Professionals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Users')}
      >
        <Text style={styles.buttonText}>Users</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // make the background transparent so the image shows through
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // stretch the image to fill the screen
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    fontFamily: 'Arial',
    color: '#fff', // set the text color to white so it's visible on top of the image
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    fontFamily: 'Arial',
    color: '#fff', // set the text color to white so it's visible on top of the image
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default LandingPage;

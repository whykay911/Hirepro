import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

const DetailScreen = ({ route }) => {
  const { professional } = route.params;
  const [message, setMessage] = useState('');
  const [starCount, setStarCount] = useState(0);

  const handleSend = () => {
    // code to handle sending the message
    console.log('Sending message:', message);
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{professional.email}</Text>
      <Text style={styles.details}>Profession: {professional.profession}</Text>
      <Text style={styles.details}>Hourly rate: {professional.hourly}</Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rate your experience:</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          selectedStar={(rating) => setStarCount(rating)}
          starSize={30}
          fullStarColor={'#f7c700'}
        />
      </View>

      <View style={styles.chatContainer}>
        <TextInput
          style={styles.chatInput}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  ratingText: {
    fontSize: 20,
    marginRight: 10,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DetailScreen;

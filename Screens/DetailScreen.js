import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Alert,
  
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const Tab = createBottomTabNavigator();

const HomeScreen = ({route}) => {
  const {professional} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{professional.email}</Text>
      <Text style={styles.details}>Profession: {professional.profession}</Text>
      <Text style={styles.details}>Hourly rate: {professional.hourly}</Text>
    </View>
  );
};

const AppointmentScreen = () => {
  const [message, setMessage] = useState('');
  const [appointmentTime, setAppointmentTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSend = () => {
    if (message === '' || appointmentTime === '') {
      Alert.alert('Error', 'Please fill all fields');
    } else {
      // Call your MongoDB function to send message
      sendMessage(message)
        .then(() => {
          Alert.alert('Success', 'Message sent successfully');
          setMessage('');
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });
    }
  };

  const handleBookAppointment = () => {
    if (appointmentTime === '') {
      Alert.alert('Error', 'Please select appointment time');
    } else {
      // Call your MongoDB function to book appointment
      insertAppointment(appointmentTime)
        .then(() => {
          Alert.alert('Success', 'Appointment booked successfully');
          setAppointmentTime('');
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || appointmentTime;
    setShowDatePicker(Platform.OS === 'ios');
    setAppointmentTime(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || appointmentTime;
    setShowTimePicker(Platform.OS === 'ios');
    setAppointmentTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Screen</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.chatTitle}>Chat</Text>
        <View style={styles.chatContent}>{/* Render chat messages */}</View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowDatePicker(!showDatePicker)}>
        <Text style={styles.buttonText}>Select Appointment Date</Text>
      </TouchableOpacity>

     
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTimePicker(true)}>
        <Text style={styles.buttonText}>Select Appointment Time</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={appointmentTime}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={appointmentTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={handleTimeChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailScreen = ({route}) => {
  const {professional} = route.params;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{professional}}
      />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
    </Tab.Navigator>
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: 'tomato',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chatContainer: {
    width: '80%',
    marginBottom: 16,
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatContent: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    height: 200,
    padding: 8,
  },
});

export {DetailScreen};

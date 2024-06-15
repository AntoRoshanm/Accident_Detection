import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

const MainPages = () => {
  const coordinates = [
    { latitude: '13.069247', longitude: '80.178085' },
    { latitude: '13.069650', longitude: '80.178098' },
    { latitude: '13.070073', longitude: '80.177094' },
    { latitude: '13.070428', longitude: '80.178215' },
    { latitude: '13.068939', longitude: '80.178081' },
  ];

  const getRandomCoordinates = () => {
    const randomIndex = Math.floor(Math.random() * coordinates.length);
    return coordinates[randomIndex];
  };

  const [location, setLocation] = useState(getRandomCoordinates());

  const CarAssidentDetection = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  const AlertingMessage = () => {
    return (
      <View style={styles.carconrenrbox}>
        <MaterialIcons name="car-crash" size={40} color="#5891f1" />
        <Text style={styles.fontcarcrash}>Car crash detected</Text>
        <View>
          <Image
            source={require('../Images/Accident.png')}
            style={styles.accidentimagesize}
          />
        </View>
        <TouchableOpacity
          style={styles.carAccidentButton}
          onPress={CarAssidentDetection}
        >
          <Text style={styles.carAccidentButtonText}>
            Car Accident Location
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLocation(getRandomCoordinates());
    }, 5000); // Change location every 5 seconds or as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.carcontentView}>
        {AlertingMessage()}
        <View style={styles.carconrenrbox}>
          <MaterialIcons name="car-crash" size={40} color="silver" />
          <Text style={styles.fontcarcrashNotifiaction}>
            Notification Center
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carcontentView: {
    width: '95%',
    height: '93%',
    backgroundColor: 'whitesmoke',
    marginTop: -20,
    borderRadius: 20,
  },
  carconrenrbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '95%',
  },
  accidentimagesize: {
    width: 350,
    height: 200,
    marginTop: -10,
  },
  fontcarcrash: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500',
    marginTop: 20,
  },
  fontcarcrashNotifiaction: {
    fontSize: 24,
    color: 'silver',
    fontWeight: '500',
    marginTop: 20,
  },
  carAccidentButton: {
    width: '80%',
    height: 70,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  carAccidentButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainPages;

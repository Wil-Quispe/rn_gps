import {View, Text, PermissionsAndroid, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const Home = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [name, setName] = useState();
  const [username, setUsername] = useState();

  const signup = () => {
    console.log({latitude, longitude, name, username});
  };

  useEffect(() => {
    const requestLocation = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'location Access Required',
            message: 'this app needs to access your location',
            buttonPositive: 'Accept',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
              console.log({position});
            },
            error => console.log('error denied'),
            {enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000},
          );
        }
      } catch (err) {
        console.log({err});
      }
    };
    requestLocation();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text>Nombre </Text>
        {/* <TextInput onChangeText={setName} value={name} /> */}
      </View>
      <View>
        <Text>Username </Text>
        {/* <TextInput onChangeText={() => setUsername} value={username} /> */}
      </View>
      <Button title="Registrarse" onPress={signup} />
    </View>
  );
};

export default Home;

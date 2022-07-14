import {View, Text, PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
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
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import {View, Text, Dimensions} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [cords, setCords] = useState({});

  const getCord = async () => {
    await Geolocation.getCurrentPosition(
      info => {
        setCords({
          lat: info.coords.latitude,
          long: info.coords.longitude,
        });
        console.log(info);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
      },
    );
  };
  useEffect(() => {
    getCord()
    console.log(cords)
  }, []);

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: cords.lat,
          longitude:cords.long,
        
        }}
        style={{width: windowWidth, height: windowHeight}}
      />
    </View>
  );
};

export default App;

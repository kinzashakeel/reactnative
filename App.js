import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400
  },
  widegts:{
    resizeMode: 'cover',
    width: 360,
    height: 200
  },
  foot:{
    resizeMode: 'cover',
    width: 360,
    height: 200
  }
});


const DisplayAnImage = () => {
  return (
  <View>

  <Image
        style={styles.container}
        source={
          require('C:/Users/Hp/OneDrive/Documents/react-native/AwesomeProject/main.png')
        }
      />
    <Image
        style={styles.widegts}
        source={
          require('C:/Users/Hp/OneDrive/Documents/react-native/AwesomeProject/widegts.png')
        }
      />
      <Image
        style={styles.foot}
        source={
          require('C:/Users/Hp/OneDrive/Documents/react-native/AwesomeProject/foot.png')
        }
      />
  </View>
  );
};

export default DisplayAnImage;
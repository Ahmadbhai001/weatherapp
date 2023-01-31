import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.touch}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={styles.img}
        imageStyle={{borderRadius: 16}}
      />
      <View style={styles.capContainor}>
        <Text style={styles.caption}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
const styles = StyleSheet.create({
  img: {
    height: deviceHeight / 5,
    width: deviceWidth / 2 - 50,
  },
  touch: {
    marginHorizontal: 15,
  },
  caption: {
    fontSize: 28,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  capContainor: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

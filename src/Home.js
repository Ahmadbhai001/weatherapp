import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
const Home = props => {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'Pakistan',
      image: require('../asse/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../asse/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../asse/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../asse/images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../asse/images/image7.jpg'),
    },
  ];
  return (
    <View>
      <ImageBackground
        style={styles.img2}
        source={require('../asse/images/image2.jpg')}
        imageStyle={{opacity: 0.7, backgroundColor: 'black'}}
      />
      <View style={styles.mane}>
        
        <View style={styles.headings}>
          <Text style={styles.head1}>Hello Weather</Text>
          <Text style={styles.head2}>Enter By Pakistan Citys Name</Text>
        </View>
        <View style={styles.inputcontainor}>
          <TextInput
            value={city}
            onChangeText={val => setCity(val)}
            placeholder="Search City"
            placeholderTextColor="white"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Details', {name: city})}>
            <Icon name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.location}>Famous places Weather</Text>
        <FlatList
          horizontal
          data={cities}
          renderItem={({item}) => (
            <Cards
              name={item.name}
              image={item.image}
              navigation={props.navigation}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  img2: {
    width: deviceWidth,
    height: deviceHeight,
  },
  mane: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  head1: {
    fontSize: 40,
    color: 'white',
  },
  head2: {
    color: 'white',
    fontSize: 15,
  },
  headings: {
    paddingHorizontal: 20,
    marginTop: 100,
  },
  inputcontainor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  input: {
    // backgroundColor: '#000000',
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  location: {
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 10,
    marginTop: 210,
    marginBottom: 5,
    fontStyle:'italic'
  },
});

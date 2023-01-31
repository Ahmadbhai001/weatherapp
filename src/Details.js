import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import {API_KEY} from './Constants';

const Details = props => {
  const [data, setData] = useState();

  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.valu}>{value}</Text>
    </View>
  );
  return (
    <View>
      <ImageBackground
        style={styles.img2}
        source={require('../asse/images/image1.jpg')}
        imageStyle={{opacity: 0.7, backgroundColor: 'black'}}
      />
      <View style={styles.mane}>
        {data ? (
          <View style={styles.container}>
            <View>
              <Text style={styles.Tex1}>{name}</Text>
              <Text style={styles.Tex2}>{data['weather'][0]['main']}</Text>
            </View>
            <Text style={styles.Tex3}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>
            <View>
              <Text style={styles.Tex4}>Weather Details</Text>
              <View style={{width: deviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
  },
  img2: {
    width: deviceWidth,
    height: deviceHeight,
  },
  mane: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  valu: {
    color: 'white',
    fontSize: 22,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: deviceHeight - 100,
  },
  Tex1: {
    color: 'white',
    fontSize: 40,
  },
  Tex2: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  Tex3: {
    color: 'white',
    fontSize: 64,
  },
  Tex4: {
    color: 'white',
    fontSize: 22,
    marginBottom: 16,
  },
});

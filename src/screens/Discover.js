import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';
import {IMAGES} from '../assests';
import Carousel from 'react-native-snap-carousel';
import {CarouselCards} from '../components';
import {makeHttp} from '../api';
var res;
const Discover = () => {
  useEffect(() => {
    const fetchGames = async () => {
      var res = await makeHttp({
        method: 'get',
        endpoint: 'Freegames/getFreeGames',
      });
      console.log(res);
    };
    fetchGames();
  }, []);
  if (res === undefined) {
    return (
      <SafeAreaView style={styles.container2}>
        <Text>"asd"</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container2}>
      <CarouselCards />
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end'},
  header: {color: 'white'},
  tinyLogo: {width: 50, height: 50, alignSelf: 'center', marginBottom: 20},
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});

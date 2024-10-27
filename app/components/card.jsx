import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {card, options, person} from '../assets/images';

function Card(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={person} style={styles.personImage} />
          <View style={styles.texts}>
            <Text style={styles.title}>Woman walks down a Tokyo...</Text>
            <Text style={styles.name}>Brandon Etter</Text>
          </View>
        </View>
        <Image source={options} style={styles.options} />
      </View>

      <Image source={card} style={styles.card} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  personImage: {width: 50, height: 50, borderRadius: 10, marginRight: 10},
  card: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    borderRadius: 10,
    margin: 'auto',
    marginTop: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 17,
  },
  name: {
    color: '#CDCDE0',
    fontSize: 17,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
  },
  options: {
    width: 20,
    height: 20,
  },
});
export default Card;

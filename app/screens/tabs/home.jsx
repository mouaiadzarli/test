import React from 'react';
import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import {logo, logoIcon} from '../../assets/images';
import Search from '../../components/search';
import Card from '../../components/card';


function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Welcome Back </Text>
            <Text style={styles.name}>jsmastery</Text>
          </View>
          <Image source={logoIcon} style={styles.logo} />
        </View>
        <Search placeholder="Search for a video topic" />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#161622',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 17,
    marginTop: 15,
  },
  name: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: '10%',
    height: 42,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
export default Home;

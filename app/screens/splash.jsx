import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {logo, splash} from '../assets/images/index';
import BaseButton from '../components/base-button';

function Splash({navigation}): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Image source={logo} style={styles.logo} />
      <Image source={splash} style={styles.splash} />
      <Text style={styles.headerText}>
        Discover Endless Possibilities with Aora
      </Text>
      <Text style={styles.bodyText}>
        {' '}
        Where Creativity Meets Innovation: Embark on a Journey of Limitless
        Exploration with Aora
      </Text>
      <BaseButton
        onPress={() => navigation.navigate('SingUp', {name: 'SingUp'})}
        title="Continue with Email"></BaseButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#161622',
  },
  logo: {
    width: '30%',
    height: 30,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  splash: {
    width: '70%',
    height: 300,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerText: {
    marginTop: 50,
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginRight: '10%',
    textAlign: 'center',
  },
  bodyText: {
    marginTop: 20,
    color: '#ffffff',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center',
  },
});

export default Splash;

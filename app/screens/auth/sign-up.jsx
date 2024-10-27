import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {logo} from '../../assets/images';
import BaseInput from '../../components/base-input';
import BaseButton from '../../components/base-button';

function SingUp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Sign up</Text>
        <BaseInput
          title="Username"
          placeholder="Your unique username"></BaseInput>
        <BaseInput title="Email" placeholder="Your unique Email"></BaseInput>
        <BaseInput title="Password" placeholder="Your Password"></BaseInput>
        <BaseButton style={styles.Button} title="Sign Up"></BaseButton>
        <Text style={styles.footerTitle}>
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('SignIn', {name: 'SignIn'})}
            style={styles.footerTitleYallow}>
            Login
          </Text>
        </Text>
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
  text: {
    fontSize: 42,
  },
  logo: {
    width: '30%',
    height: 30,
    marginTop: 50,
  },
  title: {
    marginTop: 50,
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '10%',
  },
  Button: {
    marginTop: 30,
    width: '100%',
  },
  footerTitle: {
    color: '#ffffff',
    marginTop: 30,
    margin: 'auto',
  },
  footerTitleYallow: {
    color: '#FFA101',

    fontWeight: 'bold',
  },
});
export default SingUp;

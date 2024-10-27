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

function SingIn({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Sign in</Text>

        <BaseInput title="Email" placeholder="Your unique Email"></BaseInput>
        <BaseInput title="Password" placeholder="Your Password"></BaseInput>
        <Text style={styles.forgotPassword}>Forgot password </Text>
        <BaseButton
          onPress={() => navigation.navigate('Tabs', {name: 'Tabs'})}
          style={styles.Button}
          title="Sign In"></BaseButton>
        <Text style={styles.footerTitle}>
          Don’t have an account?{' '}
          <Text style={styles.footerTitleYallow}>Signup</Text>
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
    marginTop: 20,
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
  forgotPassword: {
    color: '#ffffff',
    textAlign: 'right',
    marginTop: 15,
  },
});
export default SingIn;

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function BaseInput(props) {
  return (
    <SafeAreaView>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#7b7b8b"
        autoCorrect={false}
        keyboardType="visible-password"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    color: '#ffffff',
    marginRight: '5%',
  },
  input: {
    color: '#ffffff',
    borderColor: '#222331',
    borderWidth: 1,
    backgroundColor: '#222331',
    marginTop: 10,
    borderRadius: 7,
    padding: 17,
  },
});
export default BaseInput;

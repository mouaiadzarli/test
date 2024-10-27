import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';


function BaseButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer , props.style]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFA101',
    width:'90%',
    margin:"auto",
    borderRadius:5
  },
  buttonText: {
    color: '#161622',
    fontSize: 17,
    padding:20,
    margin:"auto",
    fontWeight: 'bold',
  },
});
export default BaseButton;

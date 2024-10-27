import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Search(props) {
  return (
    <SafeAreaView style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#CDCDE0"
        autoCorrect={false}
        keyboardType="visible-password"
      />
      <Icon style={styles.icon} name="search" size={30} color="#ffffff" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222331',
    marginTop: 20,
    borderRadius: 7,
    borderColor: '#222331',
    borderWidth: 1,
  },

  input: {
    color: '#ffffff',
    backgroundColor: '#222331',
    padding: 17,
    flex: 1,
  },
  icon: {
    marginRight: 20,
    fontSize: 20,
  },
});
export default Search;

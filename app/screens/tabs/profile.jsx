import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {emptyState, logout, person} from '../../assets/images';
import BaseButton from '../../components/base-button';

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop:25,
          marginRight:25,
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}>
        <Image source={logout}  style={{ width: 24, height: 24 }} // Image on the left 
        />
      </View>
      <Image source={person} style={styles.person} />
      <Text style={styles.title}>jsmastery</Text>
      <View style={styles.postsViews}>
        <View>
          <Text style={styles.title}>10</Text>
          <Text style={styles.body}>Posts</Text>
        </View>
        <View>
          <Text style={styles.title}>1.2k</Text>
          <Text style={styles.body}>Views</Text>
        </View>
      </View>
      <Image source={emptyState} style={styles.emptyState} />
      <Text style={{textAlign: 'center', color: '#ffffff'}}>
        {' '}
        No Videos Found
      </Text>
      <Text style={styles.title}>No videos found for this profile</Text>
      <BaseButton onPress={() => {}} title="Back to Explore" style={{marginTop:40}}></BaseButton>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#161622',
  },
  logout: {
    width: 24,
    height: 24,
  },
  person: {
    width: 56,
    height: 56,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff9c01',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  body: {
    color: '#ffffff',
  },
  postsViews: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingRight: 120,
    paddingLeft: 120,
    paddingTop: 15,
  },
  emptyState: {
    width: 270,
    height: 216,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
export default Profile;

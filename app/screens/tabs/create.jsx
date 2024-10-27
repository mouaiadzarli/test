import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {emptyState, logoIcon, logout, person} from '../../assets/images';
import BaseButton from '../../components/base-button';
import {ScrollView} from 'react-native-gesture-handler';
import BaseInput from '../../components/base-input';
import DocumentPicker from 'react-native-document-picker';
import UploadVideo from '../../components/upload-video';
import UploadImage from '../../components/upload-image';

function Create() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Upload Video</Text>
          </View>
          <BaseInput
            title="Video Title"
            placeholder="Give your video a catchy title..."></BaseInput>
          <UploadVideo />
          <UploadImage />
          <BaseInput
            title="AI Prompt"
            placeholder="The AI prompt of your video...."></BaseInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
export default Create;

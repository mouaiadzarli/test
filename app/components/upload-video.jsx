import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import DocumentPicker from 'react-native-document-picker';
import {uploadFile} from '../assets/images';

function UploadVideo() {
  async function docPicker() {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        //by using allFiles type, you will able to pick any type of media from user device,
        //There can me more options as well
        //DocumentPicker.types.images: All image types
        //DocumentPicker.types.plainText: Plain text files
        //DocumentPicker.types.audio: All audio types
        //DocumentPicker.types.pdf: PDF documents
        //DocumentPicker.types.zip: Zip files
        //DocumentPicker.types.csv: Csv files
        //DocumentPicker.types.doc: doc files
        //DocumentPicker.types.docx: docx files
        //DocumentPicker.types.ppt: ppt files
        //DocumentPicker.types.pptx: pptx files
        //DocumentPicker.types.xls: xls files
        //DocumentPicker.types.xlsx: xlsx files
        //For selecting more more than one options use the
        //type: [DocumentPicker.types.csv,DocumentPicker.types.xls]
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
      //   this.uploadAPICall(res);//here you can call your API and send the data to that API
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('error -----', err);
      } else {
        throw err;
      }
    }
  }
  return (
    <SafeAreaView>
      <Text style={styles.title}>Upload Video</Text>

      <View style={styles.upload}>
        <TouchableOpacity onPress={() => docPicker()} style={styles.uploadView}>
          <Image source={uploadFile} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  upload: {
    backgroundColor: '#222432',
    margin: 'auto',
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
  },

  title: {
    color: '#ffffff',
    fontSize: 17,
    marginTop: 15,
  },
  icon: {
    margin: 'auto',
  },
  uploadView: {
    padding: 80,
  },
});
export default UploadVideo;

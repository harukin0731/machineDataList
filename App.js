import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//import AutoHeightImage from 'react-native-auto-height-image';
import xmlToJSON from 'xmltojson';
import * as Linking from "expo-linking";
import { csvText_to_json } from './util/csvText_to_json';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
      <Text>testApp</Text>
      <Image style={{height: 200,width: 200}} source={require("./assets/Harukin-main.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

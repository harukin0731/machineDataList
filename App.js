import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { Button, BottomSheet, ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import AutoHeightImage from 'react-native-auto-height-image';
import xmlToJSON from 'xmltojson';
import * as Linking from "expo-linking";
import { csvText_to_json } from './util/csvText_to_json';
import { useState } from 'react';

export default function App() {

  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];
  
  

  return (
    <SafeAreaProvider style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',width:"100%"}}>
      <View style={{width:"100%",height:60,backgroundColor:"#00E8E3",flexDirection:"row"}}>
        <View style={{flex:1}} />
        <Text>てすと</Text>
        <View style={{flex:1}} />
      </View>
        <View style={{flex:1}} />
      <Text>testApp</Text>
      <Button title="Hello World" onPress={()=>setIsVisible(true)} />
      <Image style={{height: 200,width: 200}} source={require("./assets/Harukin-main.png")} />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

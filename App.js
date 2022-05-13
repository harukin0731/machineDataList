import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
//import { Button, BottomSheet, ListItem, Header } from 'react-native-elements';

import {Card,CardActions,CardContent,Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, SwipeableDrawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';


import Icon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from '@mui/icons-material/Delete';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import DehazeIcon from '@mui/icons-material/Dehaze';
//import AutoHeightImage from 'react-native-auto-height-image';
import xmlToJSON from 'xmltojson';
import * as Linking from "expo-linking";
import { csvText_to_json } from './util/csvText_to_json';
import { useState } from 'react';

import { Button as HoloButton } from "./util/HoloUX/button";
import { Switch4 } from './util/HoloUX/4.0switch';

export default function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [testSwitch, setTestSwitch] = useState(false);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',width:"100%"}}>
      <View style={{width:"100%",height:60,backgroundColor:"#00E8E3",flexDirection:"row"}}>
        <View style={{flex:1}} />
        <Text>てすと</Text>
        <View style={{flex:1}} />
        <IconButton aria-label="delete" size="large" onClick={()=>setDrawer(true)}>
          <DehazeIcon fontSize="inherit" />
        </IconButton>
      </View>
      <Text>testApp</Text>
      <View style={{width:500,height:500,backgroundColor:"black"}}>
        <HoloButton>
          てすと
        </HoloButton>  
        <HoloButton>
          ほげほげ
        </HoloButton>  
        <Switch4 flag={testSwitch} onPress={()=>setTestSwitch(!testSwitch)}>
          てすとスイッチ
        </Switch4>
      </View>
      
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            test
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        <View style={{flex:1}} />
      <Button variant="outlined" onClick={()=>setIsVisible(true)}>
        Open alert dialog
      </Button>
      <Image style={{height: 200,width: 200}} source={require("./assets/Harukin-main.png")} />{/* 
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
      </BottomSheet> */}
      <Dialog
        open={isVisible}
        onClose={()=>setIsVisible(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ほげほげ
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふがふが
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setIsVisible(false)}>にゃーん</Button>
          <Button onClick={()=>setIsVisible(false)} autoFocus>ほげふが</Button>
        </DialogActions>
      </Dialog>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={()=>setDrawer(false)}
        onOpen={()=>setDrawer(true)}
      >{list("right")}
      </SwipeableDrawer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

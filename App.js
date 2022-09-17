import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
//import { Button, BottomSheet, ListItem, Header } from 'react-native-elements';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";

import Icon from "react-native-vector-icons/FontAwesome";
import DeleteIcon from "@mui/icons-material/Delete";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import DehazeIcon from "@mui/icons-material/Dehaze";
//import AutoHeightImage from 'react-native-auto-height-image';
import xmlToJSON from "xmltojson";
import * as Linking from "expo-linking";
import { csvText_to_json } from "./util/csvText_to_json";
import { useState } from "react";

import { Button as HoloButton } from "./util/HoloUX/button";
import { Switch4 } from "./util/HoloUX/4.0switch";
import { Switch44 } from "./util/HoloUX/4.4switch";
import { HorizonalBar } from "./util/HoloUX/horizonalBar";
import { TitleBar } from "./util/HoloUX/titleBar";
import { Slider } from "./util/HoloUX/slider";
import { AllInbox, ArrowBack } from "@mui/icons-material";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [testSwitch1, setTestSwitch1] = useState(false);
  const [testSwitch2, setTestSwitch2] = useState(false);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
        {["All mail", "Trash", "Spam"].map((text, index) => (
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
    <SafeAreaProvider
      style={{
        backgroundColor: "#F2F2F2",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView
        style={{ width: "100%", height: 300, backgroundColor: "#F2F2F2" }}
      >
        <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }} />
          <View
            style={{
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              paddingTop: 30,
            }}
          >
            <Image
              source={require("./assets/Harukin-main.png")}
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
                margin: 10,
              }}
            />
            <Text style={{ fontSize: 50, textAlign: "center" }}>
              Welcome to harukin Machine Data List System
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 30 }}>
              ここははるきんの秘密基地。はるきんの持ってるよくわからないハードウェア達をご紹介。
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 30 }}>
              現在作成中....
            </Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>

        <SwipeableDrawer
          anchor={"right"}
          open={drawer}
          onClose={() => setDrawer(false)}
          onOpen={() => setDrawer(true)}
        >
          {list("right")}
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor={"bottom"}
          open={bottomSheet}
          onClose={() => setBottomSheet(false)}
          onOpen={() => setBottomSheet(true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </ScrollView>
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#00E8E3",
          flexDirection: "row",
          boxShadow: "0px -1px 12px 5px #00000029",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => Linking.openURL("https://haruk.in/")}
        >
          <ArrowBack fontSize="inherit" />
        </IconButton>
        <Text style={{ flex: 1, textAlign: "center" }}>トップページ</Text>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setBottomSheet(true)}
        >
          <AllInbox fontSize="inherit" />
        </IconButton>
        <Text style={{ flex: 1, textAlign: "center" }}>←ここからはじめる</Text>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setDrawer(true)}
        >
          <DehazeIcon fontSize="inherit" />
        </IconButton>
      </View>
    </SafeAreaProvider>
  );
}

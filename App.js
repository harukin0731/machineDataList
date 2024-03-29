import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
//import { Button, BottomSheet, ListItem, Header } from 'react-native-elements';

import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ActionSheet, {
  useScrollHandlers,
  ActionSheetRef,
  SheetProps,
} from "react-native-actions-sheet";
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
import Markdown from "react-native-markdown-renderer";

import Icon from "react-native-vector-icons/FontAwesome";
import DeleteIcon from "@mui/icons-material/Delete";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import DehazeIcon from "@mui/icons-material/Dehaze";
//import AutoHeightImage from 'react-native-auto-height-image';
import xmlToJSON from "xmltojson";
import * as Linking from "expo-linking";
import { csvText_to_json } from "./util/csvText_to_json";
import { useEffect, useState, useRef } from "react";

import { Button as HoloButton } from "./util/HoloUX/button";
import { Switch4 } from "./util/HoloUX/4.0switch";
import { Switch44 } from "./util/HoloUX/4.4switch";
import { HorizonalBar } from "./util/HoloUX/horizonalBar";
import { TitleBar } from "./util/HoloUX/titleBar";
import { Slider } from "./util/HoloUX/slider";
import { AllInbox, ArrowBack, Close } from "@mui/icons-material";

import { styles } from "./styles/styles";
import { DeviceSelectSheet } from "./components/DeviceSelectSheet";
const copy = `# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;
export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [testSwitch1, setTestSwitch1] = useState(false);
  const [testSwitch2, setTestSwitch2] = useState(false);
  const [md, setMD] = useState("");
  const [deviceList, setDeviceList] = useState([]);
  const [deviceListTag, setDeviceListTag] = useState([]);
  const acRef = useRef(null);
  const scrollHandlers = useScrollHandlers("scrollview-1", acRef);
  const [device, setDevice] = useState(undefined);
  useEffect(() => {
    fetch("https://nexcloud.haruk.in/s/LTFeAq22PgXy5ms/download/mainList.csv", {
      mode: "cors",
    })
      .then((d) => d.text())
      .then((d) => csvText_to_json(d))
      .then(setDeviceList);
  }, []);
  useEffect(() => {
    setDeviceListTag([
      "All",
      ...new Set(
        deviceList
          .map((d) => d.type)
          .join("/")
          .split("/")
      ),
    ]);
  }, [deviceList]);
  useEffect(() => {
    fetch(
      device
        ? device.article
        : "https://nexcloud.haruk.in/s/Xxnw4PMBQYceErg/download/main.md",
      {
        mode: "cors",
      }
    )
      .then((d) => d.text())
      .then((d) => setMD(d));
  }, [device]);
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
        style={{ width: "100%", height: 300, backgroundColor: "#2E3436" }}
      >
        <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }} />
          <View
            style={{
              width: "100%",
              maxWidth: 1000,
              alignContent: "center",
              alignItems: "center",
              padding: 10,
              marginTop: 40,
            }}
          >
            {/* 
            <Image
              source={require("./assets/Harukin-main.png")}
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
                margin: 10,
              }}
            />
            <Text style={{ fontSize: 50, textAlign: "center", color: "white" }}>
              Welcome to harukin Machine Data List System
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                paddingTop: 30,
                color: "white",
              }}
            >
              ここははるきんの秘密基地。はるきんの持ってるよくわからないハードウェア達をご紹介。
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                paddingTop: 30,
                color: "white",
              }}
            >
              ここの項目はnextcloudを経由して自動で更新されます。
            </Text>
            <View style={{ height: 20 }} /> */}

            <Markdown style={styles}>{md}</Markdown>
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
          onScroll={() => console.log("scroll")}
          style={{ height: "80vh" }}
        ></SwipeableDrawer>
      </ScrollView>
      <DeviceSelectSheet
        acRef={acRef}
        deviceListTag={deviceListTag}
        deviceList={deviceList}
        scrollHandlers={scrollHandlers}
        control={{ device, setDevice }}
      />
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
          onClick={() => {
            if (device) {
              setDevice(undefined);
            } else {
              window.parent.postMessage("doCloseAction", "*");
              console.log("アプリを閉じて前に戻る");
            }
          }}
        >
          {!!device ? (
            <ArrowBack fontSize="inherit" />
          ) : (
            <Close fontSize="inherit" />
          )}
        </IconButton>
        <Text style={{ flex: 1, textAlign: "center" }}>
          {device ? device.name : "トップページ"}
        </Text>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={acRef.current?.setModalVisible}
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

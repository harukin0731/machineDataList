import React, { useState } from "react";
import { Linking } from "react-native";
import ActionSheet, {
  useScrollHandlers,
  ActionSheetRef,
  SheetProps,
} from "react-native-actions-sheet";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
//import { Button, BottomSheet, ListItem, Header } from 'react-native-elements';

import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
export const DeviceSelectSheet = (props) => {
  const { acRef, deviceListTag, deviceList, scrollHandlers } = props;
  console.log(acRef);
  const [isScrollTop, setIsScrollTop] = useState(true);
  return (
    <ActionSheet ref={acRef} CustomHeaderComponent={() => {}}>
      <View
        //key={currentStation}
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          borderColor: "dark",
          borderWidth: 1,
        }}
      >
        <View style={{ height: 26, width: "100%" }}>
          <View
            style={{
              height: 6,
              width: 45,
              borderRadius: 100,
              backgroundColor: "#f0f0f0",
              marginVertical: 10,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <BasicTabs
        deviceListTag={deviceListTag}
        deviceList={deviceList}
        scrollState={{ isScrollTop, setIsScrollTop }}
        scrollHandlers={scrollHandlers}
      />
    </ActionSheet>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs(props) {
  const { deviceList, deviceListTag, scrollState, scrollHandlers } = props;
  const { isScrollTop, setIsScrollTop } = scrollState;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <View style={{ height: "80vh" }}>
      <ScrollView
        onScroll={(event) => {
          //console.log(event);
          setIsScrollTop(event.nativeEvent.contentOffset.y === 0);
        }}
      >
        <View
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              wp("100%") > 1200
                ? "1fr 1fr 1fr 1fr 1fr"
                : wp("100%") > 1000
                ? "1fr 1fr 1fr 1fr"
                : wp("100%") > 800
                ? "1fr 1fr 1fr"
                : wp("100%") > 600
                ? "1fr 1fr"
                : "1fr",
            height: "auto",
          }}
        >
          {deviceList
            .filter((d) => {
              if (deviceListTag[value] == "All") return true;
              return d.type.indexOf(deviceListTag[value]) == -1 ? false : true;
            })
            .map((d) => (
              <MultiActionAreaCard data={d} />
            ))}
        </View>
      </ScrollView>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        {deviceListTag.map((value, index) => {
          return <Tab label={value} {...a11yProps(index)} />;
        })}
      </Tabs>
    </View>
  );
}

export function MultiActionAreaCard(props) {
  const { data } = props;
  console.log(data);
  return (
    <View>
      <Card style={{ margin: 10 }} onClick={() => console.log("hoge")}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={data.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Visit
          </Button>
        </CardActions>
      </Card>
    </View>
  );
}

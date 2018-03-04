import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import NotificationRow from "./NotificationRow";
import { notificationData } from "../../sampleData";

const styleSheet = StyleSheet.create({
  listWrapper: {
    flex: 1,
    width: "100%",
  }
});

const NotificationList = ({ styles }) => (
  <ScrollView style={[styleSheet.listWrapper, styles]}>
    {notificationData.map((props, index) => <NotificationRow {...props} key={index} />)}
  </ScrollView>
);

export default NotificationList;

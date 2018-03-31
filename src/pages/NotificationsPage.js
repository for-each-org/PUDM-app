import React from "react";
import { View, StyleSheet } from "react-native";

import NotificationList from "../components/NotificationList";

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const NotificationsPage = () => (
  <View style={styleSheet.container}>
    <NotificationList />
  </View>
);

export default NotificationsPage;

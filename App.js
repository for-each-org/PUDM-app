import React from "react";
import { StyleSheet, View } from "react-native";

import NotificationList from "./src/components/NotificationList";

const styleSheet = StyleSheet.create({
  header: {
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styleSheet.container}>
    <View style={styleSheet.header} />
    <NotificationList />
  </View>
);

export default App;

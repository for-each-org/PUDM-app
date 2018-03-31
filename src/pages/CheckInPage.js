import React from "react";
import { View, StyleSheet } from "react-native";

import CheckInList from "../components/CheckInList";

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CheckInPage = () => (
  <View style={styleSheet.container}>
    <CheckInList />
  </View>
);

export default CheckInPage;

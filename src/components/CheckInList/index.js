import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { userData } from "../../sampleData";

const styleSheet = StyleSheet.create({
  listWrapper: {
    flex: 1,
    width: "100%",
  },
});

const CheckInList = ({ styles }) => (
  <ScrollView style={[styleSheet.listWrapper, styles]}>
    <Text>Implement Check-In List</Text>
  </ScrollView>
);

export default CheckInList;

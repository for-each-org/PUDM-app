import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  rowWrapper: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContent: {
    fontSize: 14,
    fontWeight: "bold",
  },
  secondaryContent: {
    fontSize: 10,
    color: "#666666",
  },
  metaRow: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#666666",
  }
});

const CheckInUserRow = ({ name, email, bag, checkIn, styles }) => (
  <View style={[styleSheet.rowWrapper, styles]}>
    <View>
      <Text style={styleSheet.mainContent}>
        {name}
      </Text>
      <Text style={styleSheet.secondaryContent}>
        {email}
      </Text>
    </View>
    <View>
      <Text style={styleSheet.metaRow}>{`CheckIn: ${checkIn}`}</Text>
      <Text style={styleSheet.metaRow}>{`Bag: ${bag}`}</Text>
    </View>
  </View>
);

export default CheckInUserRow;

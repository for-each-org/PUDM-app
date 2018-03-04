import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { groupMapping } from "../../sampleData";

const styleSheet = StyleSheet.create({
  rowWrapper: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    borderColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  notifContent: {
    fontSize: 14,
    fontWeight: "bold",
  },
  notifTime: {
    fontSize: 10,
    color: "#666666",
  },
  notifMeta: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#666666",
  }
});

const NotificationRow = ({ id, time, content, group, styles }) => (
  <View style={[styleSheet.rowWrapper, styles]}>

    <View>
      <Text style={styleSheet.notifContent}>
        {content}
      </Text>
      <Text style={styleSheet.notifTime}>
        {time}
      </Text>
    </View>

    <View>
      <Text style={styleSheet.notifMeta}>{`Group: ${groupMapping[group]}`}</Text>
      <Text style={styleSheet.notifMeta}>{`Notif ID: ${id}`}</Text>
    </View>

  </View>
);

export default NotificationRow;

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

import NotificationRow from "src/components/NotificationList/NotificationRow";

const styleSheet = StyleSheet.create({
  listWrapper: {
    flex: 1,
    width: "100%",
  }
});

const NotificationList = ({ styles, notifications }) => (
  <ScrollView style={[styleSheet.listWrapper, styles]}>
    {notifications.map((props, index) => <NotificationRow {...props} key={index} />)}
  </ScrollView>
);

const mapStateToProps = state => ({
    notifications: state.notifications
})

export default connect(mapStateToProps)(NotificationList);

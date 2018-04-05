import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

import CheckInUserRow from './CheckInUserRow';

const styleSheet = StyleSheet.create({
  listWrapper: {
    flex: 1,
    width: "100%",
  },
});

const CheckInList = ({ styles, users }) => (
  <ScrollView style={[styleSheet.listWrapper, styles]}>
    {users.map((props, index) => <CheckInUserRow {...props} key={index} />)}
  </ScrollView>
);

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(CheckInList);

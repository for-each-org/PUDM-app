import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as firebase from "firebase";
import config from "src/config.js";
import CheckInUserRow from "src/components/CheckInList/CheckInUserRow";

const fb = firebase.initializeApp(config);

const styleSheet = StyleSheet.create({
  listWrapper: {
    flex: 1,
    width: "100%",
  },
});

class CheckInList extends Component {
  constructor(props) {
    super(props);
    this.state = { attendees: [] };
    this.attendeesRef = fb.database().ref().child('attendees');
  }

  componentDidMount() {
    this.getAttendees(this.attendeesRef);
  }

  componentWillMount() {
    this.getAttendees(this.attendeesRef);
  }

  getAttendees(attendeesRef) {
    attendeesRef.on('value', snap => {
      this.setState({
        attendees: [...snap.val()]
      });
    });
  }

  render() {
    return (
      <ScrollView style={[styleSheet.listWrapper, this.props.styles]}>
        {this.state.attendees.map((props, index) => <CheckInUserRow {...props} key={index} />)}
      </ScrollView>
    );
  }
}

/*
const CheckInList = ({ styles, users }) => (
  <ScrollView style={[styleSheet.listWrapper, styles]}>
    {users.map((props, index) => <CheckInUserRow {...props} key={index} />)}
  </ScrollView>
); */

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(CheckInList);

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { teamColors } from "src/sampleData";

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 70,
    marginVertical: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    backgroundColor: "#f44248"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }
});

const HomePage = ({ navigation }) => (
  <View style={styleSheet.container}>
    <Text>TODO: Implement group select for Home Page</Text>
    <TouchableOpacity
      style={styleSheet.button}
      onPress={() => navigation.navigate('SignIn')}
    >
      <Text style={styleSheet.buttonText}>Sign In as Admin</Text>
    </TouchableOpacity>
  </View>
);

export default HomePage;

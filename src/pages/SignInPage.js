import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignInPage = () => (
  <View style={styleSheet.container}>
    <Text>Implement sign-in page</Text>
  </View>
);

export default SignInPage;

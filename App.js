import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StackNavigator } from "react-navigation";

import reducers from "src/redux/reducers";

import HomePage from "src/pages/HomePage";
import SignInPage from "src/pages/SignInPage";
import NotificationsPage from "src/pages/NotificationsPage";
import CheckInPage from "src/pages/CheckInPage";

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
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }
});

const MenuItem = ({ pageName, color, goTo }) => (
  <TouchableOpacity
    style={[styleSheet.button, { backgroundColor: color }]}
    onPress={goTo}
  >
    <Text style={styleSheet.buttonText}>{pageName}</Text>
  </TouchableOpacity>
);

const TempMenu = ({ navigation }) => (
  <View style={styleSheet.container}>
    <Text style={{marginBottom: 50, fontSize: 30, }}>
      Temporary Main Menu
    </Text>
    <MenuItem
      pageName={"Home Page"}
      color={"#dd2ebd"}
      goTo={() => navigation.navigate('Home')}
    />
    <MenuItem
      pageName={"Notifications"}
      color={"#50bc32"}
      goTo={() => navigation.navigate('Notifications')}
    />
    <MenuItem
      pageName={"Check-In List"}
      color={"#0bcdef"}
      goTo={() => navigation.navigate('CheckIn')}
    />
  </View>
);

const RootStack = StackNavigator(
  {
    Menu: {
      screen: TempMenu
    },
    Home: {
      screen: HomePage
    },
    SignIn: {
      screen: SignInPage
    },
    CheckIn: {
      screen: CheckInPage
    },
    Notifications: {
      screen: NotificationsPage
    }
  },
  {
    initialRouteName: 'Menu',
  }
);

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;

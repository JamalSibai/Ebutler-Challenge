import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Post from "../screens/UserScreens/Post";
import Users from "../screens/UserScreens/Users";

import { NavigationContainer } from "@react-navigation/native";

import { HomeStack } from "./HomeStack";

import { ProfileStack } from "./ProfileStack";

export function UserBottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  console.disableYellowBox = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabsNav.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "#707070",
          showLabel: true,
          allowFontScaling: false,
          keyboardHidesTabBar: true,
          shadowColor: "#FFF",
          labelStyle: {
            fontWeight: "bold",
            fontSize: 10,
          },
        }}
      >
        <BottomTabsNav.Screen
          name="Post"
          component={Post}
          options={{
            title: "Post",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"post-outline"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <BottomTabsNav.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={"home"} size={28} color={color} />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <BottomTabsNav.Screen
          name="Users"
          component={Users}
          options={{
            title: "Users",

            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"format-list-checkbox"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <BottomTabsNav.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"account-hard-hat"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </BottomTabsNav.Navigator>
    </NavigationContainer>
  );
}

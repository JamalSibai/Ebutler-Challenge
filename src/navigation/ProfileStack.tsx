import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/UserScreens/Profile";
import EditImage from "../screens/UserScreens/EditImage";
import EditName from "../screens/UserScreens/EditName";
import EditPassword from "../screens/UserScreens/EditPassword";
import EditPhone from "../screens/UserScreens/EditPhone";

import { colors } from "../constants/palette";

export function ProfileStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <RootStackNav.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <RootStackNav.Screen
        name="Edit Image"
        component={EditImage}
        options={{
          title: "Edit Image",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <RootStackNav.Screen
        name="Edit Name"
        component={EditName}
        options={{
          title: "Edit Name",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <RootStackNav.Screen
        name="Change Password"
        component={EditPassword}
        options={{
          title: "Change Password",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <RootStackNav.Screen
        name="Edit Phone Number"
        component={EditPhone}
        options={{
          title: "Edit Phone Number",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </RootStackNav.Navigator>
  );
}

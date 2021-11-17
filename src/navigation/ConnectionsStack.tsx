import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Connections from "../screens/UserScreens/Connections";
import Chat from "../screens/UserScreens/Chat";

import { colors } from "../constants/palette";

export function ConnectionsStack() {
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
        name="Connections"
        component={Connections}
        options={{
          title: "Connections",
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
        name="Chat"
        component={Chat}
        options={{
          title: "Chat",
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

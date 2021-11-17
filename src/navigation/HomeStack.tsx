import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/UserScreens/Home";
import Maps from "../screens/UserScreens/Maps";
import Freelancers from "../screens/UserScreens/Freelancers";

import { colors } from "../constants/palette";
import FreelancerCard from "../components/FreelancerCard";

export function HomeStack() {
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
        name="Home"
        component={Home}
        options={{
          title: "Choose Freelancer",
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
        name="Maps"
        component={Maps}
        options={{
          title: "Maps",
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
        name="Freelancers"
        component={Freelancers}
        options={{
          title: "Freelancers",
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
        name="FreelancerCard"
        component={FreelancerCard}
        options={{
          title: "FreelancerCard",
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

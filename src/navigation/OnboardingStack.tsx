import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import login from "../screens/LoginScreen/login";

import userRegister from "../screens/RegisterScreen/userRegister";
import freelancerRegister from "../screens/RegisterScreen/freelancerRegister";
import { colors } from "../constants/palette";

export function OnboardingStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNav.Navigator>
        <RootStackNav.Screen
          name="login"
          component={login}
          options={{
            title: "Login",
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
    </NavigationContainer>
  );
}

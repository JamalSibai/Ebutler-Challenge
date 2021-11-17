import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { StackSwitcher } from "./src/navigation/StackSwitcher";
import { updateUserProfile } from "./src/redux/slices/userSlice";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <StackSwitcher />
    </Provider>
  );
};

export default App;

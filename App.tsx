import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, AppState } from "react-native";
import { Provider } from "react-redux";
import { StackSwitcher } from "./src/navigation/StackSwitcher";
import { store } from "./src/redux/store";
import { deleteUser } from "./src/redux/slices/userSlice";

const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener("change", Handler);
  }, []);

  const Handler = (nextAppState) => {
    appState.current = nextAppState;
    if (appState.current == "inactive" || appState.current == "background") {
      console.log(appState.current);
      setTimeout(function () {
        store.dispatch(deleteUser());
      }, 3600000);
    } else {
      return;
    }
  };

  return (
    <Provider store={store}>
      <StackSwitcher />
    </Provider>
  );
};

export default App;

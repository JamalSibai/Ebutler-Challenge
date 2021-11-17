import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";

import { ScrollView } from "react-native-gesture-handler";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { colors } from "../../constants/palette";
import EmptyState from "../../components/EmptyState";
import DetailedOrder from "../../components/detailedOrder";

export default function Details({ navigation, route }) {
  const data = route.params.items;
  const user = useSelector((state) => state?.user);

  return data ? (
    <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      <DetailedOrder props={data} />
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import axios from "axios";
import { useSelector } from "react-redux";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { colors } from "../constants/palette";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function FreelancerCard({ props }) {
  const user = useSelector((state) => state?.user);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerbox}>
            <Image style={styles.profileImage} source={{ uri: props.avatar }} />
            <View>
              <Text style={styles.name}>{props.name}</Text>

              <Text style={{ paddingLeft: 18 }}>email: {props.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  box: {
    marginTop: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    paddingTop: 10,
  },
  innerbox: {
    flexDirection: "row",
  },
  profileImage: {
    width: 150,
    height: 100,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 0.3,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    // marginTop: 5,
    marginLeft: -40,
  },
  name: {
    fontSize: 25,
    width: 120,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#000",
    flex: 0.7,
    paddingLeft: 5,
  },
  rating: {
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    color: "#000",
    flex: 0.5,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280,
    marginTop: -50,
    // borderRadius: 30,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: "#000",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

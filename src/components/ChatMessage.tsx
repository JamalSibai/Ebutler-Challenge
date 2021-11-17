import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function chatMessage({ navigation, props }) {
  const [data, setData] = useState({ props });
  const user = useSelector((state) => state?.user);
  console.log(data.props.message);

  return data.props.sender_id == user.userProfile.uid ? (
    <View style={styles.formContentRight}>
      <View style={styles.notificationBoxUser}>
        <Text style={styles.nameUser}>{data.props.message}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.formContent}>
      <View style={styles.notificationBox}>
        <Text style={styles.name}>{data.props.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  formContentRight: {
    flexDirection: "row",
    marginTop: 10,
    // textAlign: "right",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderRadius: 10,
  },
  notificationBoxUser: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#1D71B5",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    alignSelf: "center",
    marginRight: 10,
    maxWidth: 300,
  },
  nameUser: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F0F0F0",
    marginLeft: 10,
    alignSelf: "center",
    marginRight: 10,
    maxWidth: 300,
  },
});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { store } from "../../redux/store";
import { updateFreelancerSearch } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
import { colors } from "../../constants/palette";

export default function Home({ navigation }) {
  const user = useSelector((state) => state?.user);

  const Maps = () => {
    navigation.navigate("Maps");
  };
  const UsersMap = () => {
    navigation.navigate("UsersMap");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          padding: 10,
        }}
      >
        <Text> Google Maps </Text>
      </View>
      <View style={styles.pickerView}>
        <Text style={{ color: "#585858", fontSize: 15 }}>Location: </Text>
        <View style={{ borderWidth: 1 }}>
          <TouchableOpacity onPress={Maps}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.TextInput}>Appointment Location</Text>
              <View style={{ paddingTop: 5 }}>
                <MaterialCommunityIcons
                  name={"menu-right"}
                  size={28}
                  color="grey"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.fabookButton]}
          onPress={UsersMap}
        >
          <View style={styles.socialButtonContent}>
            <Text style={styles.loginText}>Find Users</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  picker: {
    marginVertical: 20,
    width: 300,
    borderColor: "#666",
    alignItems: "center",
  },
  pickerView: {
    width: 300,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderColor: "#666",
  },
  datepicker: {
    width: 300,

    borderColor: "#666",
  },
  TextInput: {
    backgroundColor: "white",
    color: "black",
    alignSelf: "center",
    width: 260,
    padding: 10,
    height: 50,
    fontSize: 16,
  },
  labelText: {
    marginLeft: 0,

    marginTop: 10,
    marginBottom: 2,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: colors.blue,
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

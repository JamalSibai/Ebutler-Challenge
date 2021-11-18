import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { colors } from "../../constants/palette";

export default function Post({ navigation }) {
  const [newName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const Post = async () => {
    try {
      const res = await axios.post(
        `https://6176555a03178d00173dab77.mockapi.io/users`,
        {
          name: newName,
          lastName: lastName,
          email: email,
        }
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 200, borderWidth: 1 }}>
        <Text style={styles.nameTxt}> Post </Text>
        <TextInput
          style={styles.nameTxt}
          placeholder="First Name"
          placeholderTextColor="grey"
          onChangeText={(Name) => setName(Name)}
        />
        <TextInput
          style={styles.nameTxt}
          placeholder="Last Name"
          placeholderTextColor="grey"
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <TextInput
          style={styles.nameTxt}
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={(Email) => setEmail(Email)}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={Post}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Post</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  nameTxt: {
    marginLeft: 35,
    fontWeight: "700",
    color: "#222",
    fontSize: 20,
    width: 300,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,

    borderColor: "#666",
    alignItems: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280,
    marginTop: -50,
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

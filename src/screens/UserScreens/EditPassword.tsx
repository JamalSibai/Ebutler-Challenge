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
import { store } from "../../redux/store";
import { updateEditingProfile } from "../../redux/slices/userSlice";
import { colors } from "../../constants/palette";

export default function EditPassword({ navigation }) {
  const [newPassword, setNewPassword] = useState("");
  const user = useSelector((state) => state?.user);

  const editPassword = async () => {
    if (newPassword.length < 4) {
      return alert("Password should be longer than 3 characters");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/edit-password`,
        {
          password: newPassword,
        },
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
        alert("Password Changed");
        store.dispatch(
          updateEditingProfile({
            editingProfile: {
              edited: newPassword,
            },
          })
        );
        navigation.pop();
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
        <Text style={styles.nameTxt}> Change Your Password </Text>
        <TextInput
          style={styles.nameTxt}
          placeholder="Edit Password"
          placeholderTextColor="grey"
          onChangeText={(Password) => setNewPassword(Password)}
          secureTextEntry={true}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={editPassword}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Edit</Text>
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

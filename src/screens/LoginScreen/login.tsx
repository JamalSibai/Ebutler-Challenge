import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { updateEditingProfile } from "../../redux/slices/userSlice";
import { updateDoneFreelancer } from "../../redux/slices/userSlice";
import { updateFreelancerSearch } from "../../redux/slices/userSlice";
import { updateChangeDate } from "../../redux/slices/userSlice";
import { updateUserProfile } from "../../redux/slices/userSlice";
import { store } from "../../redux/store";
import { colors } from "../../constants/palette";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const login = async () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return alert("Enter Valid Email");
    }
    if (password == "") {
      return alert("Enter Password");
    } else if (password.length < 6) {
      return alert("Enter Valid Password");
    }

    for (let i = 0; i < users.length; i++) {
      if (email == users[i][0]) {
        if (password == users[i][1]) {
          store.dispatch(
            updateFreelancerSearch({
              freelancerSearch: {
                latitude: "",
                longitude: "",
              },
            })
          );
          store.dispatch(
            updateChangeDate({
              changeDate: {
                change: "adddate",
              },
            })
          );
          store.dispatch(
            updateDoneFreelancer({
              DoneFreelancer: {
                Done: "data.id",
              },
            })
          );
          store.dispatch(
            updateEditingProfile({
              editingProfile: {
                edited: "newName",
              },
            })
          );

          store.dispatch(
            updateUserProfile({
              userProfile: {
                uid: i,
                email: email,
                Name: "res.data.user.name",
                profileImage: "res.data.user.image",
                UserType: "res.data.user.user_type",
                token:
                  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmx1ZWNhbGxlci50a1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNzE0OTI2NCwiZXhwIjoxNjM3NzU0MDY0LCJuYmYiOjE2MzcxNDkyNjQsImp0aSI6ImFKOHRBNUxIWHdQSnNSRXYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.pFD2emIgmJoR9JWjvHDVuKjfmw0UGQvbcym0hlxN5GY",
              },
            })
          );
          return;
        } else {
          console.log("alert");
          return alert("wrong password");
        }
      }
    }
    const update = [...users, [email, password]];
    await AsyncStorage.setItem("users", JSON.stringify(update));
    getusers();

    return alert("added");
  };

  const getusers = async () => {
    // await AsyncStorage.setItem(
    //   "users",
    //   JSON.stringify([["jamal", "password"]])
    // );
    const user = await AsyncStorage.getItem("users");
    console.log(user);
    setUsers(JSON.parse(user));
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require("../../../assets/white.jpg")}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(email) => setEmail(email)}
        />
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://img.icons8.com/flat_round/40/000000/secured-letter.png",
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(password) => setPassword(password)}
        />
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://img.icons8.com/color/40/000000/password.png",
          }}
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={login}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  buttonContainerRegister: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    borderRadius: 30,
  },
  btnByRegister: {
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: colors.blue,

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "#000",
  },
  btnTextRegister: {
    color: colors.blue,
    fontWeight: "bold",
    marginLeft: 3,
  },
  textByRegister: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

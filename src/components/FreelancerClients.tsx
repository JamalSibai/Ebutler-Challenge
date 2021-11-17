import { StyleSheet, Text, View, Button, Image, Linking } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { updateDoneFreelancer } from "../redux/slices/userSlice";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";

export default function FreelancerClients({ navigation, props }) {
  const [data, setData] = useState(props);
  const user = useSelector((state) => state?.user);

  console.log("here");
  console.log(data);

  const location = () => {
    Linking.openURL(
      "https://maps.google.com/?q=" + data.latitude + "," + data.longitude
    );
  };
  const Done = async () => {
    console.log("in historyCard");
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/edit-appointment-status`,
        {
          appointment_id: data.id,
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
        // setData(null);
        store.dispatch(
          updateDoneFreelancer({
            DoneFreelancer: {
              Done: data.id,
            },
          })
        );
        alert("Appointment Finished");
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.innerbox}>
          <Image
            style={styles.profileImage}
            source={{ uri: data.user.image }}
          />
          <View>
            <Text style={styles.name}>{data.user.name} </Text>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 10,
                paddingBottom: 5,
              }}
            >
              <MaterialCommunityIcons
                name={"email-outline"}
                size={20}
                color={colors.blue}
              />
              <Text style={{ paddingLeft: 10 }}>{data.user.email} </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 10,
                paddingBottom: 5,
              }}
            >
              <MaterialCommunityIcons
                name={"phone-hangup-outline"}
                size={20}
                color={colors.blue}
              />
              <Text style={{ paddingLeft: 10 }}>+961 {data.user.phone} </Text>
            </View>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={{ flex: 0.5, marginHorizontal: 5 }}>
            <Button title="Location" color="#000" onPress={() => location()} />
          </View>
          <View style={{ flex: 0.5, marginHorizontal: 5 }}>
            <Button title="Done" color="green" onPress={() => Done()} />
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
    marginTop: 0,
    marginLeft: -10,
    aspectRatio: 1,
  },
  name: {
    fontSize: 25,
    marginTop: -2,
    // marginBottom: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#000",
    flex: 0.7,
  },
  rating: {
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    color: "#000",
    flex: 0.5,
  },
});

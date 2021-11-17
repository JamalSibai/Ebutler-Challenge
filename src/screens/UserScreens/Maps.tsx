import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import MapView, { Callout, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../constants/palette";

export default function Maps({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [pin, setPin] = useState({
    latitude: 33.8938,
    longitude: 35.5018,
  });
  const [data, setData] = useState([]);

  const getusers = async () => {
    const user = await AsyncStorage.getItem("users");
    setData(JSON.parse(user));
  };

  const onpress2 = async () => {
    console.log(data);
    const lat = pin.latitude;
    const lon = pin.longitude;
    data[user.userProfile.uid][2] = lat;
    data[user.userProfile.uid][3] = lon;
    console.log(data);
    await AsyncStorage.setItem("users", JSON.stringify(data));

    navigation.pop();
  };

  useEffect(() => {
    getusers();
  }, []);
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.8938,
          longitude: 35.5018,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start" + e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            console.log(pin);
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "75%",
          alignSelf: "flex-start",
        }}
      >
        <View
          style={{
            flex: 1,

            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={onpress2}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Done</Text>
            </View>
          </TouchableOpacity>
          {/* <Button color="#000" title={"okay"} onPress={clickable} /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,

    zIndex: 0,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
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

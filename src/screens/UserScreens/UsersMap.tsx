import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MapView, { Callout, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UsersMap({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [data, setData] = useState([]);

  const getusers = async () => {
    const user = await AsyncStorage.getItem("users");
    setData(JSON.parse(user));
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <View style={styles.container}>
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
        {data
          ? data.map((user) => (
              <Marker
                coordinate={{
                  latitude: Number(user[2]),
                  longitude: Number(user[3]),
                }}
              >
                <Callout>
                  <View>
                    <Text>name: {user[0]}</Text>
                  </View>
                </Callout>
              </Marker>
            ))
          : null}
      </MapView>
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
});

export default UsersMap;

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import EmptyState from "../../components/EmptyState";
import ListingProfile from "../../components/ListingProfiles";
import { store } from "../../redux/store";
import { updateMessage_id } from "../../redux/slices/userSlice";

export default function Connections({ navigation }) {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state?.user);

  const userConnection = async () => {
    console.log("in userConnection");
    try {
      const res = await axios.get(
        `https://bluecaller.tk/api/auth/get-connections`,
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        setData(res.data.connections);
        console.log(res.data);
      } else {
        setData(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = (id, image, name) => {
    store.dispatch(
      updateMessage_id({
        message_id: {
          user_id: id,
          image: image,
          name: name,
        },
      })
    );
    navigation.navigate("Chat");
  };

  useEffect(() => {
    userConnection();
  }, []);

  return data ? (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        {data.map((d) => (
          <ListingProfile props={d} key={d.id} sendMessage={sendMessage} />
        ))}
      </View>
    </ScrollView>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

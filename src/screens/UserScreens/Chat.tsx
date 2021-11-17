import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import EmptyState from "../../components/EmptyState";
import ListingProfile from "../../components/ListingProfiles";
import { store } from "../../redux/store";
import { updateMessage_id } from "../../redux/slices/userSlice";
import Messages from "./Messages";
import Message from "../../components/Messages";
import ChatMessage from "../../components/ChatMessage";

export default function Chat({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [sendmessage, setMessage] = useState("");
  const [data, setData] = useState(null);

  const getChat = async () => {
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/get-chat`,
        {
          otheruser: user.message_id.user_id,
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
      } else {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChat();
  }, []);

  const sendMessage = async () => {
    if (sendmessage == "") {
      alert("Insert a message");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/send-message`,
        {
          receiver_id: user.message_id.user_id,
          message: sendmessage,
        },
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        getChat();
        setMessage("");
      } else {
        setData(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    getChat();
    setRefreshing(false);
  };

  return data ? (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginBottom: -410 }}>
        <Message image={user.message_id.image} name={user.message_id.name} />
      </View>
      <View style={{ flex: 1, zIndex: -1 }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ backgroundColor: "#fff" }}>
            {data.map((d) => (
              <ChatMessage props={d} key={d.message.id} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Write a message..."
            underlineColorAndroid="transparent"
            value={sendmessage}
            onChangeText={(message) => setMessage(message)}
          />
        </View>

        <TouchableOpacity style={styles.btnSend} onPress={() => sendMessage()}>
          <Image
            source={require("../../../assets/send.png")}
            style={styles.iconSend}
          />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: "row",

    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
    marginTop: 10,
  },
  btnSend: {
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 300,
    padding: 5,
  },
});

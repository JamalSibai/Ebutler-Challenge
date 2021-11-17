import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";

export default function ListingProfile({ navigation, props, sendMessage }) {
  const [id, setId] = useState({ props });
  const onPress = (user_id) => {
    // console.log(id.props.id);
    sendMessage(user_id.props.id, user_id.props.image, user_id.props.name);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(id)}>
        <View style={styles.row}>
          <Image source={{ uri: props.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {props.name}
              </Text>
              <Text style={styles.mblTxt}>Message</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>+961 {props.phone}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
});

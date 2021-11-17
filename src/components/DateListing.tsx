import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/palette";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function DateListing({ props, navigate }) {
  const [data, setData] = useState({ props });

  const Press = () => {
    navigate(data.props.date_of_day);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => Press()}>
        <View style={styles.notificationBox}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <MaterialCommunityIcons
              name={"calendar-blank-multiple"}
              size={28}
              color={colors.blue}
              style={styles.icon}
            />
            <Text style={styles.description2}>{data.props.date_of_day}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    margin: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    fontSize: 18,
    color: colors.blue,
    textAlign: "center",
    marginRight: 70,
  },
  description2: {
    fontSize: 18,
    color: colors.blue,
    textAlign: "center",
  },
});

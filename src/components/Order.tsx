import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { useSelector } from "react-redux";
import { colors } from "../constants/palette";
import EmptyState from "../../components/EmptyState";

const Order = (props) => {
  const user = useSelector((state) => state?.user);
  const [data, setData] = useState({ props });
  console.log(data.props.props.id);

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            {data.props.props.freelancer[0].name}
          </Text>
          {/* <Text style={styles.date}>{data.props.props.date}</Text> */}
        </View>
        <View style={styles.bodyContainer}>
          <View>
            {/* <Text style={styles.upperBody}></Text> */}

            <Text style={styles.upperBody}>
              {" "}
              {data.props.props.category} Unit{" "}
            </Text>

            <Text style={styles.lowerBody}> {data.props.props.date} </Text>
          </View>

          <View>
            <View style={styles.icon}>
              <MaterialCommunityIcons name={"arrow-right"} size={25} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.blue,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 7,
    paddingBottom: 5,
    fontSize: 25,
  },
  date: {
    color: colors.white,
    paddingRight: 27,
    paddingTop: 12,
    paddingBottom: 10,
    fontSize: 17,
  },

  bodyContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upperBody: {
    color: "#000",
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  lowerBody: {
    color: "#000",
    fontSize: 22,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  icon: {
    paddingTop: 29,
    paddingRight: 25,
  },
});
export default Order;

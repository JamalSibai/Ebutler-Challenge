import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { useSelector } from "react-redux";
import { colors } from "../constants/palette";

const DetailedOrder = (props) => {
  const user = useSelector((state) => state?.user);
  const [data, setData] = useState({ props });
  console.log("data");
  console.log(data.props.props.id);

  const location = () => {
    Linking.openURL(
      "https://maps.google.com/?q=" +
        data.props.props.latitude +
        "," +
        data.props.props.longitude
    );
  };

  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={{ uri: data.props.props.freelancer[0].image }}
            />
          </View>
          <Text style={styles.headertxt}>
            {data.props.props.freelancer[0].name}
          </Text>
          {/* <Text style={styles.date}>{data.props.props.date}</Text> */}
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.upperBody}>
              Email: {data.props.props.freelancer[0].email}
            </Text>

            <Text style={styles.body}>
              Number: +961 {data.props.props.freelancer[0].phone}
            </Text>
            <Text style={styles.body}>
              Category: {data.props.props.category}
            </Text>

            <Text style={styles.lowerBody}>Date: {data.props.props.date} </Text>

            <View
              style={{
                alignItems: "center",
                marginTop: 25,
                paddingLeft: 10,
                marginBottom: -10,
              }}
            >
              <TouchableOpacity
                style={[styles.buttonContainer]}
                onPress={location}
              >
                <View style={styles.socialButtonContent}>
                  <Text style={styles.loginText}>Location</Text>
                </View>
              </TouchableOpacity>
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
  buttonContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    backgroundColor: "#000",
  },

  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 10,
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    marginTop: 5,
  },
  imageContent: {
    marginTop: -40,
  },
  loginText: {
    color: "white",
  },
  headerContainer: {
    flexDirection: "row",
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 7,
    paddingBottom: 5,
    fontSize: 25,
  },
  headertxt: {
    color: colors.white,
    paddingLeft: 15,
    // paddingTop: 10,
    paddingBottom: 5,
    fontSize: 25,
    alignSelf: "center",
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
  body: {
    color: "#000",
    fontSize: 22,
    paddingLeft: 20,
    paddingBottom: 8,
  },
  icon: {
    paddingTop: 29,
    paddingRight: 25,
  },
});
export default DetailedOrder;

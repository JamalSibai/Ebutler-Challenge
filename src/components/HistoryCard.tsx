import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import axios from "axios";
import { useSelector } from "react-redux";

export default function HistoryCard({ navigation, props }) {
  const user = useSelector((state) => state?.user);
  let rate;
  const [freelancer, setFreelancer] = useState({ props });
  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
    rate = rating;
    console.log("rate me " + rate);
    rateFreelancer();
  };

  const rateFreelancer = async () => {
    console.log("in historyCard");
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/rate_freelancer`,
        {
          rated_user: freelancer.props.id,
          rate: rate,
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
        alert("Successfuly Rated Freelancer!!");
      } else {
        // setData(res.data);
        // console.log("here");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerbox}>
            <Image style={styles.profileImage} source={{ uri: props.image }} />
            <View>
              <Text style={styles.name}>{props.name}</Text>

              <Text style={{ paddingLeft: 18 }}>(Rate)</Text>
              <Rating
                style={{ paddingLeft: 15, paddingTop: 5 }}
                type="star"
                imageSize={22}
                ratingCount={5}
                onFinishRating={ratingCompleted}
              />
            </View>
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
    // padding: 20,
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
    paddingBottom: 10,
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
    // marginTop: 5,
    marginLeft: -40,
  },
  name: {
    fontSize: 25,
    // marginTop: 10,
    marginBottom: -8,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#000",
    flex: 0.7,
    paddingLeft: 5,
  },
  rating: {
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    color: "#000",
    flex: 0.5,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280,
    marginTop: -50,
    // borderRadius: 30,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: "#000",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

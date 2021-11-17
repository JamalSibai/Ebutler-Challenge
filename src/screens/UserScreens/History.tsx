import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import EmptyState from "../../components/EmptyState";
import HistoryCard from "../../components/HistoryCard";

export default function History({ navigation }) {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state?.user);

  const userHistory = async () => {
    try {
      const res = await axios.get(
        `https://bluecaller.tk/api/auth/view-past-orders`,
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        setData(null);
      } else {
        setData(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHistory();
  }, []);

  return data ? (
    <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          {data.map((d) => (
            <HistoryCard props={d} key={d.id} />
          ))}
        </View>
      </ScrollView>
    </View>
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

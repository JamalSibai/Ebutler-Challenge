import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-elements";
import React, { useState, useEffect, useRef, Component } from "react";
import EmptyState from "../../components/EmptyState";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import FreelancerCard from "../../components/FreelancerCard";
import { colors } from "../../constants/palette";
import Order from "../../components/Order";

export default function Orders({ navigation }) {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state?.user);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const userOrders = async () => {
    try {
      const res = await axios.get(
        `https://6176555a03178d00173dab77.mockapi.io/users`
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
        console.log(data);
      } else {
        setData(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (data.length > 0) {
      if (text) {
        // Inserted text is not blank
        // Filter the Users
        // Update FilteredDataSource
        const newData = data.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with Users
        setFilteredDataSource(data);
        setSearch(text);
      }
    }
  };

  const SeachItemView = ({ item }) => {
    return <FreelancerCard props={item} />;
  };

  useEffect(() => {
    userOrders();
    searchFilterFunction("");
  }, []);

  return data ? (
    <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction("")}
        placeholder="Type User Name Here..."
        value={search}
      />
      <FlatList
        data={filteredDataSource}
        renderItem={SeachItemView}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

const styles = StyleSheet.create({});

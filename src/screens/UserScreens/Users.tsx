import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-elements";
import React, { useState, useEffect } from "react";
import EmptyState from "../../components/EmptyState";

import axios from "axios";

import { useSelector } from "react-redux";
import FreelancerCard from "../../components/FreelancerCard";

export default function Users({ navigation }) {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state?.user);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(10);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const userOrders = async () => {
    try {
      const res = await axios.get(
        `https://6176555a03178d00173dab77.mockapi.io/users?page=${1}&limit=${number}`
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res);
      } else {
        setData(res.data);
        setFilteredDataSource(res.data);
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

  const SearchItemView = ({ item }) => {
    return <FreelancerCard props={item} />;
  };
  const getNewData = () => {
    console.log("added");
    setNumber(number + 1);
    console.log(number);
    userOrders();
    console.log("ended");
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
        onClear={() => searchFilterFunction("")}
        placeholder="Type User Name Here..."
        value={search}
      />
      <FlatList
        onEndReached={getNewData}
        onEndReachedThreshold={1}
        data={filteredDataSource}
        renderItem={SearchItemView}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

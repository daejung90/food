import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={style.backgroundStyle}>
      <Octicons name='search' style={style.iconStyle} />
      <TextInput style={style.inputStyle} placeholder='Search' />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 8,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginLeft: 3,
    marginRight: 15,
  },
});

export default SearchBar;

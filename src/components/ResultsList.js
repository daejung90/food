import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsItem from "./ResultsItem";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsItem result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default ResultsList;

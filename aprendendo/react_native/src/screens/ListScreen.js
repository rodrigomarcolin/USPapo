import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friend = [
    { name: "Friend1", age: "17" },
    { name: "Friend2", age: "18" },
    { name: "Friend3", age: "19" },
    { name: "Friend4", age: "20" },
    { name: "Friend5", age: "21" },
  ];

  return (
    <FlatList
      data={friend}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age:{item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
  },
});

export default ListScreen;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const nome = "Lucas";
  return (
    <View>
      <Text style={styles.textStyle1}>Getting started with react native</Text>
      <Text style={styles.textStyle2}> My name is {nome} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

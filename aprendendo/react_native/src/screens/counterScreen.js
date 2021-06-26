import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const reducer = (state, action) => {
  return { ...state, count: state.count + action.payload };
};

const counterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const INCREMENT = 1;
  return (
    <View>
      <Text>Current count: {state.count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ payload: INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ payload: -1 * INCREMENT });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default counterScreen;

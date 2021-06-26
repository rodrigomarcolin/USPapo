import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case "change_green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case "change_blue":
      if (
        state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
      ) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const squareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  const COLOR_INCREMENT = 15;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default squareScreen;

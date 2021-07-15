import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import MapView from "react-native-maps";
import CriadorEventos from "../components/CriadorEventos";
import NavBar from "../components/NavBar";
import requisicao from "../api/requisicao";

const Template = ({ navigation }) => {
  const [state, setState] = useState(1);
  const [barra, setBarra] = useState(1);

  return (
    <View style={styles.tudo}>
      <View style={styles.barraTopo}>
        <Image
          source={require("../assets/logoUspapo.png")}
          style={styles.logo}
        />
        <Image source={require("../assets/moeda.png")} style={styles.moeda} />
      </View>
      <TouchableOpacity
        style={styles.botaoNav}
        onPress={() => setBarra(barra + 1)}
      >
        <Image
          style={styles.barraNav}
          source={require("../assets/barraPraBaixo.png")}
        />
      </TouchableOpacity>
      <View style={styles.barAberta}>
        {barra % 2 === 0 ? <NavBar navigation={navigation} /> : null}
        {barra % 2 === 0 ? (
          <TouchableOpacity
            style={styles.botaoFecha}
            onPress={() => setBarra(barra + 1)}
          />
        ) : null}
      </View>
      <View style={styles.meio}>
        {state % 2 === 0 ? <CriadorEventos /> : null}
      </View>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setState(state + 1);
        }}
      >
        {state % 2 === 1 ? (
          <Image
            source={require("../assets/botaoDeTarefas.png")}
            style={styles.botao}
          />
        ) : (
          <Image
            source={require("../assets/botaoDeTarefasMenos.png")}
            style={styles.botao}
          />
        )}
      </TouchableOpacity>
      <View style={styles.container}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(37, 150, 190, 0.2)",
    justifyContent: "space-between",
  },
  barraTopo: {
    zIndex: 1,
    backgroundColor: "#2596be",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 500,
    height: 110,
  },
  logo: {
    height: 90,
    width: 90,
    top: 15,
    right: 60,
  },
  moeda: {
    height: 60,
    width: 60,
    top: 15,
    right: 40,
  },
  botao: {
    height: 70,
    width: 70,
  },
  touchableOpacity: {
    height: 60,
    width: 60,
    alignSelf: "center",
    position: "absolute",
    top: 710,
  },
  meio: {
    height: 500,
    width: 290,
    alignSelf: "center",
    position: "absolute",
    top: 185,
  },
  barraNav: {
    height: 100,
    width: 250,
  },
  botaoNav: {
    height: 100,
    width: 250,
    alignSelf: "center",
    bottom: 580,
    position: "absolute",
  },
  barAberta: {
    zIndex: 1,
    bottom: 371,
    alignSelf: "center",
    position: "absolute",
  },
  botaoFecha: {
    width: 250,
    height: 40,
    position: "absolute",
    top: 260,
  },
});

export default Template;

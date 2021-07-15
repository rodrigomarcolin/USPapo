import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CriadorEventos from "../components/CriadorEventos";
import NavBar from "../components/NavBar";
import requisicao from "../api/requisicao";
import requisicaoUsers from "../api/requisicaoUsers";
import MiniPerfil from "../components/MiniPerfil";

const ProcuradorUsp = ({ navigation }) => {
  const [state, setState] = useState(1);
  const [barra, setBarra] = useState(1);
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await requisicaoUsers.get();
    setResults(response.data);
  };

  useEffect(() => {
    console.log(results);
    searchApi();
  }, []);

  return (
    <View style={styles.tudo}>
      <View style={styles.barraTopo}>
        <Image
          source={require("../assets/logoUspapo.png")}
          style={styles.logo}
        />
        <Image source={require("../assets/moeda.png")} style={styles.moeda} />
      </View>
      <View style={styles.viewOpcoes}>
        <TextInput style={styles.opcoes} placeholder="Campus:"></TextInput>
        <TextInput style={styles.opcoes} placeholder="Curso:"></TextInput>
        <TextInput style={styles.opcoes} placeholder="Nome:"></TextInput>
      </View>
      <View style={styles.buscar}>
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Text style={styles.buscarTexto}>Buscar</Text>
        </TouchableOpacity>
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
      <View
        style={{
          height: 300,
          width: 300,
          alignSelf: "center",
        }}
      >
        <MiniPerfil />
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
  opcoes: {
    backgroundColor: "#b0a4bc",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 12,
    width: 90,
    height: 40,
    textAlign: "center",
  },
  viewOpcoes: {
    flexDirection: "row",
    position: "absolute",
    bottom: 510,
    justifyContent: "space-between",
    alignSelf: "center",
    height: 100,
    width: 360,
  },
  buscar: {
    position: "absolute",
    bottom: 510,
    alignSelf: "center",
    height: 100,
    width: 360,
    top: 230,
  },
  buscarTexto: {
    backgroundColor: "#b0a4bc",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 12,
    width: 90,
    height: 40,
    textAlign: "center",
    color: "#706474",
    paddingTop: 3,
  },
});

export default ProcuradorUsp;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import requisicao from "../api/requisicao";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const CriadorEventos = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataHora, setDataHora] = useState("");

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  let latitudeI = "";
  let longitudeI = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    latitudeI = location.coords.latitude;
    longitudeI = location.coords.longitude;
  }

  const sendApi = async (
    titulo,
    descricao,
    categoria,
    dataHora,
    latitude,
    longitude
  ) => {
    try {
      await requisicao.post("/", {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        datahora: dataHora,
        latitude: latitude,
        longitude: longitude,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTitulo}
        placeholder="Nome do evento"
        onChangeText={(titulo) => setTitulo(titulo)}
        value={titulo}
      />
      <TextInput
        style={styles.inputTitulo2}
        placeholder="Data: __/__/__  _:_"
        onChangeText={(dataHora) => setDataHora(dataHora)}
        value={dataHora}
      />
      <TextInput
        style={styles.inputTitulo1}
        placeholder="Descrição"
        onChangeText={(descricao) => setDescricao(descricao)}
        value={descricao}
      />
      <TextInput
        style={styles.inputTitulo2}
        placeholder="Categoria"
        onChangeText={(categoria) => setCategoria(categoria)}
        value={categoria}
      />
      <Text style={styles.labelFoto}>Foto</Text>
      <View style={styles.bola}>
        <TouchableOpacity>
          <Entypo
            name="plus"
            size={100}
            color="#585454"
            style={{ alignSelf: "center", bottom: 5, right: 5 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() =>
          sendApi(
            titulo,
            descricao,
            categoria,
            dataHora,
            parseFloat(location.coords.latitude),
            parseFloat(location.coords.longitude)
          )
        }
      >
        <View style={styles.viewCriar}>
          <Text style={styles.criar}> Criar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 290,
    backgroundColor: "#c0ace4",
    borderRadius: 25,
  },
  inputTitulo: {
    borderRadius: 20,
    backgroundColor: "#b0a4bc",
    height: 50,
    width: 250,
    fontSize: 24,
    fontWeight: "bold",
    color: "#a084bc",
    alignSelf: "center",
    marginTop: 15,
    padding: 10,
  },
  labelFoto: {
    fontSize: 22,
    opacity: 0.5,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
  },
  bola: {
    backgroundColor: "#e0dcdc",
    height: 90,
    width: 90,
    borderRadius: 50,
    alignSelf: "center",
  },
  inputTitulo1: {
    borderRadius: 20,
    backgroundColor: "#b0a4bc",
    height: 50,
    width: 250,
    fontSize: 24,
    fontWeight: "bold",
    color: "#a084bc",
    alignSelf: "center",
    marginTop: 25,
    padding: 10,
  },
  inputTitulo2: {
    borderRadius: 20,
    backgroundColor: "#b0a4bc",
    height: 50,
    width: 250,
    fontSize: 24,
    fontWeight: "bold",
    color: "#a084bc",
    alignSelf: "center",
    marginTop: 30,
    padding: 10,
  },
  criar: {
    height: 50,
    width: 100,
    fontSize: 24,
    fontWeight: "bold",
    color: "#887c84",
    alignSelf: "center",
    padding: 10,
  },
  viewCriar: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#b0a4bc",
    width: 100,
    alignSelf: "center",
    alignItems: "center",
    height: 50,
    paddingLeft: 15,
  },
});

export default CriadorEventos;

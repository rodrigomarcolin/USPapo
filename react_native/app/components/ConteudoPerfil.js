import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CounteudoPerfil = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.bola} source={require("../assets/blasian.jpg")} />
      <View style={styles.info}>
        <Text style={styles.nome}>Mônica Souza</Text>
        <Text style={styles.detalhes}>Campus: IME</Text>
        <Text style={styles.detalhes}>Curso: CC</Text>
        <Text style={styles.detalhes}>Idade: 19 anos</Text>
        <Text style={styles.detalhes}>
          Experiencias Acadêmicas: {"\n"} -treinadora de hamster
        </Text>
        <Text style={styles.detalhes}>
          Interesses acadêmicos: {"\n"}- Estatística{"\n"} -IA
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 520,
    width: 260,
    alignSelf: "center",
    position: "absolute",
    top: 170,
  },
  bola: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: "center",
  },
  info: {
    marginTop: 5,
    height: 395,
    width: 260,
    backgroundColor: "#c0ace4",
    borderRadius: 25,
  },
  nome: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 7,
    marginBottom: 5,
  },
  detalhes: {
    fontSize: 18,
    marginTop: 25,
    marginLeft: 30,
  },
});

export default CounteudoPerfil;

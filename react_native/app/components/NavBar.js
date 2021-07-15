import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.imagem}
        source={require("../assets/barraDeOpcoes.png")}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("TelaPerfil")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.botao2}
        onPress={() => navigation.navigate("TelaProcurador")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.botao3}
        onPress={() => navigation.navigate("Mapa")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.botao4}
        onPress={() => navigation.navigate("TelaFeed")}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    height: 300,
    width: 250,
  },
  botao: {
    position: "absolute",
    alignSelf: "center",
    width: 200,
    height: 50,
    top: 12,
  },
  botao2: {
    position: "absolute",
    alignSelf: "center",
    width: 200,
    height: 50,
    top: 70,
  },
  botao3: {
    position: "absolute",
    alignSelf: "center",
    width: 200,
    height: 50,
    top: 130,
  },
  botao4: {
    position: "absolute",
    alignSelf: "center",
    width: 200,
    height: 50,
    top: 190,
  },
});

export default NavBar;

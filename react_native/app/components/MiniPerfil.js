import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MiniPerfil = () => {
  const imagem =
    "https://renatolalonge.files.wordpress.com/2011/11/facebook-profile-picture-no-pic-avatar.jpg";
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.foto} />
      <Text style={styles.nome}>Nome</Text>
      <Text style={styles.info1}>Campus: </Text>
      <Text style={styles.info2}>Curso: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 330,
    borderRadius: 30,
    backgroundColor: "#c0ace4",
    alignSelf: "center",
  },
  foto: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginLeft: 20,
    marginTop: 40,
  },
  nome: {
    textAlign: "center",
    bottom: 125,
    fontWeight: "bold",
    fontSize: 30,
  },
  info1: {
    position: "absolute",
    bottom: 60,
    left: 120,
    fontSize: 20,
  },
  info2: {
    position: "absolute",
    bottom: 100,
    left: 120,
    fontSize: 20,
  },
});

export default MiniPerfil;

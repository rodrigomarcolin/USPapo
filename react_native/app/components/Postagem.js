import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Postagem = ({ titulo, categoria, descricao, data }) => {
  var imagem = "https://image.flaticon.com/icons/png/512/74/74375.png";
  if (categoria === "jogos" || categoria === "Jogos") {
    imagem =
      "https://i.pinimg.com/originals/3c/b0/9e/3cb09e7dc65a413c3a4bf03affe8e1b2.jpg";
  } else if (categoria === "resenha" || categoria === "Resenha") {
    imagem =
      "https://st3.depositphotos.com/1809585/13076/i/600/depositphotos_130760650-stock-photo-two-friends-talking-at-home.jpg";
  } else if (categoria === "musica" || categoria === "Musica") {
    imagem =
      "https://zenitemarcas.com.br/wp-content/uploads/2018/05/como-registrar-uma-m%C3%BAsica.jpg";
  } else if (categoria === "estudos" || categoria === "Estudos") {
    imagem =
      "https://exame.com/wp-content/uploads/2020/01/melhores-livros-2019.jpg";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.inf}>{`Categoria: ${categoria}`} </Text>
      <Text style={styles.inf}>{`Data: ${data}`}</Text>
      <Text style={styles.inf}>{`Descricao: ${descricao}`}</Text>
      <Image source={{ uri: imagem }} style={styles.bola} />
    </View>
  );
};

export default Postagem;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 300,
    backgroundColor: "#c0ace4",
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 20,
  },
  bola: {
    height: 90,
    width: 90,
    borderRadius: 45,
    position: "absolute",
    top: 45,
    left: 20,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 28,
    alignSelf: "center",
    marginTop: 5,
    marginLeft: 70,
  },
  inf: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-start",
    color: "rgba(40,36,36, 0.78)",
    marginLeft: 120,
    height: 25,
    width: 180,
  },
});

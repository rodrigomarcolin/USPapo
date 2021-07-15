import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import requisicaoUsers from "../api/requisicaoUsers";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.fundo}>
      <KeyboardAvoidingView>
        <Image
          style={styles.logo}
          source={require("../assets/logoUspapo.png")}
        />
        <View>
          <Text style={styles.labels}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o email"
            placeholderTextColor="#a084bc"
          />
        </View>
        <View style={styles.senha}>
          <Text style={styles.labels}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a senha"
            placeholderTextColor="#a084bc"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("TelaFeed")}>
          <View style={styles.viewCriar}>
            <Text style={styles.criar}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.labels_cadastre}>Cadastre-se</Text>
        <Text style={styles.labels_esqueceu}>Esqueceu a senha?</Text>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 135,
    width: 210,
    opacity: 1,
    alignSelf: "center",
    marginBottom: 130,
    top: 70,
  },
  fundo: {
    backgroundColor: "rgba(37, 150, 190, 0.2)",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  senha: {
    marginTop: 40,
    marginBottom: 45,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#b8ace4",
    height: 70,
    width: 360,
    fontSize: 40,
    fontWeight: "bold",
    color: "#a084bc",
    padding: 10,
    paddingBottom: 11,
  },
  labels: {
    fontSize: 30,
    opacity: 0.6,
    fontWeight: "bold",
  },
  labels_cadastre: {
    fontSize: 30,
    opacity: 0.6,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
  },
  labels_esqueceu: {
    fontSize: 30,
    opacity: 0.6,
    fontWeight: "bold",
    alignSelf: "center",
  },
  viewCriar: {
    borderRadius: 20,
    backgroundColor: "#b0a4bc",
    width: 100,
    alignSelf: "center",
    alignItems: "center",
    height: 50,
    paddingLeft: 15,
    marginBottom: 20,
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
});

export default LoginScreen;

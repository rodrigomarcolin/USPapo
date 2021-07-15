import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import LoginScreen from "./app/screens/LoginScreen";
import Template from "./app/screens/Template";
import Feed from "./app/screens/Feed";
import Perfil from "./app/screens/Perfil";
import ProcuradorUsp from "./app/screens/ProcuradorUsp";
import Mapa from "./app/screens/Mapa";

const navigator = createStackNavigator(
  {
    TelaFeed: Feed,
    TelaLogin: LoginScreen,
    Template: Template,
    TelaPerfil: Perfil,
    TelaProcurador: ProcuradorUsp,
    Mapa: Mapa,
  },
  {
    initialRouteName: "TelaLogin",
    defaultNavigationOptions: { headerShown: false },
  }
);

export default createAppContainer(navigator);

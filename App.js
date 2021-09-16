import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



import Login from "./Login/Login"
import NewUser from './NewUser/NewUser'
import NewPrestador from './NewUser/NewPrestador'
import HomeUsuario from "./Usuario/HomeUsuario"
//import menu from './menu'
import Funcao from './NewUser/Funcao'
import HomePrestador from './Prestador/HomePrestador'

const AppNavigator = createSwitchNavigator({
  Home: Login,
  CadastroUSer: NewUser,
  NewPrestador: NewPrestador,
  Usuario : HomeUsuario,
  Prestador:HomePrestador,
  //menu:menu,
  Funcao : Funcao
  },
{
  initialRouteName: 'Usuario',
}
)

export default createAppContainer(AppNavigator);


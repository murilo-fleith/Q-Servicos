import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import LoginScreen from './LoginScreen';
import CadastroScreen from'./CadastroScreen';
//import CadastroUsuario from'./CadastroUsuario';
//import CadastroPrestador from'./CadastroPrestador'
import Login from "./Login/Login"
import NewUser from './NewUser/NewUser'

const AppNavigator = createSwitchNavigator({
  Home: Login,
  Cadastro: NewUser,
  Teste: CadastroScreen,
  //Prestador: CadastroPrestador,
  },
{
  initialRouteName: 'Home',
}
)

export default createAppContainer(AppNavigator);
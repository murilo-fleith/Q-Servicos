import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import CadastroScreen from'./CadastroScreen';
import CadastroUsuario from'./CadastroUsuario';
import CadastroPrestador from'./CadastroPrestador'


const AppNavigator = createSwitchNavigator({
  Home: LoginScreen,
  Cadastro: CadastroScreen,
  Usuario: CadastroUsuario,
  Prestador: CadastroPrestador,
  },
{
  initialRouteName: 'Home',
}
)

export default createAppContainer(AppNavigator);
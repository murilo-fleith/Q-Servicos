import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import Home from "./Home/Home"
import Login from "./Login/Login"
import LoginPrestador from './Login/LoginPrestador'
import NewUser from './NewUser/NewUser'
import NewPrestador from './NewUser/NewPrestador'
import HomeUsuario from "./Usuario/HomeUsuario"
import Funcao from './NewUser/Funcao'
import HomePrestador from './Prestador/HomePrestador'


import Agenda from './Prestador/Agenda'

const AppNavigator = createSwitchNavigator({
  Home:Home,
  Login: Login,
  LoginPrestador: LoginPrestador,
  CadastroUser: NewUser,
  NewPrestador: NewPrestador,
  Usuario: HomeUsuario,
  Prestador: HomePrestador,
  Funcao: Funcao,
  Agenda: Agenda
},
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppNavigator);


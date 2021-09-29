import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



import Login from "./Login/Login"
import NewUser from './NewUser/NewUser'
import NewPrestador from './NewUser/NewPrestador'
import HomeUsuario from "./Usuario/HomeUsuario"
import Funcao from './NewUser/Funcao'
import HomePrestador from './Prestador/HomePrestador'
//import Chat from './Chat'
import Agenda from './Prestador/Agenda'

const AppNavigator = createSwitchNavigator({
  Home: Login,
  CadastroUSer: NewUser,
  NewPrestador: NewPrestador,
  Usuario: HomeUsuario,
  Prestador: HomePrestador,
  Funcao: Funcao,
  //Chat:Chat,
  Agenda: Agenda
},
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppNavigator);


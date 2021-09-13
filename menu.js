import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function testes({ navigation }) {
  
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}>
            <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Cadastro")}>
            <Text>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Usuario")}>
            <Text>Usuario</Text>
        </TouchableOpacity>


        
      </View>
    );
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginTop: 200,
    fontSize: 30,
    color: '#DCDCDC'
  },
  btn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F24F00",
    borderRadius: 50,
    marginTop: 30
  }
});
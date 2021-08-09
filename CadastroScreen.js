import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> VOCÊ É? </Text>

        <TouchableOpacity style={styles.alterar} >
        <Button
        justifyContent= 'center'
        alignItems= 'center'
        color ="#FA5700"
        title = "Usuario"
        onPress={() => this.props.navigation.navigate('Usuario')}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cadastar}>
        <Button
        justifyContent= 'center'
        alignItems = 'center'
        color= "#00FF00"
        borderRadius= '20' 
        title = "Prestador"
        onPress={() => this.props.navigation.navigate('Prestador')}
        />

        </TouchableOpacity>
       
      </View>
    );
  }
}


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#000000"
  },
  title:{
    textAlign: 'center',
    marginTop: 200,
    fontSize: 30,
    color: '#DCDCDC'
  },
  cadastar:{
    backgroundColor: "#00FF00",
    margin: 15,
    padding: 1,
    color: "#000000",
    //borderRadius: 20,
    justifyContent: 'center',
    //alignItems: 'center' 
  },

  alterar:{
    backgroundColor: "#FA5700",
    margin: 15,
    marginTop: 90,
    padding: 1,
    color: "#000000",
    //borderRadius: 20,
    justifyContent: 'center',
    //alignItems: 'center'
       
  },

});
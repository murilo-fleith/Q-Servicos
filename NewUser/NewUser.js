import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");


    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }
    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Text style={styles.title}> Cadastro  </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            
            <TextInput
                style={styles.input}
                secureTextEntry={true} //carecterer de senha 
                placeholder="Digite sua senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {errorLogin === true
                ?
                <View style={style.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.waringAlert}> Senha ou Email Invalidos</Text>
                </View>
                :
                <View />
            }
            {email === "" || password === ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Cadastar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={()=> {register()}}>
                    <Text style={styles.textButtonLogin}>Cadastrar</Text>
                </TouchableOpacity>

            }

        </KeyboardAvoidingView>
    )
}
//onPress={() => this.props.navigation.navigate('CadastroPrestador')


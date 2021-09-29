import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");


    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code;
                var errorMessage = error.message;

            });
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //var uid = user.uid;
                navigation.navigate("Usuario")
                
            } else {
                console.log("nao logado")
            }
        });
    }, [])



    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Text style={styles.title}> NOME APP  </Text>
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
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#FF0000"
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
                    <Text style={styles.textButtonLogin}>ENTRAR</Text>
                </TouchableOpacity>
                :
                //onpresss funcao abaixo  
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => { loginFirebase() }}>
                    <Text style={styles.textButtonLogin}>ENTRAR</Text>

                </TouchableOpacity>

            }

            <Text style={styles.registration}>Se você ainda nao é cadastrado!
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate("Funcao")}
                >
                    Cadastre-se agora!
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}
//onPress={() => this.props.navigation.navigate('CadastroPrestador')

